const bcrypt = require('bcrypt');
import db from "../services/db"
import {getEmpresaById} from "./EmpresaModel";

export default class UsuárioModel{
    constructor(id, email, nome, telefone){
        this.id = id
        this.email = email
        this.nome = nome
        this.telefone = telefone

        this.getEmpresa = async () => {
            const Empresa = await getEmpresaById(this.Empresa)

            return Empresa
        }
    }
}

export async function Logar(identificação, senha, empresa_nome){
    const DB = await db()

    return new Promise((resolve, reject) => {
        const query = `SELECT usuarios.* FROM usuarios INNER JOIN empresa_possui_usuario ON usuarios.id_usuario = empresa_possui_usuario.id_usuario INNER JOIN empresas ON empresas.id_empresa = empresa_possui_usuario.id_empresa WHERE email = '${identificação}' AND empresas.url = '${empresa_nome}';`

        DB.query(query, async (error, results, fields) => {
            if(error) reject(error)
    
            if(results.length == 0){
                reject(null)
            } else {
                const usuário = results[0]
    
                compareEncrypt(usuário.senha, senha).then(resultado_comparação_senha => {
                    if(resultado_comparação_senha){
                        resolve(new UsuárioModel(usuário.id_usuario, usuário.email, usuário.nome, usuário.tel))
                    }else resolve(null)
                })
            }
        })
    })
}

export async function getUsuárioById(id){
    const DB = await db()

    return new Promise((resolve, reject) => {
        const query = `SELECT * FROM usuarios WHERE id_usuario = ${id}`

        DB.query(query, (error, results, fields) => {
            if(error) {
                reject(error)
                return
            }else{
                if(results){
                    if(results.length == 0){
                        reject(null)
                    } else {
                        const usuário = results[0]
        
                        resolve(new UsuárioModel(usuário.id_usuario, usuário.email, usuário.nome, usuário.tel))
                    }
                }else{
                    reject(new Error("Nenhum resultado encontrado"))
                }
            }
        })
    })
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