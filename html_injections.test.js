const fs = require('fs');
const path = require('path');

const files = [
  'index.html',
  'signup.html',
  'mainmenu.html',
  'aboutme.html',
  'accounts.html',
  'domains.html'
];

describe('HTML Injections', () => {
  files.forEach(file => {
    test(`${file} should include config.js before the main script`, () => {
      const html = fs.readFileSync(path.resolve(__dirname, file), 'utf8');
      const configScriptTag = '<script src="config.js"></script>';
      const hasConfigScript = html.includes(configScriptTag);
      
      expect(hasConfigScript).toBe(true);

      const mainScriptMatch = html.match(/<script.*src=".*\.js".*><\/script>/g);
      if (mainScriptMatch) {
        const configIndex = html.indexOf(configScriptTag);
        const mainScriptIndex = html.indexOf(mainScriptMatch.find(s => !s.includes('config.js')));
        if (mainScriptIndex !== -1) {
          expect(configIndex).toBeLessThan(mainScriptIndex);
        }
      }
    });
  });
});
