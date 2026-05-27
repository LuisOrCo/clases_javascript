const promesa = new Promise((resolve, reject) => {

setTimeout(() => {
    const exito = true;
    if (exito) resolve("¡Éxito!");
    else reject("Error");
}, 1000);
});

promesa.then(r => console.log(r)).catch(e => console.error(e));