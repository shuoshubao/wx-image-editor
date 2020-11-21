const { readFileSync, writeFileSync } = require('fs');

const htmlContent = readFileSync('./build/index.html').toString();

writeFileSync('./index.html', htmlContent.replace(/\/static\//g, '/build/static/') + '\n');
