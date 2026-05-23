/*

3. Operaciones con Objetos Literales
Ejercicio: Realiza las siguientes acciones en orden:

Crea un objeto vacío llamado user.
Agrega la propiedad name con el valor "John".
Cambia el valor de name a "Pete".
Elimina la propiedad name del objeto.

*/

const user = {}

user.name="jhon"

console.log(user)

user.name="Pete"

console.log(user)

delete user.name;

console.log(user)