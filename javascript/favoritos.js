let favoritosPelis = JSON-parse(localstorage-getIten("favoritosPelis"))
console.log(favoritosP)
let favoritosSeries = JSON.parse (localstorage-getItes("favoritosSeries"))
console. log (favoritoss)
let columnas = document .queryselector (".col")
let titulo = document .queryselector (".titulo")

for(let i = 0; i <favoritosPelis.lenght; i++ ){
    let p = favoritosPelis[i]
    fetch()
    .then(function(resp){
        return resp.json()
    })
    .then(function(data){
        console.log(data)
        columnas.innerHTML +=
        `
        `
    })
}
