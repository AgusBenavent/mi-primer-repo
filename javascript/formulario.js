


//PUNTO 1

let boton = document.querySelector(".button")
boton.addEventListener("click",function(){

});

window.addEventListener("keypress",function(e){
    
    if(e.key === "Enter"){
        
    }
})


let Buscador = ""
let queryString = location.search;
let queryStringObj = new URLSearchParams (queryString); //lectura de parametros
Buscador = queryStringObj.get ('Buscador');  

//API para peliculas populares

let contenedor = document.querySelector("#PeliculasPopulares .pelis")


fetch("https://api.themoviedb.org/3/discover/movie?api_key=175e62bf80c432367c7a248221db5359")//Siempre va api_key y si quiero mas parametros pongo &
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
    for(let i=0;i<5 ; i++){
        contenedor.innerHTML+= `
        <article class="peli1">
        <a href="./detailmovie.html?id=${data.results[i].id}">
        <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}"class="img" ></a>
        <div class="parrafo"><h3>Titulo: ${data.results[i].title}</h3>
            <p>Fecha de estreno: ${data.results[i].release_date}</p>
        </div>
        </article>
        `

    }
    
})
.catch(function(error){
    console.log("El error es: "+ error)
})

//API para series populares

let contenedor2 = document.querySelector("#SeriesPopulares .series")


fetch("https://api.themoviedb.org/3/discover/tv?api_key=175e62bf80c432367c7a248221db5359")//Siempre va api_key y si quiero mas parametros pongo &
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
    for(let i=0;i<5  ; i++){
        contenedor2.innerHTML+= 
        ` <article class="serie1">
        <a href="./detailserie.html?id=${data.results[i].id}">
        <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" class="img"></a>
        <div class="parrafo"><h3> Titulo: ${data.results[i].name}</h3>
        <p>Fecha de estreno: ${data.results[i].first_air_date}</p>
        </div>
</article>`
}
    
})
.catch(function(error){
    console.log("El error es: "+ error)
})


//API para peliculas mas valoradas

let contenedor3 = document.querySelector("#PeliculasValoradas .valoradas")


fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=175e62bf80c432367c7a248221db5359")//Siempre va api_key y si quiero mas parametros pongo &
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data)
    for(let i=0;i<5  ; i++){
        contenedor3.innerHTML+=  

        ` <article class="peli5">
        <a href="="./detailmovie.html?id=${data.results[i].id}">
        <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}" class="img"></a>
        <div class="parrafo"><h3> Titulo: ${data.results[i].name}</h3>
        <p>Fecha de estreno: ${data.results[i].first_air_date}</p>
        </div>
</article>`
}
    
})
.catch(function(error){
    console.log("El error es: "+ error)
})

