let diaDelAnyo = 0;
let diasRestantes = 0;


//Función para generar la tabla del calendario
function generateCalendar() {
    var table = document.getElementById("calendar");
    table.id = "calendar";
    table.style.borderCollapse = "collapse";

    //Creando las celdas de la tabla
    for (var i = 1; i <= 365; i++) {
        var cell = document.createElement("div");
      
        cell.innerText = i;
        cell.id = "d" + i;
        cell.classList.add("cell-day");
        

        table.appendChild(cell);

    }

    //Agregando la tabla al documento
    document.body.appendChild(table);
    table.innerHTML += `<div class="cell-next-year">2024</div>`;
}


//Generando el calendario
generateCalendar();

//Obteniendo el día actual
var today = new Date();
var currentDay = today.getDate();

// Obteniendo el elemento de la tabla
var calendar = document.getElementById("calendar");

//Generar un color aleatorio
function generateRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Pintar
for (var i = 1; i <= 365; i++) {
    var cell = document.getElementById("d" + i);
    if (i <= currentDay) {
        cell.style.backgroundColor = '#a8f3a8';
        cell.style.color = 'black';
        diaDelAnyo = i;
        diasRestantes = 365 - diaDelAnyo;
        calcularPorcentaje(i);
    }
}

//Calcular el porcentaje
function calcularPorcentaje(i) {
    var porcentaje = (i * 100) / 365;
    let span = document.getElementById("porcentaje");
    span.innerHTML = porcentaje.toFixed(3) + "%";
}