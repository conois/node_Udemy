const fs = require("fs");

let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {
        if (!Number(base)){
            reject("El dato ingresado como base debe ser un número"); 
            return
        }
        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${ i } = ${base*i} \n`
        }

        resolve(console.log(data))
    })
}




let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)){
            reject("El dato ingresado como base debe ser un número"); 
            return
        }

        let data = "";

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${ i } = ${base*i} \n`
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limite}`, data, err => {
            if (err) {
                reject(err);
            } else {
                resolve(`tabla-${base}-al-${limite}`)
            }
        })
    })

}

module.exports = {
    crearArchivo, 
    listarTabla
}