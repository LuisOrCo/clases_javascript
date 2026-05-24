```javascript
/**
 * EJERCICIO 1: Operadores Aritméticos y de Asignación Compuesta
 * Reto: Declara una variable llamada 'puntaje' e inicialízala en 10.
 * Utilizando exclusivamente operadores de asignación compuesta, realiza:
 * 1. Súmale 5.
 * 2. Multiplícalo por 3.
 * 3. Réstale 10.
 * 4. Divídelo entre 2.
 * ¿Cuál es el valor final de 'puntaje'?
 */
// Tu código aquí:

let puntaje = 10;

puntaje+=5
puntaje*=3
puntaje-=10
puntaje/=2

console.log(puntaje)


/**
 * EJERCICIO 2: El Enigma de la Igualdad
 * Reto: Determina si los resultados son true o false y explica la diferencia
 * entre igualdad simple (==) e igualdad estricta (===).
 * 1. 10 == "10"
 * 2. 10 === "10"
 * 3. 0 == false
 * 4. 0 === false
 */
// Respuestas:

console.log(10 == "10") // esto da true porque no verifica el tipo de dato
console.log(10 === "10") // esto da false porque verifica también el tipo de dato
console.log(0 == false) // esto da true porque verifica el 0 por conversión implícita como booleano
console.log(0 === false) // esto da false porque ahora la comparación es estricta y verifica los tipos de datos, donde 0 es number y false es booleano



/**
 * EJERCICIO 3: Lógica de "Cortocircuito"
 * Reto: Predice el valor de 'resultado' basándote en las reglas de 
 * evaluación de cortocircuito:
 * 1. let resultado1 = "Hola" || "Mundo";
 * 2. let resultado2 = 0 && "JavaScript";
 * 3. let resultado3 = null ?? "Valor por defecto";
 */
// Respuestas:

let resultado1 = "Hola" || "Mundo"
console.log(resultado1)

let resultado2 = 0 && "JavaScript"
console.log(resultado2)

let resultado3 = null ?? "Valor por defecto"
console.log(resultado3)



/**
 * EJERCICIO 4: Clasificador con Operador Ternario
 * Reto: Escribe una sola línea de código usando el operador ternario.
 * Evalúa 'temperatura': si es > 30 devuelve "Calor", si no "Fresco".
 * Asigna el resultado a una variable llamada 'clima'.
 */
// Tu código aquí:

let temperatura = 31
let clima = status = (temperatura > 30) ? "Calor": "Fresco";
console.log(clima)

/**
 * EJERCICIO 5: Identificando Tipos (Operador Unario)
 * Reto: Utiliza 'typeof' para determinar el tipo de dato de:
 * - 42
 * - "Aprendiz"
 * - true
 * - { nombre: "JS" }
 * - undefined
 * - 42n
 */
// Respuestas:

console.log(typeof(42))
console.log(typeof("Aprendiz"))
console.log(typeof(true))
console.log(typeof({nombre: "JS"}))
console.log(typeof(undefined))
console.log(typeof(42n))


/**
 * EJERCICIO 6: Verificación de Propiedades (Relacional 'in')
 * Reto: Dado el objeto: const laptop = { marca: "Dell", ram: 16 };
 * Usa el operador 'in' para verificar si existen las propiedades:
 * 1. "ram"
 * 2. "almacenamiento"
 */
// Tu código aquí:

const laptop = { marca: "Dell", ram: 16 };
console.log("ram" in laptop)
console.log("almacenamiento" in laptop)


/**
 * EJERCICIO 7: Trabajando con Grandes Números (BigInt)
 * Reto: ¿Por qué este código genera un error?
 * const total = 100n + 50;
 * Escribe la corrección necesaria para que ambos sean BigInt.
 */
// Corrección:

/**
 * Esto da error porquue no se pueden mezclar tipos de datos numbers y bigint para no perder precisión en operaciones
 *  que involucren bigints
 * /

const total = 100n + BigInt(50)
console.log(total)


/**
 * EJERCICIO 8: El Bucle de la Coma
 * Reto: Analiza el siguiente fragmento:
 * for (let i = 0, j = 10; i <= 5; i++, j--) { console.log(i, j); }
 * Explica qué función cumple la coma en la inicialización y actualización.
 */
// Explicación:

for (let i = 0, j = 10; i <= 5; i++, j--) { console.log(i, j); }

/**
 * la coma hace que se pueda poner el segundo iterador el cual es el del segundo ciclo, haciendo un segundo ciclo a la vez que el 
 * primero y todo en la misma línea 
 * */



/**
 * EJERCICIO 9: Incremento: ¿Antes o Después?
 * Reto: Determina el valor final de a, b, x e y:
 * let x = 5; let y = 5;
 * let a = ++x;
 * let b = y++;
 */
// Respuestas:

let x = 5; let y = 5;
let a = ++x;
let b = y++;

console.log(x,y,a,b)
/**
 * Aquí el resultado es 6,6,6,5, esto porque el ++x hace que primero se incremente el valor de x antes de almacenarse en a
 * en cambio el y++ hace que b primero reciba el valor de y que es 5 y luego se incremente, por lo que y queda 6 pero b 5
 * */


/**
 * EJERCICIO 10: Validación de Instancias (Relacional 'instanceof')
 * Reto: Usa 'instanceof' para comprobar los resultados booleanos de:
 * 1. new Date() instanceof Date
 * 2. [] instanceof Array
 * 3. [] instanceof Object
 */
// Respuestas:
```

console.log(new Date() instanceof Date);
console.log([] instanceof Array);
console.log([] instanceof Object);