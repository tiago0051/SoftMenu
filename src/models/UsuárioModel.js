const bcrypt = require('bcrypt');
import { ObjectId } from "mongodb";
import db from "../services/db"
import {getEmpresaById} from "./EmpresaModel";

export default class UsuárioModel{
    constructor(_id, UsuárioCliente, Empresa, EmailCliente, NomeCliente, TelCliente){
        this._id = _id
        this.UsuárioCliente = UsuárioCliente
        this.Empresa = Empresa
        this.Email = EmailCliente
        this.Nome = NomeCliente
        this.Tel = TelCliente

        this.getEmpresa = async () => {
            const Empresa = await getEmpresaById(this.Empresa)

            return Empresa
        }
    }
}

export async function Logar(identificação, senha){
    const DB = await db()

    const cliente = await DB.collection("usuario").findOne({UsuárioCliente: identificação})

    const {_id, SenhaCliente: SenhaClienteInDB, UsuárioCliente:  UsuárioClienteInDb, Empresa, EmailCliente, NomeCliente, TelCliente} = cliente

    if(SenhaClienteInDB && UsuárioClienteInDb && UsuárioClienteInDb == identificação){
        var result = await compareEncrypt(SenhaClienteInDB, senha)
    
        if(result){
            var {UsuárioCliente} = cliente
            return new UsuárioModel(_id, UsuárioCliente, Empresa, EmailCliente, NomeCliente, TelCliente)
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
        var {_id, UsuárioCliente, Empresa, EmailCliente, NomeCliente, TelCliente} = cliente
        return new UsuárioModel(_id, UsuárioCliente, Empresa, EmailCliente, NomeCliente, TelCliente)
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