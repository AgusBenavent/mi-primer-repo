
let evento4= document.querySelector(".scrolly")
    evento4.addEventListener("mouseover", function(){
    document.querySelector(".evento4").style.color = colorAlAzar()
    })

let evento5= document.querySelector(".scrolly")
evento4.addEventListener("mouseout", function(){
    document.querySelector(".evento4").style.color = "#888"
    })

//Ejercicio 9

let evento6 = document.querySelector("#lechuza")
evento6.addEventListener("click", function(){
alert("Buh… Buh…")
})

//Ejercicio 10

window.addEventListener("keypress",function(e){
    console.log("Ey, tocaste el teclado!")
})

//Ejercicio 11

window.addEventListener("keypress",function(e){
    console.log(e)
    if (e.key === " ") {
        console.log("Ey, tocaste la barra!");
      }
})
