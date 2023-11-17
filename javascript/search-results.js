//Punto 2 - 

// Se declara la variable
let Buscador = ""

let resultadoTexto = document.querySelector(".resultado-texto");

// Se obtiene la cadena de consulta de la ubicación actual (URL)
let queryString = location.search;

// Se crea un nuevo objeto URLSearchParams para leer los parámetros
let queryStringObj = new URLSearchParams (queryString);

Buscador = queryStringObj.get ('Buscador'); 

let buscador1 = document.querySelector(".busqueda")

let resultado = document.querySelector(".titulo_bus")

fetch(`https://api.themoviedb.org/3/search/multi?api_key=175e62bf80c432367c7a248221db5359&query=${Buscador}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    if (data.results.length === 0) {
        resultado.innerHTML = "No hay resultados para su búsqueda";
    } else {  
        resultado.innerHTML += Buscador
        for(let i=0;i< 5; i++){
            buscador1.innerHTML+= `
            <a href="./detailmovie.html?id=${data.results[i].id}">
            <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}"height="400px" witdh="350px">
            </a>
    `;} 
    
}})             // CONECTAR A CADA DETALLE
    

.catch(function(error){
    console.log("El error es: "+ error)
})


