const { io } = require('../server');

io.on('connection', (client) => {
    console.log('usuario conectado');

    client.emit('enviarMensaje', {
        usuario: 'Admin',
        mensaje: 'Bienvenido'
    });

    client.on('disconnet', () => {
        console.log('usuario desconectado');
    });

    // escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(data);

        client.broadcast.emit('enviarMensaje', data);
        /*
        if (mensaje.usuario) {
            callback({
                resp: 'TODO BIEN'
            });
        } else {
            callback({
                resp: 'TODO MAL!!!'
            });
        }*/

    });
});