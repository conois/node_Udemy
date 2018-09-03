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

let getEmpleado = async (id) => {

        let empleadoDB = empleados.find( empleado => empleado.id === id)

        if(!empleadoDB){
            throw  new Error (`No existe el empleado con el id ${id}`)
        }
        else{
            return empleadoDB
        }
}

let getSalario = async (empleado) => {

        let salarioDB = salarios.find( salario => salario.id === empleado.id)

        if(!salarioDB){
            throw new Error(`No hay información del salario de ${empleado.nombre}`)
        }
        else {
            return ({
                nombre: empleado.nombre, 
                id: empleado.id,
                salario: salarioDB.salario, 
            })
        }
}

let getInformation = async (id) => {
    let empleado = await getEmpleado(id); 
    let resp = await getSalario(empleado); 

    return (`${ resp.nombre} tiene un salario de ${ resp.salario}$$`)

}

 getInformation(2).then( res => console.log(res)).catch(error => console.log(error))