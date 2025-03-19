/**
 * processo principal
 * banco de dados para os (ordem de serviço)
 * @autor: Nicoli Santos
 */

// importação do modulo de conexão

//const {console} = require('console')

const {conectar, desconectar} = require('./database')

// importação 
const clientemodel=require('./src/models/os.js')