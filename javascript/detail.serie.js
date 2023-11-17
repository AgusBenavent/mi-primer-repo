//Punto 2 - 


let queryString = location.search;//Obteniendo la query
let queryStringObj = new URLSearchParams (queryString); //lectura d eparametros, me lo vuelve un objeto
let Buscador = queryStringObj.get ('id');  //Es la clave el id

let buscador1 = document.querySelector(".detalle")

fetch(`https://api.themoviedb.org/3/tv/${Buscador}?api_key=175e62bf80c432367c7a248221db5359&name`)// Los templates me permiten tener strings con javascripys adentros
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
    <h1>${data.name}</h1> 
    <div class="padre">
        <div class="hijo3">
        <ul>
            <li><img src="https://image.tmdb.org/t/p/w500${data.poster_path}"class="img"></li>
            <li><h3> Genero: ${generos_final} </h3> </li>
            <li><h3>Fecha de estreno: ${data.first_air_date}</h3></li>
            <li><h3>Sinópsis:  ${data.overview} </h3></li>
            <li><h3>Episodios:  ${data.number_of_episodes}</h3></li>
            <li><h3>Temporadas:  ${data.number_of_seasons} mins </h3></li>
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