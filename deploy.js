const { readFileSync, writeFileSync } = require('fs');
const { name } = require('./package');

const htmlContent = readFileSync('./build/index.html').toString();

const githubPagesStaticPrefix = ['https://shuoshubao.github.io', name, 'build/static'].join('/');

// writeFileSync('./index.html', htmlContent.replace(/\/static/g, githubPagesStaticPrefix) + '\n');
writeFileSync('./index.html', htmlContent + '\n');
