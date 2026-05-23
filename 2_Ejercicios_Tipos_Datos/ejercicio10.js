/*
10. Multiplicar valores numéricos en un Objeto
Ejercicio: Crea una función multiplyNumeric(obj) que recorra todas las propiedades de un objeto y, si el valor es de tipo Number, lo multiplique por 2.

Requisito: La función debe modificar el objeto original "in-place".
*/

function multiplyNumeric(obj){
    for(let propiedad in obj){
        if(typeof(obj[propiedad]) === "number"){
            obj[propiedad]*=2
        }
    }
}

const user = {
    edad: 20,
    altura: 1,
    nombre: "Luis"
}

multiplyNumeric(user)

console.log(user)