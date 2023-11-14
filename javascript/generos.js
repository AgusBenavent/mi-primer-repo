let url= `https://api.themoviedb.org/3/genre/movie/list?api_key=175e62bf80c432367c7a248221db5359`
let url2 = `https://api.themoviedb.org/3/genre/tv/list?api_key=175e62bf80c432367c7a248221db5359`

let contenido = document.querySelector(".navGenero")
let contenido2 = document.querySelector("#nav")


fetch(url)
.then(function(response){
    return response.json();
})
.then(function(datos){
    let lista = datos.genres
    console.log(lista);

    for(let i=0; i<12 ; i++){ //Hasta el 12 para todos los generos
        contenido.innerHTML+=
        `<li class="itemaGenero"><a href="detailgenero.htm?idPelicula=${lista[i].id}&name=${lista[i].name}" class="Text">${lista[i].name}</a></li>`
    }
    return datos

})
.catch(function(error){
    console.log("El error es: "+ error)
    
})


fetch(url2)
.then(function(response){
    return response.json();
})
.then(function(datos){
    let lista = datos.genres
    console.log(lista);

    for(let i=0; i<12 ; i++){ //Hasta el 12 para todos los generos
        contenido2.innerHTML+=
        `<li class="itemaGenero"><a href="detailgenero.htm?idPelicula=${lista[i].id}&name=${lista[i].name}" class="Text">${lista[i].name}</a></li>`
    }
    return data

})
.catch(function(error){
    console.log("El error es: "+ error)
    return error
})
