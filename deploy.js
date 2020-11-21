const { readFileSync, writeFileSync } = require('fs');

const htmlContent = readFileSync('./build/index.html').toString().trim() + '\n';

writeFileSync('./index.html', htmlContent);
