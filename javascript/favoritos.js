// let contenedro = document.querySelector("")// Falta la clase

// for(let i = 0; i< ; i++ ){ //Falta el lenght
//     contenedro.innerHTML +=
//     `
//     <section class="pelis">
// <article class="peli1">
//     <a href="./detailmovie.html"><img src="./img/peliculas_populares/alien.png" alt="" height="300px" width="200px"></a>
// <div class="parrafo"><h3>Titulo: Alien</h3></div>
// </article>
// <button onClick= "agregarAFavoritos(${LENGHT.data[i].id})"><Agregar a favoritos</button>
// </section>
//     `
// } 

// function agregarAFavoritos(id){
//     let favoritos = localStorage.getItem("")
//     if(favoritos)
// }

let favoriteButtons = document.querySelectorAll('.favorite-btn');

// Itera sobre cada botón y agrega un evento de clic
favoriteButtons.forEach(button => {
    button.addEventListener('click', addToFavorites);
});

// Función para manejar el evento de clic
function addToFavorites(event) {
    const movieId = event.target.dataset.id; // Obtiene el ID de la película desde el atributo 'data-id'

    let favorites = localStorage.getItem('favorites') ? JSON.parse(localStorage.getItem('favorites')) : [];

    // Verifica si la película ya está en favoritos
    const exists = favorites.some(movie => movie.id === movieId);

    if (!exists) {
        // Si la película no está en favoritos, agrégala
        favorites.push({ id: movieId });
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Película agregada a favoritos');
    } else {
        alert('Esta película ya está en favoritos');
    }
}
