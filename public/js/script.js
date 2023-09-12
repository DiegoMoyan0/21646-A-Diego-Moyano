// JavaScript para agregar funcionalidad al botón Responder
const responderButton = document.getElementById('responder');
responderButton.addEventListener('click', function () {
    // Lógica para agregar una nueva respuesta al foro
    const respuestaText = prompt('Escribe tu respuesta:');
    if (respuestaText) {
        const respuestasList = document.querySelector('#respuestas ul');
        const nuevaRespuesta = document.createElement('li');
        nuevaRespuesta.textContent = respuestaText;
        respuestasList.appendChild(nuevaRespuesta);
    }
});
