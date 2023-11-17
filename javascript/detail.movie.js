//Punto 2 - 


let queryString = location.search;//Obteniendo la query
let queryStringObj = new URLSearchParams (queryString); //lectura d eparametros, me lo vuelve un objeto
let Buscador = queryStringObj.get ('id');  //Es la clave el id

let buscador1 = document.querySelector(".detalle")

fetch(`https://api.themoviedb.org/3/movie/${Buscador}?api_key=175e62bf80c432367c7a248221db5359&name`)// Los templates me permiten tener strings con javascripys adentros
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);
    let generos_final = ""
    for(let i=0; i<data.genres.length; i++){ 
        generos_final += data.genres[i].name
        generos_final += ", ";
    }
    buscador1.innerHTML += `
    <div class="separacion"></div>
    <h1>${data.original_title}</h1> 
    <div class="padre">
        <div class="hijo3">
        <ul>
            <li><img src="https://image.tmdb.org/t/p/w500${data.poster_path}"class="img"></li>
            <li><h3> Genero: ${generos_final} </h3> </li>
            <li><h3>Fecha de estreno: ${data.release_date}</h3></li>
            <li><h3>Sinópsis:  ${data.overview} </h3></li>
            <li><h3>Duración:  ${data.runtime} mins </h3></li>
            <li><h3>Calificación: ${data.popularity}</h3></li>
            
        </ul> 
        <br>
        <span><a href="./favourite.html?id=${data.id}"><i class="fa-regular fa-heart"></i></a></span>

        </div>
       
    </div>
    `
})
.catch(function(error){
    console.log("El error es: "+ error)

    
}) 

let recomendaciones = document.querySelector(".recomendaciones")

fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=175e62bf80c432367c7a248221db5359`)
.then(function(response){
    return response.json()
})

.then(function(data){
    for(let i=0; i< 5; i++){ 
    console.log(data);
    recomendaciones.innerHTML += `
    <a href="./detailmovie.html?id=${data.results[i].id}">
    <img src="https://image.tmdb.org/t/p/w500${data.results[i].poster_path}"height="400px" witdh="350px">
    <h2>${data.results[i].title}</h2>
    </a>
    `
    }
})

.catch(function(error){
    console.log("El error es: "+ error)

    
})

// boton le doy click le pongo un evento 
// Tengo que llamar al endpoint de la api y le paso el id de la pelicula donde estoy 