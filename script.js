// Array de palabras con pistas para el juego
const palabrasConPistas = [
    // Objetos cotidianos
    { palabra: "mesa", pista: "Mueble con patas donde comes" },
    { palabra: "silla", pista: "Mueble para sentarse" },
    { palabra: "computadora", pista: "Máquina para trabajar y jugar" },
    { palabra: "celular", pista: "Teléfono que llevas en el bolsillo" },
    { palabra: "mochila", pista: "Bolso para llevar cosas en la espalda" },
    { palabra: "reloj", pista: "Te dice qué hora es" },
    { palabra: "llaves", pista: "Abre puertas y cajones" },
    { palabra: "espejo", pista: "Refleja tu imagen" },
    { palabra: "cama", pista: "Mueble donde duermes" },
    { palabra: "ventana", pista: "Abertura en la pared para ver afuera" },
    
    // Animales
    { palabra: "perro", pista: "Mejor amigo del hombre" },
    { palabra: "gato", pista: "Animal independiente que maúlla" },
    { palabra: "elefante", pista: "Animal grande con trompa" },
    { palabra: "laucha", pista: "Roedor pequeño y rápido" },
    { palabra: "leon", pista: "Rey de la selva" },
    { palabra: "tigre", pista: "Felino con rayas naranjas" },
    { palabra: "pajaro", pista: "Animal que vuela y canta" },
    { palabra: "pez", pista: "Animal que vive en el agua" },
    { palabra: "vaca", pista: "Animal que da leche" },
    { palabra: "caballo", pista: "Animal que se monta" },
    
    // Comida
    { palabra: "pizza", pista: "Comida italiana redonda con queso" },
    { palabra: "hamburguesa", pista: "Comida rápida con carne y pan" },
    { palabra: "ensalada", pista: "Comida saludable con verduras" },
    { palabra: "gordo", pista: "Persona con sobrepeso" },
    { palabra: "arroz", pista: "Grano blanco muy común" },
    { palabra: "pollo", pista: "Ave que se come" },
    { palabra: "queso", pista: "Lácteo amarillo o blanco" },
    { palabra: "pan", pista: "Alimento hecho con harina" },
    { palabra: "sopa", pista: "Líquido caliente con verduras" },
    { palabra: "helado", pista: "Postre frío y dulce" },
    
    // Música
    { palabra: "guitarra", pista: "Instrumento de 6 cuerdas" },
    { palabra: "piano", pista: "Instrumento con teclas blancas y negras" },
    { palabra: "musica", pista: "Arte de los sonidos" },
    { palabra: "cancion", pista: "Composición musical con letra" },
    { palabra: "melodia", pista: "Secuencia de notas musicales" },
    { palabra: "bateria", pista: "Instrumento de percusión" },
    { palabra: "violin", pista: "Instrumento de cuerda pequeño" },
    { palabra: "microfono", pista: "Aparato para amplificar la voz" },
    { palabra: "altavoz", pista: "Dispositivo que reproduce sonido" },
    { palabra: "radio", pista: "Aparato para escuchar música" },
    
    // Deportes
    { palabra: "futbol", pista: "Deporte con pelota y porterías" },
    { palabra: "tenis", pista: "Deporte con raqueta y pelota" },
    { palabra: "natacion", pista: "Deporte en el agua" },
    { palabra: "ciclismo", pista: "Deporte con bicicleta" },
    { palabra: "basquet", pista: "Deporte con canasta y pelota" },
    { palabra: "boxeo", pista: "Deporte de combate con guantes" },
    { palabra: "atletismo", pista: "Deporte de correr y saltar" },
    { palabra: "voleibol", pista: "Deporte con red y pelota" },
    { palabra: "golf", pista: "Deporte con palos y pelota pequeña" },
    { palabra: "gimnasio", pista: "Lugar para hacer ejercicio" },
    
    // Lugares
    { palabra: "playa", pista: "Lugar con arena y mar" },
    { palabra: "montana", pista: "Elevación natural muy alta" },
    { palabra: "ciudad", pista: "Lugar grande con muchos edificios" },
    { palabra: "pueblo", pista: "Lugar pequeño y tranquilo" },
    { palabra: "bosque", pista: "Lugar con muchos árboles" },
    { palabra: "desierto", pista: "Lugar seco y arenoso" },
    { palabra: "rio", pista: "Corriente de agua natural" },
    { palabra: "lago", pista: "Cuerpo de agua rodeado de tierra" },
    { palabra: "isla", pista: "Tierra rodeada de agua" },
    { palabra: "valle", pista: "Terreno entre montañas" },
    
    // Profesiones
    { palabra: "doctor", pista: "Profesional que cura enfermedades" },
    { palabra: "maestro", pista: "Profesional que enseña" },
    { palabra: "cocinero", pista: "Profesional que prepara comida" },
    { palabra: "artista", pista: "Persona que crea obras de arte" },
    { palabra: "policia", pista: "Oficial que mantiene el orden" },
    { palabra: "bombero", pista: "Profesional que apaga incendios" },
    { palabra: "ingeniero", pista: "Profesional que diseña y construye" },
    { palabra: "abogado", pista: "Profesional que defiende en juicios" },
    { palabra: "enfermero", pista: "Profesional que cuida enfermos" },
    { palabra: "dentista", pista: "Profesional que cuida los dientes" },
    
    // Arte
    { palabra: "pintura", pista: "Obra de arte con colores" },
    { palabra: "escultura", pista: "Obra de arte en 3D" },
    { palabra: "dibujo", pista: "Representación gráfica a mano" },
    { palabra: "color", pista: "Propiedad visual de la luz" },
    { palabra: "pincel", pista: "Herramienta para pintar" },
    { palabra: "lienzo", pista: "Superficie para pintar" },
    { palabra: "galeria", pista: "Lugar donde se exhibe arte" },
    { palabra: "museo", pista: "Lugar que conserva arte e historia" },
    { palabra: "fotografia", pista: "Arte de capturar imágenes" },
    { palabra: "escultura", pista: "Arte de moldear materiales" },
    
    // Tecnología
    { palabra: "programacion", pista: "Arte de crear software" },
    { palabra: "internet", pista: "Red mundial de computadoras" },
    { palabra: "aplicacion", pista: "Programa para dispositivos móviles" },
    { palabra: "videojuego", pista: "Juego electrónico interactivo" },
    { palabra: "robot", pista: "Máquina que puede hacer tareas" },
    { palabra: "satelite", pista: "Objeto que orbita la Tierra" },
    { palabra: "dron", pista: "Aeronave no tripulada" },
    { palabra: "tablet", pista: "Dispositivo táctil portátil" },
    { palabra: "auricular", pista: "Dispositivo para escuchar audio" },
    { palabra: "cargador", pista: "Dispositivo para dar energía" },
    
    // Naturaleza
    { palabra: "sol", pista: "Estrella que ilumina la Tierra" },
    { palabra: "luna", pista: "Satélite natural de la Tierra" },
    { palabra: "estrella", pista: "Punto brillante en el cielo nocturno" },
    { palabra: "nube", pista: "Vapor de agua en el cielo" },
    { palabra: "lluvia", pista: "Agua que cae del cielo" },
    { palabra: "nieve", pista: "Cristales de hielo que caen" },
    { palabra: "viento", pista: "Movimiento del aire" },
    { palabra: "tornado", pista: "Viento muy fuerte en espiral" },
    { palabra: "huracan", pista: "Tormenta muy poderosa" },
    { palabra: "terremoto", pista: "Movimiento de la tierra" },
    
    // Transporte
    { palabra: "auto", pista: "Vehículo de 4 ruedas" },
    { palabra: "avion", pista: "Vehículo que vuela por el aire" },
    { palabra: "barco", pista: "Vehículo que flota en el agua" },
    { palabra: "tren", pista: "Vehículo que va sobre rieles" },
    { palabra: "bicicleta", pista: "Vehículo de 2 ruedas con pedales" },
    { palabra: "motocicleta", pista: "Vehículo de 2 ruedas con motor" },
    { palabra: "bus", pista: "Vehículo grande para muchos pasajeros" },
    { palabra: "taxi", pista: "Auto que cobra por viaje" },
    { palabra: "ambulancia", pista: "Vehículo de emergencia médica" },
    { palabra: "camion", pista: "Vehículo grande para cargar" },
    
    // Casa
    { palabra: "cocina", pista: "Lugar donde se prepara comida" },
    { palabra: "dormitorio", pista: "Lugar donde se duerme" },
    { palabra: "banio", pista: "Lugar para asearse" },
    { palabra: "sala", pista: "Lugar principal de la casa" },
    { palabra: "jardin", pista: "Lugar con plantas y flores" },
    { palabra: "garaje", pista: "Lugar para guardar autos" },
    { palabra: "techo", pista: "Parte superior de la casa" },
    { palabra: "pared", pista: "Superficie vertical de la casa" },
    { palabra: "puerta", pista: "Abertura para entrar y salir" },
    { palabra: "escalera", pista: "Estructura para subir y bajar" },
    
    // Escuela
    { palabra: "escuela", pista: "Lugar donde se aprende" },
    { palabra: "profesor", pista: "Persona que enseña en la escuela" },
    { palabra: "estudiante", pista: "Persona que aprende en la escuela" },
    { palabra: "libro", pista: "Objeto con páginas para leer" },
    { palabra: "lapiz", pista: "Herramienta para escribir" },
    { palabra: "cuaderno", pista: "Libro en blanco para escribir" },
    { palabra: "pizarra", pista: "Superficie para escribir con tiza" },
    { palabra: "examen", pista: "Prueba de conocimientos" },
    { palabra: "tarea", pista: "Trabajo para hacer en casa" },
    { palabra: "recreo", pista: "Tiempo libre en la escuela" },
    
    // Tiempo
    { palabra: "manana", pista: "Primera parte del día" },
    { palabra: "tarde", pista: "Segunda parte del día" },
    { palabra: "noche", pista: "Tiempo cuando está oscuro" },
    { palabra: "hoy", pista: "Este día" },
    { palabra: "ayer", pista: "El día anterior" },
    { palabra: "manana", pista: "El día siguiente" },
    { palabra: "semana", pista: "Período de 7 días" },
    { palabra: "mes", pista: "Período de aproximadamente 30 días" },
    { palabra: "ano", pista: "Período de 12 meses" },
    { palabra: "hora", pista: "Período de 60 minutos" }
];

// Variables del juego
let palabraActual = "";
let pistaActual = "";
let letrasAdivinadas = new Set();
let letrasIncorrectas = new Set();
let intentos = 0;
const maxIntentos = 6;
let rachaActual = 0;

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
    document.getElementById('word-hint').textContent = pistaActual;
    document.getElementById('current-streak').textContent = rachaActual;
    document.getElementById('game-streak').textContent = rachaActual;
    
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
        rachaActual++;
        document.getElementById('game-section').classList.add('hidden');
        document.getElementById('game-over-section').classList.remove('hidden');
        document.getElementById('game-over-message').innerHTML = 
            '<div class="victory">' +
            '<h2>¡FELICIDADES! ¡GANASTE!</h2>' +
            `<p>La palabra era: <strong>${palabraActual.toUpperCase()}</strong></p>` +
            `<p><strong>¡Nueva racha: ${rachaActual} victorias!</strong></p>` +
            '</div>';
        return true;
    }
    
    if (intentos >= maxIntentos) {
        // Perdió
        rachaActual = 0;
        document.getElementById('game-section').classList.add('hidden');
        document.getElementById('game-over-section').classList.remove('hidden');
        document.getElementById('game-over-message').innerHTML = 
            '<div class="game-over">' +
            '<h2>¡GAME OVER!</h2>' +
            `<p>La palabra era: <strong>${palabraActual.toUpperCase()}</strong></p>` +
            '<p><strong>Racha reiniciada a 0</strong></p>' +
            '</div>';
        return true;
    }
    
    return false;
}

// Función para iniciar un nuevo juego
function startGame() {
    // Seleccionar palabra aleatoria con pista
    const palabraSeleccionada = palabrasConPistas[Math.floor(Math.random() * palabrasConPistas.length)];
    palabraActual = palabraSeleccionada.palabra;
    pistaActual = palabraSeleccionada.pista;
    
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
