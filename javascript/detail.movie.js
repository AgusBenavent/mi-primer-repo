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
    for(let i=0;i<5  ; i++){
    buscador1.innerHTML += `
    <div class="separacion"></div>

    <h1>${data.results[i].original_title}</h1>

    <div class="padre">
        <div class="hijo1">
             <a href="https://www.youtube.com/watch?v=SUXWAEX2jlg"><i class="fa-solid fa-play"></i></a>
             
        </div>
        <div class="hijo2">
        <ul>
           <li><h3>Calificación (rating).</h3><img src="./img/Detail_Movie/calificacion.png"></li>
           <li><h3>Género: Drama</h3> </li>
           <li><h3>Fecha de estreno: 4 de noviembre de 1999</h3></li>
           <li><h3>Sinópsis:  ${data.results[i].original_title} </h3></li>
           <li><h3>Duración:  ${data.results[i].original_title} </h3></li>
        </ul> 
        
        <span><a href="./favourite.html?id=${data.results[i].id}"><i class="fa-regular fa-heart"></i></a></span>

        </div>
       
    </div>
    `
    }
})
.catch(function(error){
    console.log("El error es: "+ error)
})
