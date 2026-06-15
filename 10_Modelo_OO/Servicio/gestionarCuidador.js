const Cuidador = require('../Modelo/Cuidador')

const Cuidador1 = new Cuidador("Luis",20)
const Cuidador2 = new Cuidador("Michín",30)
const Cuidador3 = new Cuidador("Cesar",50)

console.log(Cuidador1.obtenerInfo())
console.log(Cuidador2.obtenerInfo())
console.log(Cuidador3.obtenerInfo())

console.log(Cuidador1.esExperimentado())
console.log(Cuidador2.esExperimentado())
console.log(Cuidador3.esExperimentado())