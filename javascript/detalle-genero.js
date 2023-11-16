

// Se obtiene la cadena de consulta de la ubicación actual (URL)
let queryString = location.search;

// Se crea un nuevo objeto URLSearchParams para leer los parámetros
let queryStringObj = new URLSearchParams(queryString);

let idPelicula = queryStringObj.get('idPelicula'); //Para tener el id de cada peli
let nombre = queryStringObj.get('name') //Para tener el nombre de cada peli y serie

//Esta api la saque de discover en TMDB y con esto agarramos las id de cada peli
let url = `https://api.themoviedb.org/3/discover/movie?api_key=175e62bf80c432367c7a248221db5359&with_genres=${idPelicula}`

//El signo & es para poder poner mas cosas es como un and


fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
    let lista = data.results
    console.log(lista);

    
    let contenido = document.querySelector(".TituloGenero")
    contenido.innerHTML = `<h1 class="TituloGenero">${nombre}</h1>`

    for(let i=0; i<5 ; i++){ 
        let contenido2 = document.querySelector(".hijo2")
        contenido2.innerHTML+=
        `<article class="peli1">
        <a href="detailmovie.html?idPelicula=${lista[i.id]}">
    </article>
    `}
    

})
.catch(function(error){
    console.log("El error es: "+ error)
    
})
