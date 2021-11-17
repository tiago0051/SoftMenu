const bcrypt = require('bcrypt');
import { ObjectId } from "mongodb";
import db from "../services/db"

export default class EmpresaModel{
    constructor(_id, user, nome, descricao, urls, produtos, categorias, contato, taxaEntrega, tempoEspera){
        this._id = _id
        this.user = user
        this.nome = nome
        this.descricao = descricao
        this.urls = urls
        this.produtos = produtos
        this.categorias = categorias
        this.contato = contato
        this.taxaEntrega = taxaEntrega
        this.tempoEspera = tempoEspera

        this.save = () => {
            return db.collection('empresas').updateOne({_id: ObjectId(this._id)}, {$set: this})
        }
    }
}

export async function getEmpresaById(_id){
    const DB = await db()

    const empresa = await DB.collection("empresas").findOne({_id: ObjectId(_id)})

    if(empresa){
        const {_id, user, nome, descricao, urls, produtos, categorias, contato, taxaEntrega, tempoEspera} = empresa
        return new EmpresaModel(_id, user, nome, descricao, urls, produtos, categorias, contato, taxaEntrega, tempoEspera)
    }else{
        return null
    }
}

export async function getEmpresaByUser(user){
    const DB = await db()

    const empresa = await DB.collection("empresas").findOne({user: user})

    if(empresa){
        const {_id, user, nome, descricao, urls, produtos, categorias, contato, taxaEntrega, tempoEspera} = empresa
        return new EmpresaModel(_id, user, nome, descricao, urls, produtos, categorias, contato, taxaEntrega, tempoEspera)
    }else{
        return null
    }
}

async function Encrypt(pass){
    var salt = await bcrypt.genSalt(10)
    var encrypted = await bcrypt.hash(pass, salt)
    return encrypted;
}
  
async function compareEncrypt(passEncrypted, pass){
    var result = await bcrypt.compare(pass, passEncrypted);
    return result
}