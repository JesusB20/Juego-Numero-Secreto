let numSecreto = 0;
let intentos = 1;
let numerosSorteados = [];
let numeroMaximo = 10;

function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function intentoCheck() {
    let numUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numSecreto === numUsuario){
        asignarTexto('p',`Has acertado al numero en ${intentos} ${(intentos === 1 ? 'intento' : 'intentos')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else { 
        // El usuario no acerto
        if (numUsuario < numSecreto) {
        asignarTexto('p','El numero secreto es mayor');
        } else {
        asignarTexto('p','El numero secreto es menor');
        }
        intentos++;
        limpiarIntentos();

    return;
    }
}

function limpiarIntentos() {
   document.querySelector('#valorUsuario').value = '';
}

function numeroRandom() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    console.log(numeroGenerado);
    console.log(numerosSorteados);

        if (numerosSorteados.length == numeroMaximo ) {
            asignarTexto('p','Ya has alcanzado el numero maximo de sorteos');
        } else {

        if (numerosSorteados.includes(numeroGenerado)){
            return numeroRandom();
        } else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function reinciarJuego() {
    /*
    Deshabilitar boton de nuevo juego
    */
    limpiarIntentos();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function condicionesIniciales() {
    asignarTexto('h1','Juego del numero secreto');
    asignarTexto('p',`Indica un numero del 1 al ${numeroMaximo}`);
    numSecreto = numeroRandom();
    intentos = 1;    
}

condicionesIniciales();