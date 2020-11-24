const connectionConfig = {
    host: "localhost",
    user: "root",
    password: "root",
    database: "contacts",
};

const selectTodosContactos = `SELECT * FROM contacts`;

const selectContactoPorId = 'SELECT * FROM contacts where ID = {0}';

const incluirContactos = `INSERT INTO contacts (name,last,phone,email,isActive) VALUES ('{0}','{1}','{2}','{3}',{4})`;

const actualizarContactos = `UPDATE contacts  SET name = '{1}', last = '{2}', phone = '{3}', email = '{4}', isActive = {5} WHERE id = {0}`;

const deleteTodosContactos = `DELETE FROM contacts`;

const deleteContactoPorId = `DELETE FROM contacts where id = {0}`;

module.exports = {
    connectionConfig,
    selectTodosContactos,
    selectContactoPorId,
    incluirContactos,
    actualizarContactos,
    deleteTodosContactos, 
    deleteContactoPorId
}