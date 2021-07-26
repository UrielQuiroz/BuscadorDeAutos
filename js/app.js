//VARIABLES
const result = document.querySelector('#resultado');
const year = document.querySelector('#year');

const max = new Date().getFullYear();
const min = max - 10;


//EVENTOS
document.addEventListener('DOMContentLoaded', () => {
    
    //Cargar los autos
    mostrarAutos();

    //Lenar dropdown de años
    LlenarSelect();
})


//FUNCIONES
function mostrarAutos() {
    autos.forEach( auto => {

        const { marca, modelo, year, puertas, trasmision, precio, color } = auto; //Destructuring
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Trasmisión: ${trasmision} - Precio: ${precio} - 
            Color: ${color}
        `;

        //insertar en el HTML
        result.appendChild(autoHTML);

    })
}

//Generar los años del dropdown
function LlenarSelect() {
    for(let i = max; i >= min; i--) {
        const opcion = document.createElement('option');
        opcion.value = i;
        opcion.textContent = i;
        year.appendChild(opcion);  //Agrega la opciones del año a drop
    }
}