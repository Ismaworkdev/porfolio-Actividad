let cajaSMR = document.getElementById('cajaSMR');
let cajaASIR = document.getElementById('cajaASIR');
let cajaDAW = document.getElementById('cajaDAW');
let visor = document.getElementById('visor');

document.addEventListener('mouseover', function (event) {
    if (event.target.id === 'cajaSMR') {
        console.log("se a toca")
        visor.style.backgroundImage = 'url("../imagenes/visor1.png")';
    } 
});
