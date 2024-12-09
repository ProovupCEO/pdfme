const fs = require('fs');
const path = require('path');
const version = require('./package.json').version;
try {
  const filePath = path.join(__dirname, 'src/constants.ts');

  let content = fs.readFileSync(filePath, 'utf8');

  content = content.replace(
    /export const PDFME_VERSION = '.*';/,
    `export const PDFME_VERSION = '${version}';`
  );

  fs.writeFileSync(filePath, content, 'utf8');

  console.log(`Replaced PDFME_VERSION with '${version}' in ${filePath}`);
} catch (error) {
  console.error('Error replacing PDFME_VERSION:', error);
  process.exit(1);
}
