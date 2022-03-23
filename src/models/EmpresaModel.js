const bcrypt = require('bcrypt');
import db from "../services/db"

export default class EmpresaModel{
    constructor(_id, user, nome, descricao, status, urls, produtos, categorias, contato, taxaEntrega, tempoEspera, endereço){
        this._id = _id
        this.user = user
        this.nome = nome
        this.descricao = descricao
        this.status = status
        this.urls = urls
        this.produtos = produtos
        this.categorias = categorias
        this.contato = contato
        this.taxaEntrega = taxaEntrega
        this.tempoEspera = tempoEspera
        this.endereço = endereço
    }
}

export async function getEmpresaByUrl(empresa_nome){
    const DB = await db()

    return new Promise((resolve, reject) => {
        DB.query(`SELECT * FROM empresas WHERE url='${empresa_nome}'`, (err, result) => {
            if(err) reject(err)
            else resolve(result[0])
        })
    })
}

export async function getProdutosEmpresaByUrl(empresa_nome){
    const DB = await db()

    return new Promise((resolve, reject) => {
        DB.query(`SELECT produtos.* FROM produtos INNER JOIN empresas ON produtos.id_empresa = empresas.id_empresa WHERE url = '${empresa_nome}'`, (err, result) => {
            if(err) reject(err)
            else resolve(result)
        })
    })
}

export async function getEmpresas(){
    const DB = await db()

    return new Promise((resolve, reject) => {
        DB.query(`SELECT * FROM empresas`, (err, result) => {
            if(err) reject(err)
            else resolve(result)
        })
    })
}

export async function getEmpresaById(_id){
    const DB = await db()

    const empresa = await DB.collection("empresas").findOne({_id: ObjectId(_id)})

    if(empresa){
        const {_id, user, nome, descricao, status, urls, produtos, categorias, contato, taxaEntrega, tempoEspera, endereço} = empresa
        return new EmpresaModel(_id, user, nome, descricao, status, urls, produtos, categorias, contato, taxaEntrega, tempoEspera, endereço)
    }else{
        return null
    }
}

export async function getEmpresaByUser(user){
    const DB = await db()

    const empresa = await DB.collection("empresas").findOne({user: user})

    if(empresa){
        const {_id, user, nome, descricao, status, urls, produtos, categorias, contato, taxaEntrega, tempoEspera, endereço} = empresa
        return new EmpresaModel(_id, user, nome, descricao, status, urls, produtos, categorias, contato, taxaEntrega, tempoEspera, endereço)
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