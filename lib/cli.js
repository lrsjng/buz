const fs = require('fs');
const path = require('path');
const minimist = require('minimist');
const buz = require('./buz');


const HELP = `Usage: buz [OPTIONS] FILE

Options:
  -h, --help:  show this help message
  -s, --show:  show es5 and minified code

Arguments:
  FILE:        a single input file path
`;


const exit = (code = 0, showHelp) => {
    if (showHelp) {
        console.log(HELP);
    }
    process.exit(code); // eslint-disable-line no-process-exit
};

const read = (name, encoding = 'utf-8') => {
    try {
        return fs.readFileSync(name, {encoding});
    } catch (err) {
        return null;
    }
};

const format_len = buzzed => {
    const keys = Object.keys(buzzed);
    const width = keys.reduce((max, key) => Math.max(max, `${buzzed[key].length}`.length), 0);
    const lens = {};
    keys.forEach(key => {
        lens[key] = `            ${buzzed[key].length}`.slice(-width);
    });
    return lens;
};

const show = (es5, min) => {
    console.log(`
--es5---------------------------
${es5}
--------------------------------

--min---------------------------
${min}
--------------------------------
`);
};

const cli = argv => {
    const miniopts = {
        boolean: ['help', 'show'],
        alias: {help: 'h', show: 's'}
    };
    const args = minimist(argv.slice(2), miniopts);

    if (args.help) {
        exit(0, true);
    }

    if (Object.keys(args).length !== 5 || args._.length !== 1) {
        exit(1, true);
    }

    const filename = path.resolve(args._[0]);
    console.log(`buzzing '${filename}' ...`);

    const content = read(filename);
    if (content === null) {
        console.log('can\'t read file :(');
        exit(2);
    }

    const buzzed = buz(content);

    if (args.show) {
        show(buzzed.es5, buzzed.min);
    }

    const lens = format_len(buzzed);
    ['src', 'es5', 'min', 'zip'].forEach(key => {
        console.log(` ${key}  ${lens[key]}`);
    });
};

module.exports = cli;
