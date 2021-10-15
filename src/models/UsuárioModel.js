const bcrypt = require('bcrypt');
import { ObjectId } from "mongodb";
import db from "../services/db"

export default class UsuárioModel{
    constructor(_id, UsuárioCliente){
        this._id = _id
        this.UsuárioCliente = UsuárioCliente
    }
}

export async function Logar(identificação, senha){
    const DB = await db()

    const cliente = await DB.collection("usuario").findOne({UsuárioCliente: identificação})

    const {_id, SenhaCliente: SenhaClienteInDB, UsuárioCliente:  UsuárioClienteInDb} = cliente

    if(SenhaClienteInDB && UsuárioClienteInDb && UsuárioClienteInDb == identificação){
        var result = await compareEncrypt(SenhaClienteInDB, senha)
    
        if(result){
            var {UsuárioCliente} = cliente
            return new UsuárioModel(_id, UsuárioCliente)
        }else{
            return null
        }
      }else{
          return null
      }
}

export async function getUsuárioById(_id){
    const DB = await db()

    const cliente = await DB.collection("usuario").findOne({_id: ObjectId(_id)})

    if(cliente){
        var {UsuárioCliente, NomeCliente, TelCliente, EmailCliente, NomeEmpresa, IdServiço} = cliente
        return new UsuárioModel(_id, UsuárioCliente, NomeCliente, TelCliente, EmailCliente, NomeEmpresa, IdServiço)
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