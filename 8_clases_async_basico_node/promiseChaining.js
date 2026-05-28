new Promise((resolve) => resolve(1))
    .then(r => {
    console.log(r); // 1
    return r * 2;
})
    .then(r => {
    console.log(r); // 2
    return r * 2;
})
    .then(r => {
    console.log(r); // 4
})
.catch(e => console.error(e));