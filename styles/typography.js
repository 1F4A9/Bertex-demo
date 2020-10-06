const fs = require('fs');

const Typography = require('typography');
const fairyGatesTheme = require('typography-theme-fairy-gates');

const typography = new Typography(fairyGatesTheme);

fs.writeFileSync('styles/typography.css', typography.toString());