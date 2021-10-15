import { getUsuárioById } from '../../../models/UsuárioModel';

const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET

let connection
let db

export default async (req, res) => {
  try{
    const token = req.body.token

    const decoded = await jwt.verify(token, SECRET)
    const idUsuário = decoded.idDB

    const Usuário = getUsuárioById(idUsuário)

    if(Usuário){
        res.json({isLogged: true, usuário: Usuário})
    }else{
      res.json({isLogged: false})
    }
  }catch{
    res.json({isLogged: false})
  }
}