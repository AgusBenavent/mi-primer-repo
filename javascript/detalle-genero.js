

// Se obtiene la cadena de consulta de la ubicación actual (URL)
let queryString = location.search;

// Se crea un nuevo objeto URLSearchParams para leer los parámetros
let queryStringObj = new URLSearchParams(queryString);

let idPelicula = queryStringObj.get('idPelicula'); //Para tener el id de cada peli
let nombre = queryStringObj.get('name') //Para tener el nombre de cada peli y serie

//Esta api la saque de discover en TMDB y con esto agarramos las id de cada peli
let url = `https://api.themoviedb.org/3/discover/movie?api_key=175e62bf80c432367c7a248221db5359&with_genres=${idPelicula}`
console.log(url);
//El signo & es para poder poner mas cosas es como un and 

let contenido = document.querySelector(".TituloGenero")
let contenido2 = document.querySelector(".hijo2")

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);

    contenido.innerHTML = `<h1 class="TituloGenero">${nombre}</h1>`

    for(let i=0; i<5 ; i++){ 
        contenido2.innerHTML+=
        
    // <div class="hijo1">
    //     <ul>
    //        <li><h3>${data.results[i].id}</h3></li>
    //     </ul> 

    // </div>
        
       ` <article class="peli1">
        <a href="detailmovie.html?id=${data.results[i].id}">
        <img src="https://image.tmdb.org/t/p/w500${data.results[i].backdrop_path}" alt="" height="300px" width="200px"></a>
    <div class="parrafo"><h3>Titulo: ${data.results[i].original_title}</h3>
        <p>Fecha de estreno: ${data.results[i].release_date}</p>
    </div>
    </article>
    `}

})
.catch(function(error){
    console.log("El error es: "+ error)
    
})


{/* <div class="hijo1">
        <ul>
           <li><h3>El cine dramático es junto a la Comedia, los principales géneros del cine y quizás de los más antiguos. <br>
            El drama en el cine presenta historias serias, en las que prevalece el dialogo y <br>
            la acción orientadas a generar tensión y presentar pasiones conflictivas más que generar humor.</h3></li>
        </ul> 

        </div> */}