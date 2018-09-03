let empleados = [
    {
        id: 1, 
        nombre: "Fernando", 
    }, 
    {
        id: 2, 
        nombre: "Melissa", 
    }, 
    {
        id: 3, 
        nombre: "Coni", 
    }
]

let salarios = [
    {
        id: 1, 
        salario: 1000
    }, 
    {
        id: 3, 
        salario: 3000 
    }
]


let getEmpleado = (id) => {
    return new Promise ((resolve, reject) => {
        let empleadoDB = empleados.find( empleado => empleado.id === id)

        if(!empleadoDB){
            reject(`No existe el empleado con el id ${id}`)
        }
        else{
            resolve(empleadoDB)
        }
    })
}

let getSalario = (empleado) => {
    return new Promise ((resolve, reject) => {
        let salarioDB = salarios.find( salario => salario.id === empleado.id)

        if(!salarioDB){
            reject(`No hay información del salario de ${empleado.nombre}`)
        }
        else {
            resolve({
                nombre: empleado.nombre, 
                id: empleado.id,
                salario: salarioDB.salario, 
            })
        }
    })
}


getEmpleado(2).then( empleado => {
    getSalario(empleado).then(res => {
        console.log(`El empleado ${res.nombre} tiene un salario de $$ ${res.salario}`)
    }, error => {
        console.log(error)
    })
}, error => {
    console.log(error)
})
