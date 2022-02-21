
const yargs = require('yargs');
const { options } = require('yargs');
const {crearArchivo} = require('./helpers/multiplicar');
const argv = require ('./config/yargs')


console.clear();

const base = 2;

crearArchivo(argv.b, argv.l)
    .then(archivo => console.log(archivo, 'creado'))
    .catch ( error => console.log(error))
