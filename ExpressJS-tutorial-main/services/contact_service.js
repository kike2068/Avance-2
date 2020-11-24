const contact_infrastruture = require('../infrastructure/contact_infrastructure')

function obtenerContactoPorId(id) {
    if (id !== null) {
        return contact_infrastruture.obtenerContactoPorId(id);
    } else {
        return { error: 'No me dio un id para retornar' }
    }
}

module.exports = {
    obtenerContactoPorId
}
