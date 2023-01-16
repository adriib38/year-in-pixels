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
        cell.setAttribute("onclick", "diaSeleccionado(" + i + ")");

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
function pintar(){
    for (var i = 1; i <= 365; i++) {
        var cell = document.getElementById("d" + i);
        if (i <= currentDay) {
            cell.style.backgroundColor = '#a8f3a8';
            cell.style.color = 'black';
            diaDelAnyo = i;
            diasRestantes = 365 - diaDelAnyo;
            calcularPorcentaje(i);
        }else{
            cell.style.backgroundColor = '#7C7D9F';
       
        }
    }
}
pintar();

//Calcular el porcentaje
function calcularPorcentaje(i) {
    var porcentaje = (i * 100) / 365;
    let span = document.getElementById("porcentaje");
    span.innerHTML = porcentaje.toFixed(3) + "%";
}

function diaSeleccionado(i){
    //Pintar todas las celdas de verde
    pintar();

    let fechaDelDia = new Date(2023, 0, i);

    let diaSeleccionado = document.getElementById("dia-seleccionado");

    diaSeleccionado.innerHTML = fechaDelDia.toLocaleDateString();

    //Cambiar color de la celda seleccionada y quitar el color de la celda anterior
    let celdaAnterior = document.getElementById("d" + diaDelAnyo);
    celdaAnterior.style.backgroundColor = '#a8f3a8';
    
    let celdaSeleccionada = document.getElementById("d" + i);
    celdaSeleccionada.style.backgroundColor = '#CE5937';
}

diaSeleccionado(diaDelAnyo);
