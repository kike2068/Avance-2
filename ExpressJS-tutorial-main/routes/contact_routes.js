var miRouter = require('express').Router()
var contact_service = require('../services/contact_service');
const miMiddleware = require('../middleware/logger');

miRouter.get('/', (req, res) => {
    res.send('Lista de contactos')
});

miRouter.get('/:id', async (req, res) => {
    var id = req.param('id')
    resultado = await contact_service.obtenerContactoPorId(id);
    res.send(resultado);
});

miRouter.post('/:id', miMiddleware.auth, async (req, res) => {
    // TODO: logica para el POST
    res.send(true);
});

miRouter.put('/:id', miMiddleware.auth, async (req, res) => {
    // TODO: logica para el POST
    res.send(true);
});

miRouter.delete('/:id', miMiddleware.auth, async (req, res) => {
    // TODO: logica para el POST
    res.send(true);
});

module.exports = miRouter
