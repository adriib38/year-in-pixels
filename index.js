let diaDelAnyo = 0;
let diasRestantes = 0;

//Función para generar la tabla del calendario
function generateCalendar() {
    let table = document.getElementById("calendar");
    table.id = "calendar";
    table.style.borderCollapse = "collapse";

    //Creando las celdas de la tabla
    for (let i = 1; i <= 365; i++) {
        let cell = document.createElement("div");
      
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
let today = new Date();
let currentMonth = today.getMonth();
let currentDay = today.getDate();
let diasTranscurridosDelAnyo = currentDay + (currentMonth * 30);
console.log(diasTranscurridosDelAnyo);
currentDay = diasTranscurridosDelAnyo + 1;

// Obteniendo el elemento de la tabla
let calendar = document.getElementById("calendar");

//Generar un color aleatorio
function generateRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//Pintar
function pintar(){
    for (let i = 1; i <= 365; i++) {
        let cell = document.getElementById("d" + i);
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
    let porcentaje = (i * 100) / 365;
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
