let contenedor_grande = document.getElementsByClassName("contenedor");
let contador = 16;
for(let i = 0; i < contenedor_grande.length; i++){
    contenedor_grande[i].addEventListener('click', function(event){
        if (event.target.nodeName === "P") {
            event.target.style.color = "#000033";
            contador++;
            event.target.style.fontSize =  contador+ "px";
            console.log("se ha tocado");
        }
    });
}



//imagenes  porr tipo de etiqueta 
let imagenes = document.getElementsByTagName("img");

for (let i = 0; i < imagenes.length; i++) {
    imagenes[i].addEventListener('click' , function(event){
        console.log("se a tocado la imagen ", event.target);
     });
}



//botones color 
let botones = document.querySelectorAll(".nav__link");
let texto = document.getElementById("texto1");

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click' , function (event) {

        texto.style.color= event.target.value;
        console.log("se a tocado" ,event.target.value)
        
    });
    
}
