const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, 'domains.html'), 'utf8');
const script = fs.readFileSync(path.resolve(__dirname, 'domains.js'), 'utf8');
const configScript = fs.readFileSync(path.resolve(__dirname, 'config.js'), 'utf8');

describe('domains.js', () => {
  let openSpy;

  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    // Inject CONFIG and override for testing
    eval(configScript);
    window.CONFIG.API_BASE_URL = 'http://test-api.com';
    jest.resetModules();
    
    // Mock window.open
    openSpy = jest.fn();
    delete window.open;
    window.open = openSpy;
    
    // Mock window.location (simplest way for jsdom if strict navigation is off, otherwise tricky)
    delete window.location;
    window.location = { href: '' };

    // Setup initial JWT so it doesn't redirect immediately
    localStorage.setItem('jwt', 'valid-token');

    // Mock fetch
    global.fetch = jest.fn(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve([]),
        })
    );
  });

  test('Logout clears JWT and redirects to index.html using window.open', () => {
    // Execute script
    eval(script);
    
    // Trigger DOMContentLoaded
    const event = new Event('DOMContentLoaded');
    document.dispatchEvent(event);

    // Find the button
    const logoutBtn = document.getElementById('logout-btn');
    
    // Dispatch click event
    logoutBtn.click();

    // Assertions
    expect(localStorage.getItem('jwt')).toBeNull();
    // This expectation should fail currently because it uses location.href
    expect(openSpy).toHaveBeenCalledWith('index.html', '_self');
  });

  test('fetchDomains calls API with CONFIG.API_BASE_URL', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([{ id: 1, domain: 'test', tld: 'com' }]),
      })
    );

    // Execute script
    eval(script);
    
    // Trigger DOMContentLoaded
    const event = new Event('DOMContentLoaded');
    document.dispatchEvent(event);

    // Wait for async operations
    await new Promise(resolve => setTimeout(resolve, 0));

    // Assertions
    expect(global.fetch).toHaveBeenCalledWith(`${window.CONFIG.API_BASE_URL}/domains`, expect.any(Object));
  });
});
