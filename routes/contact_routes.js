var miRouter = require('express').Router()
var contact_service = require('../services/contact_service');
const miMiddleware = require('../middleware/logger');

miRouter.get('/', async (req, res) => {
    //res.send('Lista de contactos')
    resultado = await contact_service.obtenerContactos();
    res.send(resultado);
});

miRouter.get('/:id', async (req, res) => {
    var id = req.param('id')
    resultado = await contact_service.obtenerContactoPorId(id);
    res.send(resultado);
});

miRouter.post('/', async (req, res) => {
    // TODO: logica para el POST (INSERT)
    var id = req.body['id']
    var name = req.body['name']
    var last = req.body['last']
    var phone = req.body['phone']
    var email = req.body['email']
    var isActive = req.body['isActive']
    var timestamp = req.body['timestamp']
    try {
        resultado = await contact_service.incluirContactos(id,name,last,phone,email,isActive,timestamp);
        res.send(resultado); 
    } catch (error) {
        console.log(error);
    }
     
});

miRouter.post('/', async (req, res) => {
    // TODO: logica para el POST (INSERT)
    var id = req.body['id']
    var name = req.body['name']
    var last = req.body['last']
    var phone = req.body['phone']
    var email = req.body['email']
    var isActive = req.body['isActive']
    var timestamp = req.body['timestamp']
    try {
        resultado = await contact_service.incluirContactos(id,name,last,phone,email,isActive,timestamp);
        res.send(resultado); 
    } catch (error) {
        console.log(error);
    }
     
});

miRouter.put('/', async (req, res) => {
    // TODO: logica para el PUT (UPDATE)
    var id = req.body['id']
    var name = req.body['name']
    var last = req.body['last']
    var phone = req.body['phone']
    var email = req.body['email']
    var isActive = req.body['isActive']
    var timestamp = req.body['timestamp']
    try {
        resultado = await contact_service.actualizarContactos(id,name,last,phone,email,isActive,timestamp);
        res.send(resultado);  
    } catch (error) {
        console.log(error);
    }    

});

miRouter.delete('/:id', miMiddleware.auth, async (req, res) => {
    // TODO: logica para el DELETE
    var id = req.params.id
    resultado = await contact_service.borrarContactoPorId(id).then(
        res.send(this)
    );
    
});

miRouter.delete('/', async (req, res) => {
    // TODO: logica para el DELETE
    resultado = await contact_service.borrarContactos();
    res.send(true);

});

module.exports = miRouter
