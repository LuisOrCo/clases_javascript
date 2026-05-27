function procesarUsuario(callback) {
    const nombre = "Juan";
    callback(nombre);
}
// Sincrónico
procesarUsuario((n) => {
    console.log("Hola " + n);
});
// Asincrónico con setTimeout
setTimeout(() => {
    console.log("1s después...");
}, 1000);