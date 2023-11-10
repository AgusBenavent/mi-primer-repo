//Punto 2 - 
let Buscador = ""
let queryString = location.search;
let queryStringObj = new URLSearchParams (queryString); //lectura d eparametros
Buscador = queryStringObj.get ('Buscador');  

console.log (Buscador)