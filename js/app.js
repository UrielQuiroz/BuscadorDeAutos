//VARIABLES
const marca = document.querySelector('#marca');
const year = document.querySelector('#year');
const minimo = document.querySelector('#minimo');
const maximo = document.querySelector('#maximo');
const puertas = document.querySelector('#puertas');
const transmision = document.querySelector('#transmision');
const color = document.querySelector('#color');

//Contenedor para los resultados
const result = document.querySelector('#resultado');

const max = new Date().getFullYear();
const min = max - 10;


//Generar un objeto con la busqueda
const datosBusqueda = {
    marca: '',
    year: '',
    minimo: '',
    maximo: '',
    puertas: '',
    transmision: '',
    color: ''
};


//EVENTOS
document.addEventListener('DOMContentLoaded', () => {
    
    //Cargar los autos
    mostrarAutos(autos);

    //Lenar dropdown de años
    LlenarSelect();
});

//event listener para los select de busqueda
marca.addEventListener('change', e => {
    datosBusqueda.marca = e.target.value;
    filtrarAuto();
});

year.addEventListener('change', e => {
    datosBusqueda.year = parseInt(e.target.value);
    filtrarAuto();
});

minimo.addEventListener('change', e => {
    datosBusqueda.minimo = e.target.value;
});

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
});

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
});

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    console.log(datosBusqueda);
});


//FUNCIONES
function mostrarAutos(autos) {

    //Elimina el HTML previo
    limpiarHTML();

    autos.forEach( auto => {

        const { marca, modelo, year, puertas, transmision, precio, color } = auto; //Destructuring
        const autoHTML = document.createElement('p');

        autoHTML.textContent = `
            ${marca} ${modelo} - ${year} - ${puertas} Puertas - Trasmisión: ${transmision} - Precio: ${precio} - 
            Color: ${color}
        `;

        //insertar en el HTML
        result.appendChild(autoHTML);

    })
}

//Limpiar HTML
function limpiarHTML() {
    while(result.firstChild){
        result.removeChild(result.firstChild);
    }
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


function filtrarAuto(){
    const result = autos.filter( filtraPorMarca ).filter( filtrarPorAño );
    //console.log(result);
    mostrarAutos(result);
}

function filtraPorMarca(auto) {
    const { marca } = datosBusqueda;
    if(marca) {
        return auto.marca === marca;
    }

    return auto;
}

function filtrarPorAño(auto) {
    const { year } = datosBusqueda;
    if(year) {
        return auto.year == year;
    }

    return auto;
}