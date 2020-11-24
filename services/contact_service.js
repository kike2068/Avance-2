const contact_infrastruture = require('../infrastructure/contact_infrastructure')

function obtenerContactos() {
    return contact_infrastruture.obtenerContactos();
}

function obtenerContactoPorId(id) {
    if (id !== null) {
        return contact_infrastruture.obtenerContactoPorId(id);
    } else {
        return { error: 'No me dio un id para retornar' }
    }
}

  function incluirContactos(id,name,last,phone,email,isActive,timestamp) {
    if (id !== null) {
        return contact_infrastruture.incluirContactos(id,name,last,phone,email,isActive,timestamp);
    } else {
        return { error: 'No me dio un registro para procesar' }
    }
}

function actualizarContactos(id,name,last,phone,email,isActive,timestamp) {
    if (id !== null) {
    return contact_infrastruture.actualizarContactos(id,name,last,phone,email,isActive,timestamp);
    } else {
            return { error: 'No me dio informacion para actualizar' }
        }
    }

  function borrarContactoPorId(id) {
    if (id !== null) {
        return contact_infrastruture.borrarContactoPorId(id);
    } else {
        return { error: 'No me dio un id para borrar' }
    }
}

function borrarContactos() {
    return contact_infrastruture.borrarContactos();
}

module.exports = {
    obtenerContactoPorId,
    obtenerContactos,
    incluirContactos,
    actualizarContactos,
    borrarContactoPorId,
    borrarContactos
}


