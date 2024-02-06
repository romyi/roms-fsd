const chalk = require('chalk')

const brief = `
usage: [${chalk.cyan('layer')}] [${chalk.yellow('slice')}] -[${chalk.magentaBright('command')}]

${chalk.bold('layer')} [sh en fe wi pa]
${chalk.bold.cyan('sh')} shared
${chalk.bold.cyan('en')} entity
${chalk.bold.cyan('fe')} feature
${chalk.bold.cyan('wi')} widget
${chalk.bold.cyan('pa')} page

${chalk.bold('slice')} [your-slice-name]
${chalk.yellow('kebab-case-named')} slice

${chalk.bold('command')} -[a r]
${chalk.magentaBright('-a')} (default) adds a slice to layer
${chalk.magentaBright('-r')} removes a slice from layer

`

const [layer, slice] = process.argv.slice(2);
if (!layer) {
    console.log(brief)
    return;
}

console.log(layer, slice)