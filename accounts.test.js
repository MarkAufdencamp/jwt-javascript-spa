const fs = require('fs');
const path = require('path');

const html = fs.readFileSync(path.resolve(__dirname, 'accounts.html'), 'utf8');
const script = fs.readFileSync(path.resolve(__dirname, 'accounts.js'), 'utf8');

describe('accounts.js', () => {
  beforeEach(() => {
    document.documentElement.innerHTML = html.toString();
    jest.resetModules();
  });

  test('Clicking Logout button clears JWT and redirects to index.html', () => {
    // Setup
    localStorage.setItem('jwt', 'fake-token');
    
    // Execute script
    eval(script);

    // Find the button
    const logoutBtn = document.getElementById('logout-btn');
    
    // Dispatch click event
    logoutBtn.click();

    // Assertions
    expect(localStorage.getItem('jwt')).toBeNull();
    expect(window.open).toHaveBeenCalledWith('index.html', '_self');
  });
});
