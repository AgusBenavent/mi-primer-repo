//Punto 2 - 
let Buscador = ""
let queryString = location.search;
let queryStringObj = new URLSearchParams (queryString); //lectura d eparametros
Buscador = queryStringObj.get ('Buscador');  



fetch(`https://api.themoviedb.org/3/discover/movie?api_key=175e62bf80c432367c7a248221db5359&name=${Buscador}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
})
.catch(function(error){
    console.log("El error es: "+ error)
})


let 