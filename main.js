const op1 = ['r2-c2','r1-c4','r2-c6'];
const op2 = ['r3-c1','r2-c2','r3-c3','r1-c4','r2-c6'];
const op3 = ['r2-c2','r1-c4','r3-c5','r2-c6','r3-c7'];
const op4 = ['r3-c1','r2-c2','r3-c3','r1-c4','r3-c5','r2-c6','r3-c7'];

const tablero = document.querySelectorAll('.tablero');
const arregloTablero = Array.from(tablero);
const datos = document.getElementById('datos');

let numeros = [];
let simbolos = [];
let numSim = [];

let expresion1 = /^\d+[\+\-\*\/]\d+$/;
let expresion2 = /^\(\d+[\+\-\*\/]\d+\)[\+\-\*\/]\d+$/;
let expresion3 = /^\d+[\+\-\*\/]\(\d+[\+\-\*\/]\d+\)$/;
let expresion4 = /^\(\d+[\+\-\*\/]\d+\)[\+\-\*\/]\(\d+[\+\-\*\/]\d+\)$/;

const limpiarTablero = () => {
    arregloTablero.map(t => t.innerHTML = '');
}

const evaluarExpresion = (expresion,texto) => (expresion.test(texto)) ? true : false;

const colocarCirculos = (op) => {
    let aux = 0;
    op.map((o) => {
        arregloTablero.map((t) => {
            if (t.id == o) {
                t.innerHTML = `<div class="circulo d-flex justify-content-center align-items-center" id="circulo">${numSim[aux]}</div>`;
                aux++
            }
        });
    });
}

function arregloDeExpresion(expression) {
    numeros = [];
    simbolos = [];
    numSim = [];
    expression = expression.split('');
    expression = expression.filter(num => num !== '(' && num !== ')');
    simbolos =  expression.filter(num => isNaN(num));
    numeros =  expression.join('').split(/[\+\-\*\/]/);
    for (let i = 0; i < numeros.length; i++) {
        numSim.push(numeros[i]);
        if(simbolos.length != i){
            numSim.push(simbolos[i]);
        } 
    }
    console.log(simbolos);
    console.log(numeros);
    console.log(numSim);
}

document.getElementById('generar').addEventListener('click', () => {
    limpiarTablero();
    if (evaluarExpresion(expresion1,datos.value)) {
        arregloDeExpresion(datos.value);
        colocarCirculos(op1);
    }else if(evaluarExpresion(expresion2,datos.value)){
        arregloDeExpresion(datos.value);
        colocarCirculos(op2);
    }else if(evaluarExpresion(expresion3,datos.value)){
        arregloDeExpresion(datos.value);
        colocarCirculos(op3);
    }else if(evaluarExpresion(expresion4,datos.value)){
        arregloDeExpresion(datos.value);
        colocarCirculos(op4);
    } else {
        alert('DATOS INCORRECTOS');
    }
});


