let footer__img = document.querySelectorAll('.footer__img');
let visor = document.getElementById('visor');

document.addEventListener('click', function (event) {
    // Iteramos sobre los elementos seleccionados
    footer__img.forEach(function (img) {
        if (event.target === img) {
            // Asignamos la fuente de la imagen al visor
            visor.src = img.src;
        }
    });
    console.log(visor.src);
});



let menu__item = document.querySelectorAll('.menu__item');




document.addEventListener('click', function (event) {
    // Iteramos sobre los elementos seleccionados
    menu__item.forEach(function (span) {
        let enlace = "imagenes/"+span.id+".jpg";
       if (event.target === span) {
         
            visor.src = enlace;
       }
       console.log(enlace);
    });
    
});