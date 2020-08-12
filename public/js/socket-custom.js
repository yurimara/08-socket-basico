var socket = io();

// escuchar
socket.on('connect',
    function() {
        console.log('conectado al servidor');
    });

socket.on('disconnect', function(resp) {
    console.log('respuesta server:', resp);
});

// enviar informacion al servidor
socket.emit('enviarMensaje', {
    usuario: 'Yurimara',
    mensaje: 'Hola Mundo'
});

// escuchar
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});