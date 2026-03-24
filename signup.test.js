const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, 'signup.html'), 'utf8');
const script = fs.readFileSync(path.resolve(__dirname, 'signup.js'), 'utf8');
const configScript = fs.readFileSync(path.resolve(__dirname, 'config.js'), 'utf8');

describe('signup.js', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    // Inject CONFIG and override for testing
    eval(configScript);
    window.CONFIG.API_BASE_URL = 'http://test-api.com';
    jest.resetModules();
  });

  test('Signup form submission calls fetch with CONFIG.API_BASE_URL', async () => {
    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve({ message: 'User created' }),
      })
    );

    // Execute script
    eval(`(function(){ ${script} })()`);

    const signupForm = document.getElementById('signup-form');
    document.getElementById('username').value = 'newuser';
    document.getElementById('password').value = 'password123';
    document.getElementById('passwordConfirmation').value = 'password123';

    // Dispatch submit event
    signupForm.dispatchEvent(new Event('submit'));

    // Wait for async operations
    await new Promise(resolve => setTimeout(resolve, 0));

    // Assertions
    // This should fail because signup.js doesn't fetch yet
    expect(global.fetch).toHaveBeenCalledWith(`${window.CONFIG.API_BASE_URL}/users`, expect.anything());
  });
});
