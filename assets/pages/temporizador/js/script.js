let jugar = document.getElementById("btn_jugar");
let check = document.getElementById("btn_comprobar");
 //contador para alante 
let minutos = 0, segundos = 0, 

centesimas = 100000;
let intervalo;

let tiempoJuego = document.querySelector(".separador.visor_tiempo"); // The container element

jugar.addEventListener('click', function(event) {
    clearInterval(intervalo); // Para evitar múltiples intervalos si se pulsa jugar varias veces
    intervalo = setInterval(function() {
        centesimas--;
        if (centesimas <= 100) {
            centesimas = 0;
            segundos--;
        }
        if (segundos <= 60) {
            segundos = 0;
            minutos--;
        }
        let displayMinutos = minutos < 10 ? '0' + minutos : minutos;
        let displaySegundos = segundos < 10 ? '0' + segundos : segundos;
        let displayCentesimas = centesimas < 10 ? '0' + centesimas : centesimas;
        tiempoJuego.innerHTML = `Tiempo Juego: ${displayMinutos}:${displaySegundos}:${displayCentesimas}`;
    }, 10); // 10 ms para contar centésimas
});


//contador para atras 

//let minutos = 1, segundos = 0, centesimas = 0; // Iniciar con 1 minuto
//let intervalo;

//let tiempoJuego = document.querySelector(".separador.visor_tiempo");

jugar.addEventListener('click', function(event) {
    clearInterval(intervalo); // Para evitar múltiples intervalos si se pulsa jugar varias veces
    intervalo = setInterval(function() {
        if (centesimas <= 0) {
            if (segundos <= 0) {
                if (minutos <= 0) {
                    clearInterval(intervalo); // Detener el intervalo si llegamos a 0
                    tiempoJuego.innerHTML = "Tiempo Juego: 00:00:00";
                    return; // Salir de la función
                }
                minutos--;
                segundos = 59; // Reiniciar los segundos a 59 cuando los minutos disminuyen
            } else {
                segundos--;
            }
            centesimas = 99; // Reiniciar las centésimas a 99 cuando los segundos disminuyen
        } else {
            centesimas--;
        }

        let displayMinutos = minutos < 10 ? '0' + minutos : minutos;
        let displaySegundos = segundos < 10 ? '0' + segundos : segundos;
        let displayCentesimas = centesimas < 10 ? '0' + centesimas : centesimas;
        tiempoJuego.innerHTML = `Tiempo Juego: ${displayMinutos}:${displaySegundos}:${displayCentesimas}`;
    }, 10); // 10 ms para contar centésimas
});







check.addEventListener('click', function(event) {
    clearInterval(intervalo);
});

const daysOfWeek = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  
  // Función para actualizar la fecha y la hora
  function updateDateTime() {
    const currentDate = new Date();
  
    //  esto es class 
    document.querySelector(".dia").innerText = daysOfWeek[currentDate.getDay()];
    document.querySelector(".mes").innerText = months[currentDate.getMonth()];
    document.querySelector(".año").innerText = currentDate.getFullYear();
    document.querySelector(".hora").innerText = currentDate.getHours();
    document.querySelector(".min").innerText = currentDate.getMinutes();
    document.querySelector(".seg").innerText = currentDate.getSeconds();
  }
  
  // Llamar a la función inicialmente
  updateDateTime();
  
  // Actualizar cada segundo (1000 milisegundos)
  setInterval(updateDateTime, 1000);
  

  console.log('Días de la semana:');
daysOfWeek.forEach(lol => {
  console.log(lol);
});

// Usando forEach para imprimir los meses del año
console.log('Meses del año:');
months.forEach(month => {
    let oo =  month
  console.log(oo);
});

let div_img = document.querySelector(".arr");

let ll = div_img.getElementsByTagName('IMG');

console.log('Imagenes en : ', div_img);
Array.from(ll).forEach(im => {
    let oo = im.src;
    console.log(oo);
  });


  let div_q = document.querySelector(".arr_que");
let a = div_q.getElementsByTagName('IMG')
  console.log(a);

  let ff = "los mega que papi";

// Reemplazar una palabra
ff = ff.replace("mega", "giga"); // "los giga que papi"

// Convertir a mayúsculas
ff = ff.toUpperCase(); // "LOS GIGA QUE PAPI"

// Convertir a minúsculas
ff = ff.toLowerCase(); // "los giga que papi"

// Concatenar con otra cadena
ff = ff.concat(" son geniales"); // "los giga que papi son geniales"

// Eliminar espacios al inicio y al final (trim)
ff = ff.trim(); // "los giga que papi"

// Dividir la cadena en un array de palabras
let palabras = ff.split(" "); // ["los", "giga", "que", "papi"]

// Unir el array de palabras en una cadena
ff = palabras.join(" "); // "los giga que papi"

// Encontrar la posición del primer espacio
let indiceEspacio = ff.indexOf(" ");
let j = " ";
// Imprimir hasta el primer espacio
let resultado = ff.substring(0, j);

console.log(resultado); // "los"



let numero1 = 123;
let cadena = numero1.toString(); // "123"
// Otra forma
cadena = "" + numero1; // "123"


let cadena1 = "123";
let numero = parseInt(cadena1); // 123
// Para decimales
cadena1 = "123.45";
numero = parseFloat(cadena1); // 123.45

//cLASS
let d = document.querySelector('.quer');
//TIPO COSA
//let pes = d.querySelectorAll("p");
//TagName
let pes = d.getElementsByTagName('P');
 let y = Array.from(pes);
 
for (let i = 0; i < y.length; i++) {
  y[i].style.color ="red";
  
}


// Supongamos que tienes una ruta de archivo completa
let rutaCompleta = 'carpeta/subcarpeta/archivo.txt';

// Divides la ruta por cada '/' para obtener las partes
let partesRuta = rutaCompleta.split('/');

// Tomas la última parte, que es 'archivo.txt'
let archivoConExtension = partesRuta.pop();

// Divides el nombre del archivo por cada '.' para separar el nombre de la extensión
let partesArchivo = archivoConExtension.split('.');

// Tomas la primera parte, que es 'archivo', el nombre sin la extensión
let nombre = partesArchivo[0];

// Ahora 'nombre' contiene 'archivo', que es lo que querías obtener
let nombre = rutaCompleta.split('/').pop().split('.')[0];
