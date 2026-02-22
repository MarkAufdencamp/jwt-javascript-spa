const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, 'accounts.html'), 'utf8');
const script = fs.readFileSync(path.resolve(__dirname, 'accounts.js'), 'utf8');

describe('accounts.js', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    jest.resetModules();
    
    // Setup initial JWT
    localStorage.setItem('jwt', 'valid-token');

    // Mock fetch
    global.fetch = jest.fn(() =>
        Promise.resolve({
            ok: true,
            json: () => Promise.resolve([]),
        })
    );
  });

  test('Domain selection dropdown exists', () => {
    const dropdown = document.getElementById('domain-select');
    expect(dropdown).not.toBeNull();
  });
});
