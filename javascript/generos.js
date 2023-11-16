

// PUNTO 5
//Es la página a donde el usuario podrá ver los géneros disponibles en TMDB para películas y para series. La información debe provenir de la API. 

let url= `https://api.themoviedb.org/3/genre/movie/list?api_key=175e62bf80c432367c7a248221db5359`
let url2 = `https://api.themoviedb.org/3/genre/tv/list?api_key=175e62bf80c432367c7a248221db5359`

let contenido = document.querySelector(".navGenero")//Para los generos de las peliculas
let contenido2 = document.querySelector("#nav") //Para los generos d elas series


//Este fetch es para los generos de las peliculas
fetch(url)
.then(function(response){
    return response.json();
})
.then(function(data){
    let lista = data.genres
    console.log(lista);

    for(let i=0; i<lista.length ; i++){ //Hasta el 12 para todos los generos
        contenido.innerHTML+=
        `<li class="itemaGenero"><a href="detailgenero.htm?idPelicula=${lista[i].id}&name=${lista[i].name}" class="Text">${lista[i].name}</a></li>`
    }
    return datos

})
.catch(function(error){
    console.log("El error es: "+ error)
    
})

//Este fetch es para los generos de la series
fetch(url2)
.then(function(response){
    return response.json();
})
.then(function(datos){
    let lista = datos.genres
    console.log(lista);

    for(let i=0; i<lista.length ; i++){ //Hasta el 12 para todos los generos
        contenido2.innerHTML+=
        `<li class="itemaGenero"><a href="detailgenero.htm?idPelicula=${lista[i].id}&name=${lista[i].name}" class="Text">${lista[i].name}</a></li>`
    }
    return data

})
.catch(function(error){
    console.log("El error es: "+ error)
    return error
})




//Al hacer click sobre un género debe redirigir al detalle (punto 7).

