const fs = require('fs');
const path = require('path');

describe('config.js', () => {
  let script;

  beforeEach(() => {
    delete window.CONFIG;
    script = fs.readFileSync(path.resolve(__dirname, 'config.js'), 'utf8');
  });

  test('CONFIG object is defined globally', () => {
    if (script) {
      eval(script);
    }
    expect(window.CONFIG).toBeDefined();
  });

  test('CONFIG.API_BASE_URL is set to http://localhost:3000', () => {
    if (script) {
      eval(script);
    }
    expect(window.CONFIG.API_BASE_URL).toBe('http://localhost:3000');
  });
});
