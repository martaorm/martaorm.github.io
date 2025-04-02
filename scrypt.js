// Script para manejar el envío del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita el comportamiento por defecto del formulario

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('¡Mensaje enviado exitosamente!');
    } else {
        alert('Por favor, completa todos los campos.');
    }
});
