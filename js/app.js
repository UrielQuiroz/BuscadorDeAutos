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
    filtrarAuto();
});

maximo.addEventListener('change', e => {
    datosBusqueda.maximo = e.target.value;
    filtrarAuto();
});

puertas.addEventListener('change', e => {
    datosBusqueda.puertas = e.target.value;
    filtrarAuto();
});

transmision.addEventListener('change', e => {
    datosBusqueda.transmision = e.target.value;
    filtrarAuto();
});

color.addEventListener('change', e => {
    datosBusqueda.color = e.target.value;
    filtrarAuto();
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
    const result = autos.filter( filtraPorMarca ).filter( filtrarPorAño ).filter( filtrarPorMinimo ).filter( filtrarPorMaximo ).
    filter( filtrarPorPuertas ).filter( filtrarPorTransmision ).filter( filtrarPorColor );
    //console.log(result);

    if(result.length){
        mostrarAutos(result);
    }else {
        sinResultados();
    }

}

function sinResultados() {
    limpiarHTML();
    const noResult = document.createElement('div');
    noResult.classList.add('alerta', 'error');
    noResult.textContent = 'No hay resultados';
    result.appendChild(noResult);
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


function filtrarPorMinimo(auto) {
    const { minimo } = datosBusqueda;
    if(minimo) {
        return auto.precio >= minimo;
    }

    return auto;
}

function filtrarPorMaximo(auto) {
    const { maximo } = datosBusqueda;
    if(maximo) {
        return auto.precio <= maximo;
    }

    return auto;
}

function filtrarPorPuertas(auto) {
    const { puertas } = datosBusqueda;
    if(puertas) {
        return auto.puertas == puertas;
    }

    return auto;
}

function filtrarPorTransmision(auto) {
    const { transmision } = datosBusqueda;
    if(transmision) {
        return auto.transmision == transmision;
    }

    return auto;
}

function filtrarPorColor(auto) {
    const { color } = datosBusqueda;
    if(color) {
        return auto.color == color;
    }

    return auto;
}