

let posX = document.getElementById("posX");
let posY= document.getElementById("posY");
let posclickX = document.getElementById("posclickX");
let posclickY = document.getElementById("posclickY");
document.addEventListener('mousemove', function(e) {
    var x = e.clientX; // Coordenada X del cursor
    var y = e.clientY; // Coordenada Y del cursor
    posX.innerHTML=x;
    posY.innerHTML= y;

   document.addEventListener('click', function(event){
   let xx= event.clientX;
   let yy= event.clientY
     posclickX.textContent =xx;
     posclickY.textContent=yy;
   })
    console.log('X: ' + x + ', Y: ' + y);
  });
  