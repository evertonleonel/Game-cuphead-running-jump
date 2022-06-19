const cuphead = document.querySelector('.cuphead');
const planta = document.querySelector('.planta');

const jump = () => {
    cuphead.classList.add('jump');

    setTimeout(() => {

        cuphead.classList.remove('jump');

    }, 500);
}

const loop = setInterval ( () => {



    const plantaPosition = planta.offsetLeft;
    const cupheadPosition = +window.getComputedStyle(cuphead).bottom.replace('px', '');
    
    if (plantaPosition <= 75 && plantaPosition > 0 && cupheadPosition < 85){

        planta.style.animation = 'none';
        planta.style.left = ` ${plantaPosition}px`

        cuphead.style.animation = 'none';
        cuphead.style.bottom = ` ${cupheadPosition}px`

        cuphead.src = "/imagens/cuphead-ghost-gif.gif";
        cuphead.style.width = '120px';
        cuphead.style.marginLeft = '50px'

        clearInterval(loop);
    }

}, 10);

document.addEventListener('keydown', jump);
