//VARIABLES
const result = document.querySelector('#resultado');


//EVENTOS
document.addEventListener('DOMContentLoaded', () => {
    mostrarAutos();
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