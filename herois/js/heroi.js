
const turnOpen = document.getElementById('open');
const turnClose = document.getElementById('close');
const heroi = document.getElementById('heroi');

function heroiOpen () {
    heroi.src= './img/homem_ferro_aberto.jpg';
}

function heroiClose () {
    heroi.src= './img/homem_ferro_fechado.jpg';
}

turnOpen.addEventListener('click', heroiOpen);
turnClose.addEventListener('click', heroiClose);

/*Eu inspecionei a paágina e deu o seguinte erro: 
heroi.js:14 Uncaught TypeError: Cannot read properties of null (reading 'addEventListener') */