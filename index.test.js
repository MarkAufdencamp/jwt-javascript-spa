const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf8');
const script = fs.readFileSync(path.resolve(__dirname, 'index.js'), 'utf8');
const configScript = fs.readFileSync(path.resolve(__dirname, 'config.js'), 'utf8');

describe('index.js', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    // Inject CONFIG and override for testing
    eval(configScript);
    window.CONFIG.API_BASE_URL = 'http://test-api.com';
    jest.resetModules();
  });

  test('Login form submission calls fetch with CONFIG.API_BASE_URL', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ token: 'fake-token' }),
      })
    );

    // Execute script
    eval(`(function(){ ${script} })()`);

    const loginForm = document.getElementById('login');
    document.getElementById('username').value = 'testuser';
    document.getElementById('password').value = 'password';

    // Dispatch submit event
    loginForm.dispatchEvent(new Event('submit'));

    // Wait for async operations
    await new Promise(resolve => setTimeout(resolve, 0));

    // Assertions
    expect(global.fetch).toHaveBeenCalledWith(`${window.CONFIG.API_BASE_URL}/authenticate`, expect.objectContaining({
      method: 'POST',
      body: JSON.stringify({ username: 'testuser', password: 'password' })
    }));
  });
});
