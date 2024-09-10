let arbolLargo = document.getElementById('arbol-largo');
let arbolCorto = document.getElementById('arbol-corto');
let datos = document.getElementById('datos');

let expresion1 = /^\d+[\+\-\*\/]\d+$/;
let expresion2 = /^\(\d+[\+\-\*\/]\d+\)[\+\-\*\/]\d+$/;

const evaluarExpresion = (expresion,texto) => (expresion.test(texto)) ? true : false;

document.getElementById('generar').addEventListener('click', () => {

    if (evaluarExpresion(expresion2,datos.value)) {
        console.log('datos correctos');
        let operacion1 = datos.value.split(')');
    
        let op1 = operacion1[0];
        let op2 = operacion1[1];
    
        op1 = op1.split('');
        op1 = op1.filter(el => el !== '(');
        let sim1 = op1.filter(el => isNaN(el));
        op1 = op1.join('').split(sim1);
    
        op2 = op2.split('');
        let sim2 = op2.filter(el => isNaN(el));
        op2 = op2.join('').split(sim2);
    
        document.getElementById('num1').textContent = op1[0];
        document.getElementById('num2').textContent = op1[1];
        document.getElementById('simbolo1').textContent = sim1;
    
        document.getElementById('simbolo2').textContent = sim2;
        document.getElementById('num3').textContent = op2[1];
        
        arbolCorto.setAttribute('hidden','true');
        arbolLargo.removeAttribute("hidden");

    } else if(evaluarExpresion(expresion1,datos.value)) {
        let operacion2 = datos.value.split('');
        let sim = operacion2.filter(el => isNaN(el));
        operacion2 = operacion2.join('').split(sim);
    
        document.getElementById('numero1').textContent = operacion2[0];
        document.getElementById('numero2').textContent = operacion2[1];
        document.getElementById('sim').textContent = sim;
        
        arbolLargo.setAttribute('hidden','true');
        arbolCorto.removeAttribute("hidden");
    } else {
        alert('Escribelo de otra forma');
    }
});