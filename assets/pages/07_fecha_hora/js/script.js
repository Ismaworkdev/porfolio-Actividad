
// Define arrays for days of the week and months
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

// Function to update date and time
function updateDateTime() {
  const currentDate = new Date();

  // Update day of the week, day of the month, month, year, hours, minutes, and seconds
  document.getElementById("dia_semana").textContent = daysOfWeek[currentDate.getDay()];
  document.getElementById("dia_mes").textContent = currentDate.getDate();
  document.getElementById("mes").textContent = months[currentDate.getMonth()];
  document.getElementById("anno").textContent = currentDate.getFullYear();
  document.getElementById("horas").textContent = currentDate.getHours();
  document.getElementById("minutos").textContent = currentDate.getMinutes();
  document.getElementById("segundos").textContent = currentDate.getSeconds();
}

// Call the function initially
updateDateTime();

// Update every second (1000 milliseconds)
setInterval(updateDateTime, 1000);
