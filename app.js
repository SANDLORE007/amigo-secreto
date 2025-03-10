// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Lista donde se almacenarán los nombres
let amigos = [];

// Función para agregar un nombre a la lista
function agregarAmigo() {
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Elimina espacios al inicio y al final

    // Validar que el nombre no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    // Agregar el nombre a la lista
    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = "";

    // Actualizar la lista en la pantalla
    mostrarLista();
}

// Función para mostrar los nombres en la lista
function mostrarLista() {
    let lista = document.getElementById("listaAmigos");
    
    // Limpiar la lista antes de actualizarla
    lista.innerHTML = "";

    // Recorrer el array de nombres y agregarlos al HTML
    amigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

// Función para realizar el sorteo
function sortearAmigo() {
    // Verificar que haya nombres en la lista
    if (amigos.length === 0) {
        alert("La lista está vacía. Agrega nombres antes de sortear.");
        return;
    }

    // Generar un índice aleatorio dentro del array de amigos
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let nombreSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la pantalla
    mostrarResultado(nombreSorteado);
}

// Función para mostrar el resultado en la lista HTML
function mostrarResultado(nombreSorteado) {
    let resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = `<li>${nombreSorteado}</li>`;
    amigos = [];
    mostrarLista(); // Llamamos esta función para actualizar la interfaz y borrar la lista
}
