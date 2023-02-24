// botones 1
const containerCartas= [...document.querySelectorAll('.cards-container')];
const botonLeft = document.getElementById('boton-left');
const botonRight= document.getElementById('boton-right')


containerCartas.forEach((item,i)=>{
    let containerDimension = item.getBoundingClientRect();
    let containerWidth = containerDimension.width;

    botonRight.addEventListener('click',()=>{
        item.scrollLeft += containerWidth;
    })

    botonLeft.addEventListener('click',()=>{
        item.scrollLeft -= containerWidth;
    })
})






// botenes 2
const container = [...document.querySelectorAll('.container-personas')];
const buttonLeft = document.getElementById('button-left');
const buttonRight= document.getElementById('button-right')


container.forEach((item,i)=>{
    let containerDimension = item.getBoundingClientRect();
    let containerWidth = containerDimension.width;

    buttonRight.addEventListener('click',()=>{
        item.scrollLeft += containerWidth;
    })

    buttonLeft.addEventListener('click',()=>{
        item.scrollLeft -= containerWidth;
    })
});

// carrusel de letras

const carrusel = document.querySelector('.carrusel-header');

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;
let intervalo = null;
let step = 1;

const ejecucion =()=>{
    intervalo = setInterval(()=>{
        carrusel.scrollLeft = carrusel.scrollLeft + step;

        if(carrusel.scrollLeft === maxScrollLeft){
            step = step * -1;
        }
        else if(carrusel.scrollLeft === 0){
            step = step * -1;
        }
    },10);
}

ejecucion();
