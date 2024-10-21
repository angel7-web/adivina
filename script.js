// script.js

// Generar un número aleatorio entre 1 y 100
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let mejorpuntuacion=null;

const botonAdivinar = document.getElementById('botonAdivinar');
const botonReiniciar = document.getElementById('botonReiniciar');
const inputNumero = document.getElementById('inputNumero');
const resultado = document.getElementById('resultado');
const intentosTexto = document.getElementById('intentos');
const mejorpuntuaciontexto=document.getElementById(`mejorPuntuacion`)

// Lógica del botón "Adivinar"
botonAdivinar.addEventListener('click', function() {
    let valorInput = inputNumero.value;

    // Verificar que el usuario introduzca un número válido
    if (valorInput < 0 || valorInput > 100 || valorInput === '') {
        resultado.textContent = 'Por favor, introduce un número entre 0 y 100';
        return;
    }

    // Aumentar el número de intentos
    intentos++;

    // Comparar el número del usuario con el número secreto
    if (valorInput < numeroSecreto) {
        resultado.textContent = 'El número es mayor. Intenta de nuevo.';
    } else if (valorInput > numeroSecreto) {
        resultado.textContent = 'El número es menor. Intenta de nuevo.';
    } else {
        resultado.textContent = '¡Felicidades! Adivinaste el número en ' + intentos + ' intentos.';
        botonAdivinar.disabled = true;  // Desactivar el botón de adivinanza
        inputNumero.disabled = true;    // Desactivar el campo de entrada
        botonReiniciar.style.display = 'inline';  // Mostrar el botón de reinicio

        // Actualizar la mejor puntuación si es la menor cantidad de intentos
        if (mejorpuntuacion === null || intentos < mejorpuntuacion) {
            mejorpuntuacion = intentos;
            mejorpuntuaciontexto.textContent = 'Mejor puntuación: ' + mejorpuntuacion + ' intentos';}




        
    }
    

    // Actualizar el número de intentos
    intentosTexto.textContent = 'Intentos: ' + intentos;
});

// Lógica del botón "Reiniciar"
botonReiniciar.addEventListener('click', function() {
    resetGame();
});

function resetGame() {
    // Generar un nuevo número aleatorio
    numeroSecreto = Math.floor(Math.random() * 100) + 1;
    intentos = 0;
    
    // Reiniciar los campos de entrada y mensajes
    resultado.textContent = '';
    intentosTexto.textContent = '';
    inputNumero.value = '';
    
    // Reactivar el botón de adivinanza y el campo de entrada
    botonAdivinar.disabled = false;
    inputNumero.disabled = false;
    
    // Ocultar el botón de reinicio
    botonReiniciar.style.display = 'none';


}
