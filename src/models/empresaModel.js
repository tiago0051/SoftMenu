import { Decimal128 } from 'mongodb';
import mongoose from 'mongoose'

var empresaSchema = new mongoose.Schema({ 
    user: {type: String, unique: true},
    nome: String,
    descricao: String,
    contato: String,
    tempoEspera: String,
    taxaEntrega: Decimal128,
    status: String,
    urls: JSON,
    produtos: JSON,
    categorias: JSON
})

module.exports =  mongoose.model('empresa', empresaSchema)