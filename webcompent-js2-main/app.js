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
        imagen:"./img/i567711.jpeg",
        nombre : 'Batman',
        apellidos : 'Batman es un superhéroe de DC Comics. Creado por Bob Kane y Bill Finger, su identidad secreta es Bruce Wayne, un multimillonario que combate el crimen en Ciudad Gótica. Sin superpoderes, confía en su ingenio y habilidades físicas, además de una amplia gama de artilugios.',
        estudio:"DC"
    },
    {
        imagen:"./img/1366_2000.jpeg",
        nombre : 'Super Man',
        apellidos : 'Superman es un icónico superhéroe de DC Comics. Creado por Jerry Siegel y Joe Shuster, su verdadero nombre es Clark Kent. Dotado con habilidades sobrehumanas gracias a su origen kryptoniano, lucha contra el crimen como protector de Metrópolis.',
        estudio:"DC"

    },
    {
        imagen:"./img/thor-1.webp",
        nombre : 'Thor',
        apellidos : 'Thor es un personaje de cómics creado por Stan Lee, Larry Lieber y Jack Kirby para Marvel Comics. Basado en la deidad nórdica del mismo nombre, Thor es un poderoso guerrero y príncipe de Asgard, el reino de los dioses nórdicos. Su arma principal es el martillo mágico Mjolnir, que le otorga el poder de controlar el trueno y el relámpago.',
        estudio:"Marvel",
    },
    {
        imagen:"./img/thanos-podria-regresar-al-ucm-de-esta-forma.jpg",
        nombre : 'Thanos',
        apellidos : 'Thanos es un supervillano ficticio creado por Jim Starlin y debutó en "Iron Man #55" en 1973. Es uno de los adversarios más formidables en el universo de Marvel Comics. Su principal objetivo es obtener el control del universo y conquistarlo, usualmente a través de medios extremadamente violentos y siniestros.',
        estudio:"Marvel",
    },
    {
        imagen:"./img/gatubela_dc-comics_iron-studios-17.jpg",
        nombre : 'Gatúbela',
        apellidos : 'Gatúbela es un personaje icónico de los cómics de DC Comics. Su nombre real es Selina Kyle. Es conocida por ser una ladrona experta y una hábil combatiente cuerpo a cuerpo, además de ser una maestra en el arte del sigilo y la acrobacia.',
        estudio:"DC"

    },
    {
        imagen:"./img/disexo_x2x.jpg_1758632412.webp",
        nombre : 'Bruja Escarlata',
        apellidos : 'Wanda Maximoff, también conocida como la Bruja Escarlata, es un personaje de Marvel Comics. En los cómics, es una mutante con habilidades de manipulación de la realidad y telepatía, siendo capaz de lanzar poderosas ráfagas de energía escarlata. Es hermana gemela de Pietro Maximoff, conocido como Quicksilver, y ha sido miembro destacado tanto de los Vengadores como de los X-Men en varias ocasiones.',
        estudio:"Marvel",

    },
    {
        imagen:"./img/spiderman.webp",
        nombre : 'Spider-Man',
        apellidos : 'Spider-Man, también conocido como Peter Parker, es uno de los superhéroes más populares de Marvel Comics. Creado por Stan Lee y Steve Ditko, hizo su primera aparición en "Amazing Fantasy #15" en 1962. Peter Parker es un joven estudiante de secundaria que adquiere habilidades arácnidas después de ser picado por una araña radioactiva.',
        estudio:"Marvel",
    },
    {
        imagen:"./img/mujer-maravilla-3.webp",
        nombre : 'Mujer Maravilla',
        apellidos : 'La Mujer Maravilla es un personaje icónico de DC Comics. Creada por William Moulton Marston y Harry G. Peter, hizo su primera aparición en "All Star Comics #8" en 1941. Su nombre real es Diana Prince, una princesa amazona de la isla de Themyscira, también conocida como Paraíso. Dotada con habilidades sobrehumanas y entrenada en combate desde una edad temprana, la Mujer Maravilla es una defensora de la paz, la justicia y la igualdad.',
        estudio:"DC"
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