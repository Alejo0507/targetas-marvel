import './src/App/components/card/cardComponent.js';

const divCards = document.querySelector('#container-cards');
const alumnos = [
    {
        imagen:"./img/capitan-america-1969111.jpg",
        nombre : 'Capitan America',
        apellidos : 'El Capitán América, cuyo nombre real es Steven "Steve" Grant Rogers, es un superhéroe ficticio que aparece en los cómics estadounidenses publicados por Marvel Comics.',
        estudio:"Marvel",
    },
    {
        imagen:"./img/image-14.1664995292.6726.webp",
        nombre : 'Iron Man',
        apellidos : 'Iron Man es el alter ego de Tony Stark, un genio multimillonario y filántropo que, tras ser gravemente herido, desarrolla una armadura tecnológica para combatir el crimen. Su identidad secreta y su ingenio lo convierten en un ícono de la lucha contra el mal en el universo Marvel',
        estudio:"Marvel",
    },
    {
        nombre : 'Alumno C',
        apellidos : 'Apellido C'
    },
    {
        nombre : 'Alumno A',
        apellidos : 'Apellido D'
    },
    {
        nombre : 'Alumno A',
        apellidos : 'Apellido D'
    },
    {
        nombre : 'Alumno A',
        apellidos : 'Apellido D'
    },
    {
        nombre : 'Alumno A',
        apellidos : 'Apellido D'
    },
    {
        nombre : 'Alumno A',
        apellidos : 'Apellido D'
    },
    {
        nombre : 'Alumno A',
        apellidos : 'Apellido D'
    },
    {
        nombre : 'Alumno A',
        apellidos : 'Apellido D'
    }
]
document.addEventListener('DOMContentLoaded', (e) => {
    alumnos.forEach(item =>{
        divCards.insertAdjacentHTML('beforeend',`
        <card-component class ="g-3 col-4 col-sm-6 col-lg-3">
        <span slot="imagen"><img  class="card-img-top" src="${item.imagen}" alt=""></span>
        <span slot = "numero">${item.nombre}</span>
        <span slot = "contenido">${item.apellidos}</span>
        <span slot = "estudio">${item.estudio}</span>
        </card-component>`);
    })
});