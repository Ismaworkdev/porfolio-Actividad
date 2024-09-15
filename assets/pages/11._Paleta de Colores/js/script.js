let misfuentes = [
  "selecione fuente",
  "arial",
  "timesi",
  "trebuc",
  "trebucbd",
  "trebucbi",
  "trebucit",
  "verdana",
  "verdanab",
  "verdanai",
  "verdanaz",
  "VINERITC",
  "VIVALDII",
  "VLADIMIR",
  "webdings",
  "wingdings",
  "tahoma",
];

let mistamanios = [ "selecione tamaño",8, 10, 12, 14, 16, 18, 20, 22, 24, 30, 36, 42, 100];

let body = document.querySelector("body");
let textosalida = document.getElementById("textosalida");
let cbfuentes = document.getElementById("cbfuentes");
let cbtamanio = document.getElementById("cbtamanio");
//joder el .map es como que lo mapea en verdad mapea cada instancia y la guarda en la fuentee
let objeto_fuente = mistamanios.map(function(fuentee){
  let lol = `<option>`+fuentee+`</option>`;

  console.log(lol);
return lol

} );

let objeto = misfuentes.map(function(fuente){
  let lol = `<option>`+fuente+`</option>`;

  console.log(lol);
return lol

} );

cbtamanio.innerHTML=objeto_fuente;
cbfuentes.innerHTML = objeto;



//ejemplo de change 


// Escucha el evento 'change' tamaño
cbtamanio.addEventListener('change', function(event) {
  // Muestra el valor actual del elemento de entrada en la consola
  if (event.target.value != "selecione tamaño") {
    let valor = event.target.value + "px"
    textosalida.style.fontSize= valor;
  }
  console.log('Valor actual: ' + event.target.value);
});


// Escucha el evento 'change' fuente 
cbfuentes.addEventListener('change', function(event) {
  // Muestra el valor actual del elemento de entrada en la consola
  if (event.target.value != "selecione fuente") {
    let valor = event.target.value 
    textosalida.style.fontFamily  = valor;
  }
  console.log('Valor actual: ' + event.target.value);
});























const generatePalette = () => {
  let nuevoColor,
    posX = 0,
    posY = 0;

  for (let red = 0; red < 255; red += 30) {
    for (let green = 0; green < 255; green += 30) {
      for (let blue = 0; blue < 255; blue += 30) {
        if (posX < 40) {
          posX++;
        } else {
          posY++;
          posX = 1;
        }
        nuevoColor = document.createElement("div");
        nuevoColor.style.cssText =
          "position:absolute; left:" +
          posX * 15 +
          "px; top:" +
          posY * 15 +
          "px; border: 1px solid black; background:rgb(" +
          red +
          "," +
          green +
          "," +
          blue +
          "); height:15px; width:15px";
        paleta.appendChild(nuevoColor);
      }
    }
  }
}; // fin generar Paleta








