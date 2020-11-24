var mysql = require("mysql");
const db = require("mysql-async-simple").makeDb();
const config = require('../configuration/db');
const stringInject = require('stringinject');

async function obtenerContactos() {
  let resultado;
  var connection = mysql.createConnection(config.connectionConfig);
  await db.connect(connection);
  try {
    resultado = await db.query(connection, config.selectTodosContactos);
  } catch (err) {
    //console.log(err)
  } finally {
    await db.close(connection);
    return JSON.stringify(resultado);
  }
}

async function obtenerContactoPorId(id) {
  let resultado;
  var connection = mysql.createConnection(config.connectionConfig);
  await db.connect(connection);
  try {
    resultado = await db.query(connection, (id)? stringInject.default(config.selectContactoPorId, [id]):config.selectTodosContactos);
  } catch (err) {
    //console.log(err)
  } finally {
    await db.close(connection);
    return JSON.stringify(resultado);
  }
}

async function incluirContactos(id,name,last,phone,email,isActive,timestamp) {
  let resultado;
  console.log(name,last,phone,email,isActive,timestamp);
  var connection = mysql.createConnection(config.connectionConfig);
  try {
    await db.connect(connection);
    // se imprime
    console.log(stringInject.default(config.incluirContactos, [name, last, phone, email, isActive, timestamp]));
    resultado = db.query(connection, stringInject.default(config.incluirContactos, [name, last, phone, email, isActive, timestamp]));
  } catch (err) {
    console.log(err)
  } finally {
    db.commit(connection);
    db.close(connection);
    return JSON.stringify(resultado);
  }
}

async function actualizarContactos(id,name,last,phone,email,isActive,timestamp) {
  let resultado;
  var connection = mysql.createConnection(config.connectionConfig);
  try {
    await db.connect(connection);
    console.log(stringInject.default(config.actualizarContactos, [id,name, last, phone, email, isActive, timestamp]));
    resultado  = db.query(connection,stringInject.default(config.actualizarContactos,[id,name,last,phone,email,isActive]));
  } catch (err) {
    console.log(err)
  } finally {
    db.commit(connection);
    db.close(connection);
    return JSON.stringify(resultado);
  }
}

async function borrarContactoPorId(id) {
  let resultado;
  var connection = mysql.createConnection(config.connectionConfig);
  await db.connect(connection);
  try {
    console.log(config.deleteContactoPorId);
    resultado = await db.query(connection, stringInject.default(config.deleteContactoPorId, [id]));
  } catch (err) {
    console.log(err);
  } finally {
    await db.commit(connection);
    await db.close(connection);
    return JSON.stringify(resultado);
  }
}

async function borrarContactos() {
  let resultado;
  var connection = mysql.createConnection(config.connectionConfig);
  await db.connect(connection);
  try {
    resultado = await db.query(connection, config.deleteTodosContactos);
  } catch (err) {
    console.log(err)
  } finally {
    await db.commit(connection);
    await db.close(connection);
    return JSON.stringify(resultado);
  }
}

module.exports = {
  obtenerContactos,
  obtenerContactoPorId,
  incluirContactos,
  actualizarContactos,
  borrarContactoPorId,
  borrarContactos
};
