let qs = location. search;
let qsObj = new URLSearchParams (gs) ;
let idPelicula = qsObj.get ("idPelicula");
let nombre = qsObj.get("name");


let url= `https://api.themoviedb.org/3/genre/movie/list?api_key=175e62bf80c432367c7a248221db5359&with_genres=${idPelicula}`

fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
    let lista = data.results
    console.log(lista);

    let contenido = document.querySelector(".TituloGenero")
    contenido.innerHTML = `<h1 class="TituloGenero">${nombre}</h1>`

    for(let i=0; i<12 ; i++){ 
        let contenido2 = document.querySelector(".hijo2")
        contenido2.innerHTML+=
        `<article class="peli1">
        <a href="detailmovie.html?idPelicula=${lista[i.id]}">
    </article>
    `
    }
    return datos

})
.catch(function(error){
    console.log("El error es: "+ error)
    
})
