async function obtenerPersonajes() {
const url = "https://rickandmortyapi.com/api/character";
const res = await fetch(url);
const data = await res.json();
console.log(data.results[0].name);
// → "Rick Sanchez"
return data.results;
}
obtenerPersonajes()
.then(p => console.log(p.length));
// → 20 personajes