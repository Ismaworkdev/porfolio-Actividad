var fotos = ["cabra.jpg"];

let array_sec_id = document.getElementById("juego");
let jugar = document.getElementById("btn_jugar");
let check = document.getElementById("btn_comprobar");
let images = array_sec_id.getElementsByTagName('IMG');



let minutos = 0, segundos = 0, centesimas = 0;
let intervalo;

let tiempoJuego = document.querySelector(".separador.visor_tiempo"); // The container element

let record = document.getElementById("visor_record");

let volver_jugar = document.getElementById("btn_volver");
 


array_sec_id.addEventListener('click' , function (event){

if (event.target.tagName === 'IMG') {
    console.log("se a tocado una imagen " , event.target );
    const random =  Math.floor(Math.random()*fotos.length);

    event.target.src =  'imagenes/animales/'+fotos[random];
    

}
    
});
let displayMinutos ;
let displaySegundos;
let displayCentesimas; 
jugar.addEventListener('click' , function (event) {
    console.log("a jugar");


    clearInterval(intervalo); // Para evitar múltiples intervalos si se pulsa jugar varias veces
    intervalo = setInterval(function() {
        centesimas++;
        if (centesimas >= 100) {
            centesimas = 0;
            segundos++;
        }
        if (segundos >= 60) {
            segundos = 0;
            minutos++;
        }
       displayMinutos = minutos < 10 ? '0' + minutos : minutos;
          displaySegundos = segundos < 10 ? '0' + segundos : segundos;
          displayCentesimas = centesimas < 10 ? '0' + centesimas : centesimas;
        tiempoJuego.innerHTML = `Tiempo Juego: ${displayMinutos}:${displaySegundos}:${displayCentesimas}`;
    }, 10); // 10 ms para contar centésimas
    
});
let lol = 'imagenes/interrogacion.jpg'; 
let imgss; 
check.addEventListener('click', function (event) {
    clearInterval(intervalo);
    let allImagesChanged = true; // Bandera para verificar si todas las imágenes han cambiado
    let imagenSeRepite = true; // Bandera para verificar si todas las imágenes tienen la misma fuente
    let primeraImg = images[0].src; // Fuente de la primera imagen
  lol = 'imagenes/interrogacion.jpg';
    for (let i = 0; i < images.length; i++) {
         imgss = images[i];
        
        // Verificamos si alguna imagen no ha cambiado
        if (imgss.src.endsWith('imagenes/interrogacion.jpg')) {
            allImagesChanged = false; // Si encontramos al menos una imagen sin cambiar, marcamos la bandera
        }else {
        // Verificamos si todas las imágenes tienen la misma fuente
        if (imgss.src !== primeraImg && imgss.src !== lol) {
            imagenSeRepite = false; 
        }
        }


    }
  

    if (!allImagesChanged) {
        console.log("no has cambiado nada");
    } else {
        console.log("todas las imágenes han cambiado");
         
    // Resultados de las verificaciones
    if (!imagenSeRepite  ) {
        console.log("no son iguales ");
    } else {
        console.log("son iguales has ganado  ");
       record.textContent =  `Record Actual: ${displayMinutos}:${displaySegundos}:${displayCentesimas}`
    }
    }
});

volver_jugar.addEventListener('click' , function (event) {
    console.log("se a pulsado vuelve a jugar "); 
    
    minutos = 0;
    segundos = 0;
    centesimas = 0;
    displayMinutos = "00";
    displaySegundos =  "00" ; 
    displayCentesimas = "00" ;  
    tiempoJuego.innerHTML = `Tiempo Juego: ${displayMinutos}:${displaySegundos}:${displayCentesimas}`;

   

    for (let i = 0; i < images.length; i++) {
         images[i].src = "imagenes/interrogacion.jpg";
        
    }
        
   
            
        });