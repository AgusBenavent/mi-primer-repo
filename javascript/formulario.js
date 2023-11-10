


//PUNTO 1

let boton = document.querySelector(".button")
boton.addEventListener("click",function(){

});

window.addEventListener("keypress",function(e){
    
    if(e.key === "Enter"){
        
    }
})


<<<<<<< HEAD

=======
let queryString = location.search;
let queryStringObj = new URLSearchParams (queryString);
queryStringObj.get ('buscador'); // alien
>>>>>>> ada1a5d55b7f1524ad3751ca67d8dfb72f98b15f


// let apiKey = ""

// let cargarpeliculas = {
//     fetch('')//Nos devuleve una promesa 
// }


// .then(function(data){
//     for(let i= 0; i < data)
// })




fetch("https://api.themoviedb.org/3/discover/movie?api_key=175e62bf80c432367c7a248221db5359")//Siempre va api_key y si quiero mas parametros pongo &
.then(function(response){
    return response.json();
})
.then(function(data){
    console.log(data);

    // <article class="peli1">
    //             <a href="./detailmovie.html"><img src="./img/peliculas_populares/alien.png" class="img"></a>
    //         <div class="parrafo"><h3>Titulo: Alien</h3>
    //             <p>Fecha de estreno: 25 de diciembre de 1979</p>
    //         </div>
    //         </article>
})
.catch(function(error){
    console.log("El error es: "+ error)
})