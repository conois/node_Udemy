let opts = {
    base: {
        alias: "b",
        demand: true,
    },
    limite: {
        alias: "l",
        default: 10,
    }
}

const argv = require('yargs')
    .command('listar', "ejecuta aplicacion en linea de comando", opts)
    .command('crear', "Crea un archivo a partir de una base hasta un limite", opts)
    .help()
    .argv;


module.exports = {
    argv
}