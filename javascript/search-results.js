//Punto 2 - 
let Buscador = ""
let queryString = location.search;
let queryStringObj = new URLSearchParams (queryString); //lectura d eparametros
Buscador = queryStringObj.get ('Buscador');  

let buscador1 = document.querySelector(".busqueda")

fetch(`https://api.themoviedb.org/3/search/multi?api_key=175e62bf80c432367c7a248221db5359&query=${Buscador}`)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    for(let i=0;i<5 ; i++){
        Buscador.innerHTML+=
        ` <h2>Resultados de búsqueda para:</h2> 
        <div class = "busqueda">${data.results[i].id}</div>`
    }

})
.catch(function(error){
    console.log("El error es: "+ error)
})



