let friends = []; // Array global para almacenar los nombres de los participantes del Amigo Secreto.
                  // Aquí se guardarán todos los nombres que el usuario vaya añadiendo.

/**
 * Limpia el campo de entrada de texto (el input donde se digitan los nombres)
 * y pone el foco (el cursor) en él.
 * Esto mejora la usabilidad, permitiendo al usuario escribir el siguiente nombre
 * inmediatamente después de añadir o al reiniciar.
 */
function inputParameters() {
    // Accede al elemento HTML con el ID 'amigo' (que es tu <input type="text">).
    document.getElementById('amigo').value = ""; // Establece su valor a una cadena vacía, limpiando el texto.
    document.getElementById('amigo').focus();   // Mueve el foco del navegador a este campo de entrada.
}

/**
 * Reinicia completamente el estado del juego a su configuración inicial.
 * Esto incluye vaciar la lista de amigos, limpiar el campo de entrada
 * y borrar los resultados del sorteo y la lista de amigos mostrada en el HTML.
 */
function restartGame() {
    friends = []; // Vacía el array global 'friends', eliminando todos los participantes.
    document.getElementById('amigo').value = ''; // Limpia el contenido del campo de entrada.
    document.getElementById('listaAmigos').innerHTML = ''; // Elimina todos los elementos <li> de la lista de amigos en el HTML.
    document.getElementById('resultado').innerHTML = ''; // Elimina los resultados del sorteo mostrados en el HTML.
}

/**
 * Realiza el sorteo del Amigo Secreto, asignando a cada participante quién le regala.
 * Implementa un algoritmo de barajado para asegurar aleatoriedad y
 * verifica que ninguna persona se regale a sí misma.
 */
function drawFriend() {
    // --- Validación 1: Cantidad mínima de participantes ---
    // Para que el sorteo del Amigo Secreto sea funcional y se evite el auto-regalo
    // o ciclos simples (A->B y B->A) en grupos pequeños, se requiere un mínimo de 3 participantes.
    if (friends.length < 3) {
        alert('Necesitas un mínimo de tres amigos en la lista para realizar el sorteo del Amigo Secreto.');
        return; // Detiene la ejecución de la función si no se cumple el requisito.
    }

    // --- Preparación para el sorteo ---
    // Creamos dos copias del array 'friends' utilizando el operador spread (...).
    // Esto es crucial para no modificar el array original 'friends'.
    let friendsWhoGive = [...friends];      // 'friendsWhoGive' representa a quienes darán un regalo (orden original).
    let friendsWhoReceive = [...friends];   // 'friendsWhoReceive' representa a quienes recibirán un regalo (será barajado).

    // Obtiene la referencia al elemento HTML donde se mostrarán los resultados del sorteo.
    let resultHTML = document.getElementById('resultado');
    resultHTML.innerHTML = ''; // Limpia cualquier resultado de sorteos anteriores en la interfaz.

    // --- Algoritmo de Barajado (Fisher-Yates Shuffle) ---
    // Este bucle implementa el algoritmo Fisher-Yates, que es el método estándar
    // para barajar un array de forma verdaderamente aleatoria y justa.
    // Itera desde el último elemento del array 'friendsWhoReceive' hacia el segundo (índice 1).
    for (let i = friendsWhoReceive.length - 1; i > 0; i--) {
        // Genera un índice aleatorio 'j' entre 0 (inclusive) y 'i' (inclusive).
        // Math.random() devuelve un número entre 0 y 1.
        // Math.floor() redondea hacia abajo al entero más cercano.
        const j = Math.floor(Math.random() * (i + 1));
        
        // Intercambia el elemento actual (en posición 'i') con el elemento en la posición aleatoria 'j'.
        // Esta es una sintaxis de desestructuración de arrays que permite un intercambio conciso.
        [friendsWhoReceive[i], friendsWhoReceive[j]] = [friendsWhoReceive[j], friendsWhoReceive[i]];
    }

    // --- Asignación de Parejas y Verificación de No Auto-Regalo ---
    // Recorre el array 'friendsWhoGive' (el orden original) para emparejar cada regalador
    // con un receptor del array barajado 'friendsWhoReceive'.
    for (let i = 0; i < friendsWhoGive.length; i++) {
        let giver = friendsWhoGive[i];      // El nombre del amigo que regala en esta iteración.
        let reciver = friendsWhoReceive[i]; // El nombre del amigo que recibe, de la lista barajada.

        // Condición de validación crucial: Si el regalador es el mismo que el receptor,
        // significa que el sorteo actual no es válido (alguien se regala a sí mismo).
        if (giver === reciver) {
            // Muestra una alerta al usuario y un mensaje en la interfaz.
            // Se usa '\n' para un salto de línea en el mensaje de alerta.
            alert('¡Ups! Parece que alguien se tendría que regalar a sí mismo en el sorteo.\nPor favor, intenta sortear de nuevo.');
            resultHTML.innerHTML = '<li>Intenta sortear de nuevo para obtener un sorteo válido.</li>';
            return; // Detiene la función 'drawFriend()' para que el usuario pueda reintentar.
        }

        // Si la pareja es válida (el regalador no se regala a sí mismo), la muestra en el HTML.
        let li = document.createElement('li'); // Crea un nuevo elemento <li>.
        // Utiliza `innerHTML` con un "template literal" (comillas invertidas `` ` ``)
        // para insertar HTML (<strong>) y los nombres de forma dinámica.
        li.innerHTML = `<strong>${giver}</strong> le regala a <strong>${reciver}</strong>`;
        resultHTML.appendChild(li); // Añade el elemento <li> (con la pareja) a la lista de resultados.
    }

    // Mensajes de consola (útiles para depuración) que confirman que el sorteo se completó
    // y muestran el estado final de los arrays (el de 'friendsWhoReceive' ya barajado).
    console.log('Sorteo completado con éxito!');
    console.log(`Amigos que regalan:`, friendsWhoGive);
    console.log(`Amigos que reciben (barajado):`, friendsWhoReceive);
}

/**
 * Muestra la lista actual de amigos (almacenados en el array 'friends')
 * en el elemento HTML con el ID 'listaAmigos'.
 * Limpia la lista existente y la reconstruye cada vez.
 */
function showFriends() {
    const ul = document.getElementById('listaAmigos'); // Obtiene la referencia al elemento <ul>.
    ul.innerHTML = ""; // Limpia todo el contenido HTML dentro del <ul> para evitar duplicados visuales.

    // Itera sobre cada amigo en el array global 'friends' utilizando un bucle 'for' tradicional.
    for (let i = 0; i < friends.length; i++) {
        let friend = friends[i]; // Obtiene el nombre del amigo en la posición actual 'i'.
        let li = document.createElement('li'); // Crea un nuevo elemento HTML <li> (elemento de lista).
        li.textContent = friend; // Asigna el nombre del amigo como el texto de este <li>.
        ul.appendChild(li); // Añade el <li> recién creado como un hijo del <ul>, haciéndolo visible.
    }
}

/**
 * Valida si un nombre de amigo que se intenta añadir ya existe en la lista 'friends'.
 * La comparación se realiza de forma insensible a mayúsculas/minúsculas.
 * Muestra una alerta si el nombre está duplicado y limpia/enfoca el input.
 * @param {string} newFriend - El nombre del amigo que se intenta añadir.
 * @returns {boolean} - true si el amigo está duplicado, false en caso contrario.
 */
function isFriendDuplicated(newFriend) {
    // Convierte el nuevo nombre a minúsculas para compararlo con los nombres existentes,
    // asegurando que "Juan" y "juan" se consideren el mismo.
    const lowerCaseNewFriend = newFriend.toLowerCase();

    // Itera sobre cada amigo existente en el array 'friends'.
    for (let i = 0; i < friends.length; i++) {
        // Compara el nombre nuevo (en minúsculas) con el nombre existente (también en minúsculas).
        if (lowerCaseNewFriend === friends[i].toLowerCase()) {
            // Si se encuentra una coincidencia, el nombre está duplicado.
            alert(`El nombre: '${newFriend}' ya ha sido añadido. \nPor favor, ingresa uno diferente.`);
            inputParameters(); // Limpia el campo de entrada y devuelve el foco.
            return true; // Indica que se encontró un duplicado.
        }        
    }
    return false; // Si el bucle termina, significa que no se encontraron duplicados.
}

/**
 * Guarda un nombre de amigo que ya ha sido validado (no vacío y no duplicado)
 * en el array global 'friends'.
 * Después de guardar, actualiza la interfaz para mostrar la lista de amigos actualizada
 * y prepara el campo de entrada para el siguiente nombre.
 * @param {string} validatedFriend - El nombre del amigo que ya ha pasado todas las validaciones.
 */
function saveFriend(validatedFriend) {
    friends.push(validatedFriend); // Añade el nombre al final del array 'friends'.
    showFriends(); // Llama a 'showFriends' para actualizar la lista visible.
    inputParameters(); // Limpia el campo de entrada y pone el foco.
}

/**
 * Valida si el valor de un campo de texto está vacío.
 * Si está vacío, muestra una alerta y limpia/enfoca el campo de entrada.
 * @param {string} friend - El valor del campo de texto a validar.
 * @returns {string|null} - El nombre si el campo no está vacío, o `null` si lo está.
 */
function emptyField(friend) {
    if (friend) { // Verifica si la cadena 'friend' no está vacía, null, undefined, 0, false.
        return friend; // Si tiene un valor, lo devuelve.
    } else {
        alert('Por favor ingrese un valor válido!'); // Alerta si el campo está vacío.
        inputParameters(); // Limpia el campo y pone el foco.
        return null; // Indica que el campo estaba vacío.
    }
}

/**
 * Se encarga de la lectura inicial del nombre del amigo desde el input.
 * Luego, orquesta las validaciones (campo vacío, duplicado)
 * y si el nombre es válido, procede a guardarlo.
 */
function dataReading() {
    // Obtiene el valor del campo de entrada y elimina los espacios en blanco
    // del inicio y del final con `.trim()`.
    let friend = document.getElementById('amigo').value.trim();
    
    // Primero, valida si el campo está vacío.
    let validFriend = emptyField(friend);

    if (validFriend) { // Si el nombre no está vacío, continúa con la validación de duplicados.
        // Segundo, valida si el nombre ya existe en la lista.
        if (isFriendDuplicated(validFriend)) {
            return; // Si el nombre está duplicado, detiene la ejecución de esta función.
        }
        
        // Si el nombre pasa ambas validaciones, se considera listo para ser guardado.
        console.log(`Amigo ingresado: ${validFriend}`); // Mensaje de depuración.
        saveFriend(validFriend); // Guarda el amigo en el array y actualiza la interfaz.
        console.log(`Amigos: ${friends}`); // Mensaje de depuración.
    }    
}

/**
 * Añade un "escuchador de eventos" al campo de entrada con ID 'amigo'.
 * Cuando el usuario presiona una tecla en ese campo, este escuchador se activa.
 * Si la tecla presionada es 'Enter', llama a la función 'addFriend()' para añadir el nombre.
 * `event.preventDefault()` evita que el navegador realice su acción predeterminada para 'Enter'
 * (como enviar un formulario), dándonos control total.
 */
document.getElementById('amigo').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') { // Comprueba si la tecla presionada es 'Enter'.
        addFriend(); // Llama a la función para añadir un amigo.
        event.preventDefault(); // Detiene el comportamiento predeterminado del navegador.
    }
});

/**
 * Función que se activa cuando el usuario hace clic en el botón "Añadir".
 * Su única responsabilidad es iniciar el proceso de lectura y validación de datos
 * llamando a `dataReading()`.
 */
function addFriend() {
    dataReading();
    return; // El 'return' aquí no es estrictamente necesario, pero no causa daño.
}

// Al cargar la página, se establece automáticamente el foco en el campo de entrada 'amigo'.
// Esto mejora la experiencia del usuario, permitiendo empezar a escribir de inmediato.
document.getElementById('amigo').focus();