function write (string){
    process.stdout.write(string);
}
import chalk from 'chalk';
import boxen from 'boxen';

write(chalk.blue.bgGreen('Hello chalk'));

for(let i=0; i<16; i++){
    for(let j=0; j<16; j++){
        let color = (i*j).toString()
        write(chalk.ansi256(color)(color.padEnd(4,' ')));
    }
    write('\n');
}

write(boxen(chalk.green.bgRed.underline('Boxy 1'), {
    padding: 2,
    margin: 1,
    title: 'Tiitel',
    titleAlignment:'center'
}));

write(boxen(chalk.white.bgBlack.italic('Boxy 2'), {
    padding: 3,
    margin: 2,
    borderStyle:'double',
}));

write(boxen(chalk.red.bgBlack.bold('Boxy 3'), {
    padding: 2,
    margin: 3,
    title: 'tiitel 2',
    titleAlignment:'left'
}));

write(boxen(chalk.magenta.bgGray.dim('Boxy 4'), {
    padding: 1,
    margin: 2
}));

write(boxen(chalk.white.bgCyan.strikethrough('Boxy 5'), {
    padding: 1,
    margin: 3
}));

write(boxen(chalk.blue.bgGreen.overline('Boxy 6'), {
    padding: 1,
    margin: 3
}));
