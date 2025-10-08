// Array de palabras para el juego
const palabras = [
    "futbol", "gimnasio", "programacion", "computadora", "mate",
    "musica", "kiosco", "jugador", "celular", "mochila"
];

// Variables del juego
let palabraActual = "";
let letrasAdivinadas = new Set();
let letrasIncorrectas = new Set();
let intentos = 0;
const maxIntentos = 6;

// Función para obtener una letra inicial única de la palabra
function obtenerLetraInicial(palabra) {
    const letrasUnicas = [];
    
    for (let letra of palabra) {
        if (palabra.split(letra).length - 1 === 1) {
            letrasUnicas.push(letra);
        }
    }
    
    if (letrasUnicas.length > 0) {
        return letrasUnicas[Math.floor(Math.random() * letrasUnicas.length)];
    }
    
    return palabra[0];
}

// Función para dibujar el hangman progresivamente
function dibujarHangman(intentos) {
    let hangman = "   +---+\n";
    hangman += "   |   |\n";
    
    // Cabeza (aparece en intento 1)
    if (intentos >= 1) {
        hangman += "   0   |\n";
    } else {
        hangman += "       |\n";
    }
    
    // Torso y brazos (aparece progresivamente)
    if (intentos >= 2) {
        if (intentos >= 3) {
            if (intentos >= 4) {
                hangman += "  /|\\  |\n";  // Cabeza + torso + ambos brazos
            } else {
                hangman += "  /|   |\n";  // Cabeza + torso + brazo izquierdo
            }
        } else {
            hangman += "   |   |\n";  // Cabeza + torso
        }
    } else {
        hangman += "       |\n";
    }
    
    // Piernas (aparece progresivamente)
    if (intentos >= 5) {
        if (intentos >= 6) {
            hangman += "  / \\  |\n";  // Ambas piernas
        } else {
            hangman += "  /    |\n";  // Pierna izquierda
        }
    } else {
        hangman += "       |\n";
    }
    
    hangman += "       |\n";
    hangman += "   =========";
    
    return hangman;
}

// Función para mostrar la palabra con las letras adivinadas
function mostrarPalabra(palabra, letrasAdivinadas) {
    let resultado = "";
    for (let letra of palabra) {
        if (letrasAdivinadas.has(letra)) {
            resultado += letra.toUpperCase() + " ";
        } else {
            resultado += "_ ";
        }
    }
    return resultado.trim();
}

// Función para mostrar mensajes
function mostrarMensaje(mensaje, tipo) {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = mensaje;
    messageDiv.className = `message ${tipo}`;
    
    // Limpiar mensaje después de 3 segundos
    setTimeout(() => {
        messageDiv.textContent = '';
        messageDiv.className = '';
    }, 3000);
}

// Función para actualizar la interfaz del juego
function actualizarInterfaz() {
    document.getElementById('word-display').textContent = mostrarPalabra(palabraActual, letrasAdivinadas);
    document.getElementById('hangman-display').textContent = dibujarHangman(intentos);
    document.getElementById('attempts').textContent = `Intentos restantes: ${maxIntentos - intentos}`;
    
    if (letrasIncorrectas.size > 0) {
        document.getElementById('incorrect-letters').textContent = 
            `Letras incorrectas: ${Array.from(letrasIncorrectas).sort().join(', ').toUpperCase()}`;
    } else {
        document.getElementById('incorrect-letters').textContent = '';
    }
    
    // Mostrar letras usadas
    const todasLasLetras = new Set([...letrasAdivinadas, ...letrasIncorrectas]);
    if (todasLasLetras.size > 0) {
        document.getElementById('used-letters').innerHTML = 
            `Letras usadas: ${Array.from(todasLasLetras).sort().join(', ').toUpperCase()}`;
    }
}

// Función para verificar si el juego terminó
function verificarEstadoJuego() {
    if (Array.from(palabraActual).every(letra => letrasAdivinadas.has(letra))) {
        // ¡Ganó!
        document.getElementById('game-section').classList.add('hidden');
        document.getElementById('game-over-section').classList.remove('hidden');
        document.getElementById('game-over-message').innerHTML = 
            '<div class="victory">' +
            '<h2>¡FELICIDADES! ¡GANASTE!</h2>' +
            `<p>La palabra era: <strong>${palabraActual.toUpperCase()}</strong></p>` +
            '</div>';
        return true;
    }
    
    if (intentos >= maxIntentos) {
        // Perdió
        document.getElementById('game-section').classList.add('hidden');
        document.getElementById('game-over-section').classList.remove('hidden');
        document.getElementById('game-over-message').innerHTML = 
            '<div class="game-over">' +
            '<h2>¡GAME OVER!</h2>' +
            `<p>La palabra era: <strong>${palabraActual.toUpperCase()}</strong></p>` +
            '</div>';
        return true;
    }
    
    return false;
}

// Función para iniciar un nuevo juego
function startGame() {
    // Seleccionar palabra aleatoria
    palabraActual = palabras[Math.floor(Math.random() * palabras.length)];
    letrasAdivinadas.clear();
    letrasIncorrectas.clear();
    intentos = 0;
    
    // Obtener letra inicial
    const letraInicial = obtenerLetraInicial(palabraActual);
    letrasAdivinadas.add(letraInicial);
    
    // Actualizar interfaz
    document.getElementById('welcome-section').classList.add('hidden');
    document.getElementById('game-section').classList.remove('hidden');
    document.getElementById('game-over-section').classList.add('hidden');
    
    document.getElementById('word-length').textContent = palabraActual.length;
    document.getElementById('initial-letter').textContent = letraInicial.toUpperCase();
    
    actualizarInterfaz();
    
    // Limpiar mensajes
    document.getElementById('message').textContent = '';
    document.getElementById('message').className = '';
}

// Función para adivinar una letra
function guessLetter() {
    const input = document.getElementById('letter-input');
    let letra = input.value.toLowerCase().trim();
    
    if (!letra || letra.length !== 1 || !letra.match(/[a-z]/)) {
        mostrarMensaje('Por favor, ingresa solo una letra válida.', 'error');
        return;
    }
    
    if (letrasAdivinadas.has(letra) || letrasIncorrectas.has(letra)) {
        mostrarMensaje('Ya has usado esa letra. Intenta con otra.', 'error');
        input.value = '';
        return;
    }
    
    if (palabraActual.includes(letra)) {
        letrasAdivinadas.add(letra);
        mostrarMensaje(`¡Correcto! La letra '${letra.toUpperCase()}' está en la palabra.`, 'success');
    } else {
        letrasIncorrectas.add(letra);
        intentos++;
        mostrarMensaje(`Incorrecto. La letra '${letra.toUpperCase()}' no está en la palabra.`, 'error');
    }
    
    input.value = '';
    actualizarInterfaz();
    
    // Verificar si el juego terminó
    if (verificarEstadoJuego()) {
        return;
    }
}

// Función para nuevo juego
function newGame() {
    startGame();
}

// Event listeners
document.getElementById('letter-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        guessLetter();
    }
});

document.getElementById('letter-input').addEventListener('input', function(e) {
    // Convertir a mayúscula automáticamente
    e.target.value = e.target.value.toUpperCase();
});

// Inicializar la página
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('letter-input').focus();
});
