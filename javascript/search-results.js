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
        buscador1.innerHTML+=
        `
        <a href= "../detailmovie.html">
        <div class = "busqueda">
        <img src="https://image.tmdb.org/t/p/w500${data.results[i]}">
        <a href= 
        </div>`
    }

})
.catch(function(error){
    console.log("El error es: "+ error)
})


