const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Is the number base'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false,
                    describe: 'show the table on console'
                })
                .check( (argv, options) =>{
                    if ( isNaN(argv.b) ) {
                        throw 'la base tiene que ser un numero'
                    }
                    return true;
                } )
                .argv;

module.exports = argv;