const Animal = require('../Modelo/Animal');

Animal = require('./modelo/Animal');

const animal1 = new Animal("Leon Kennedy",4,"León")
const animal2 = new Animal("Lobo Estepario",7,"Lobo")
const animal3 = new Animal("Tigresa",15,"Tigre")
const animal4 = new Animal("Piolín",2,"Periquito")

console.log(animal1.obtenerInfo())

