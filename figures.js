
const chalk = require('chalk');
let figures = {

    one() {
        console.log(chalk.green('||========================')),
        console.log(chalk.green('||  //')),
        console.log(chalk.green('|| //')),
        console.log(chalk.green('||//')),
        console.log(chalk.green('||/')),
        console.log(chalk.green('||')),
        console.log(chalk.green('||')),
        console.log(chalk.green('||')),
        console.log(chalk.green('||')),
        console.log(chalk.green('||')),
        console.log(chalk.green('||')),
        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||=========================='));
    },
    two() {
        console.log(chalk.green('||========================'));
        console.log(chalk.green('||  //\t\t ' + chalk.grey.bgWhite('||')));
        console.log(chalk.green('|| //\t\t ' + chalk.grey.bgWhite('||')));
        console.log(chalk.green('||//\t\t ' + chalk.grey.bgWhite('||')));
        console.log(chalk.green('||/'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||=========================='));
    },
    three() {
        console.log(chalk.green('||========================'));
        console.log(chalk.green('||  //\t\t ' + chalk.grey.bgWhite('||') + chalk.red('\tWoW hold your horses')));
        console.log(chalk.green('|| //\t\t ' + chalk.grey.bgWhite('||') + chalk.red('\tAnd Think!!! Please')));
        console.log(chalk.green('||//\t\t ' + chalk.grey.bgWhite('||')));
        console.log(chalk.green('||/\t     ' + chalk.yellow(' $$$$$$$$')));
        console.log(chalk.green('||\t     |' + chalk.cyan(' 3   3 ') + ' |'));
        console.log(chalk.green('||\t     |   ___  |'));
        console.log(chalk.green('||\t       ------'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||=========================='));
    },
    four() {
        console.log(chalk.green('||========================'));
        console.log(chalk.green('||  //\t\t ' + chalk.grey.bgWhite('||') + chalk.red('\tPlease')));
        console.log(chalk.green('|| //\t\t ' + chalk.grey.bgWhite('||') + chalk.red('\tThink Properly')));
        console.log(chalk.green('||//\t\t ' + chalk.grey.bgWhite('||')));
        console.log(chalk.green('||/\t     ' + chalk.yellow(' $$$$$$$$')));
        console.log(chalk.green('||\t     |' + chalk.cyan(' 3   3 ') + ' |'));
        console.log(chalk.green('||\t     |   ___  |'));
        console.log(chalk.green('||\t       ------'));
        console.log(chalk.green('||\t         ||'));
        console.log(chalk.green('||\t         ||'));
        console.log(chalk.green('||\t         ||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||=========================='));
    },
    five() {
        console.log(chalk.green('||========================'));
        console.log(chalk.green('||  //\t\t ' + chalk.grey.bgWhite('||') + chalk.red('\tPlease')));
        console.log(chalk.green('|| //\t\t ' + chalk.grey.bgWhite('||') + chalk.red('\tHELP!!!!')));
        console.log(chalk.green('||//\t\t ' + chalk.grey.bgWhite('||') + chalk.red('\tSAVE ME!!!')));
        console.log(chalk.green('||/\t     ' + chalk.yellow(' $$$$$$$$')));
        console.log(chalk.green('||\t     |' + chalk.cyan(' 3   3 ') + ' |'));
        console.log(chalk.green('||\t     |  ____  |'));
        console.log(chalk.green('||\t       ------'));
        console.log(chalk.green('||\t         ||'));
        console.log(chalk.green('||\t     ^   ||   ^'));
        console.log(chalk.green('||\t       ^----^'));
        console.log(chalk.green('||\t         ||'));

        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||=========================='));
    },
    six() {
        console.log(chalk.green('||========================'));
        console.log(chalk.green('||  //\t\t ' + chalk.grey.bgWhite('||')));
        console.log(chalk.green('|| //\t\t ' + chalk.grey.bgWhite('||') + chalk.red('\tYOU COULDN\'T')));
        console.log(chalk.green('||//\t\t ' + chalk.grey.bgWhite('||') + chalk.red('\tSAVE ME!!!')));
        console.log(chalk.green('||/\t     ' + chalk.yellow(' $$$$$$$$')));
        console.log(chalk.green('||\t     |' + chalk.red('  3   3 ') + '|'));
        console.log(chalk.green('||\t     |   ___  |'));
        console.log(chalk.green('||\t       ------'));
        console.log(chalk.green('||\t         ||'));
        console.log(chalk.green('||\t     ^   ||   ^'));
        console.log(chalk.green('||\t       ^----^'));
        console.log(chalk.green('||\t         ||'));
        console.log(chalk.green('||             ^    ^'));
        console.log(chalk.green('||           ^        ^'));
        console.log(chalk.green('||         ^            ^'));
        console.log(chalk.green('||'));
        console.log(chalk.green('||') + chalk.red.bold('\t   GAME OVER!'));
        console.log(chalk.green('||=========================='));
    },
    seven() {
        console.log(chalk.green('||================================')),
            console.log(chalk.green('||  //')),
            console.log(chalk.green('|| //' + chalk.blue.bold('\tYOU Did It You are my HERO!!'))),
            console.log(chalk.green('||//')),
            console.log(chalk.green('||/') + chalk.blue.bold('\t\tYOU Win!!')),
            console.log(chalk.green('||')),
            console.log(chalk.green('||')),
            console.log(chalk.green('||\t     ' + chalk.yellow(' $$$$$$$$')));
        console.log(chalk.green('||\t     |' + chalk.blue('  3   3 ') + '|'));
        console.log(chalk.green('||\t     |   ___  |'));
        console.log(chalk.green('||\t       ------'));
        console.log(chalk.green('||\t         ||'));
        console.log(chalk.green('||\t     ^   ||   ^'));
        console.log(chalk.green('||\t       ^----^'));
        console.log(chalk.green('||\t         ||'));
        console.log(chalk.green('||             ^    ^'));
        console.log(chalk.green('||           ^        ^'));
        console.log(chalk.green('||         ^            ^'));
        console.log(chalk.green('||=================================='));
    }

}
module.exports = figures;//will export the whole figures object ....this will be accesed in hangman.js