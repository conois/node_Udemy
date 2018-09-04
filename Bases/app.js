const {crearArchivo} = require("./multiplicar/multiplicar"); 
const {listarTabla} = require("./multiplicar/multiplicar"); 
const argv = require('./../config/yargs').argv; 


//comandos independientes 
console.log(argv);
//listado de verbos-acciones que recibe mi app
let comando = argv._[0]

//Listado de acciones segun el caso que estan ingresando como accion 

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado : ${archivo}`))
            .catch(err => console.log(err))
        break;

    case 'listar':
        listarTabla(argv.base, argv.limite)
        .then( resp => console.log(resp))
        .catch( err => console.log(err))
        break;

    default:
        console.log("comando no reconocido")
}