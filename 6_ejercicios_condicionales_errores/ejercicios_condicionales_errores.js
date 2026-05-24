/**
 * EJERCICIOS DE JAVASCRIPT: TOMA DE DECISIONES Y MANEJO DE ERRORES
 * 
 * Instrucciones: Resuelve cada ejercicio implementando el código 
 * necesario debajo de cada enunciado.
 */

// 1. CONDICIONAL SIMPLE (IF):
// Crea una variable 'edad'. Si la edad es 18 o más, muestra por 
// consola "Acceso permitido".,
// (Pista: Usa el operador >= para comparar).

let edad = 16;

if(edad>=18){
    console.log("Acceso Permitido")
}else{
    console.log("Está muy cachorro, siga estudiando")
}

// 2. ESTRUCTURA IF-ELSE:
// Crea una variable 'año'. Si el año es igual a 2015, muestra "¡Correcto!", 
// de lo contrario muestra "¡Incorrecto!".,
// (Pista: Usa la igualdad estricta === para comparar).,

let año = 2015;
if(año === 2015){
    console.log("Correcto")
}else{
    console.log("¡Inconrrecto!.")
}

// 3. ENCADENAMIENTO DE CONDICIONES (IF-ELSE IF-ELSE):
// Crea una variable 'puntuacion'. Si es mayor a 90, muestra "Excelente"; 
// si es mayor a 70, muestra "Bueno"; de lo contrario, "Sigue intentando".,
// Recuerda que solo se ejecutará el primer bloque que sea verdadero.,

let puntuacion = 91;

if(puntuacion>90){
    console.log("Excelente")
}else if (puntuacion > 70){
    console.log("Bueno")
}else{
    console.log("Parce, siga intentando")
}


// 4. OPERADOR TERNARIO (?):
// Tienes una variable 'esCumpleaños' (booleana). Usa el operador ternario 
// para asignar a una variable 'mensaje' el valor "¡Feliz Cumpleaños!" 
// si es true, o "¡Buen día!" si es false.,

let esCumpleaños = true;

let mensaje = (esCumpleaños ? "Feliz Cumpleaños": "!Buen día¡")

console.log(mensaje)

// 5. SENTENCIA SWITCH (VALORES ÚNICOS):
// Crea una variable 'dia'. Usa un 'switch' para que si es "Lunes" muestre 
// "Inicio de semana", si es "Viernes" muestre "Casi fin de semana" 
// y para otros valores un mensaje por defecto.,
// No olvides incluir el 'break' en cada caso para evitar que el código siga 
// ejecutándose hacia abajo.,

let dia = "Martes"
switch(dia){
    case "Lunes":
        console.log("Inicio de Semana")
        break
    case "Viernes":
        console.log("Casi fin de semana")
        break
    default:
        console.log("siga trabajando pa")
        break
    

}

// 6. AGRUPACIÓN EN SWITCH:
// Usa un 'switch' para clasificar meses. Si el mes es "Junio", "Julio" 
// o "Agosto", muestra "Es verano".,
// (Pista: Puedes poner varios 'case' seguidos sin 'break' entre ellos).

let mese = "Agosto"

switch(mese){
    case "Junio", "Julio", "Agosto":
        console.log("Es Verano")
        break
    default:
        console.log("Está en alguna temporada menos en verano")
        break
}

// 7. MANEJO DE ERRORES BÁSICO (TRY...CATCH):
// Intenta mostrar el valor de una variable que no ha sido declarada. 
// Envuelve el código en un bloque 'try...catch' para capturar el 
// 'ReferenceError' y mostrar un mensaje amigable en lugar de que el 
// programa falle.,,


try {
    let numero = 20
    console.log(numero)
}catch (ReferenceError){
    console.log("Parce, intentaste acceder a una variable que no has declarado ni asignado")
}

// 8. LANZAMIENTO DE EXCEPCIONES (THROW):
// Crea una función que reciba un número. Si el número es negativo, 
// usa 'throw' para lanzar un nuevo objeto de Error con el mensaje: 
// "El valor no puede ser negativo".,,


function numeroPositivo (numero) {
    if(numero < 0){
        throw new RangeErrorError("El valor no puede ser negativo")
    }
    return numero
}
console.log(numeroPositivo(-5))

// 9. EL OBJETO ERROR Y PROPIEDADES:
// En un bloque 'catch', accede a las propiedades 'name' y 'message' del 
// objeto de error capturado para imprimir por consola: 
// "Tipo de error: [name] - Mensaje: [message]".,,

try {
    console.log(numero)
    throw new ReferenceError("Dato inválido");

} catch(error) {

    console.log(`Tipo de error: ${error.name} - Mensaje: ${error.message}`);

}

// 10. BLOQUE FINALLY:
// Implementa un bloque 'try...catch...finally'. En el 'try' realiza una 
// operación simple, y en el 'finally' muestra un mensaje que diga 
// "Limpieza de recursos completada".,
// Recuerda que el 'finally' se ejecuta siempre, ocurra o no un error.

try {
    let numero1 = 20
    let numero2 = 30;

    let suma = numero1 + numero2;

    console.log(`La suma es: ${suma}`);

} catch(error) {

    console.log(`Tipo de error: ${error.name} - Mensaje: ${error.message}`);

} finally {

    console.log("Limpieza de recursos completada");

}

