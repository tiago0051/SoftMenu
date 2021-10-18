import { getUsuárioById } from '../../../models/UsuárioModel';

const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET

export default async (req, res) => {
  try{
    const token = req.body.token

    const decoded = await jwt.verify(token, SECRET)
    const idUsuário = decoded.idDB

    const Usuário = await getUsuárioById(idUsuário)

    const Empresa = await Usuário.getEmpresa()

    if(Usuário){
        res.json({isLogged: true, usuário: Usuário, empresa: Empresa})
    }else{
      res.json({isLogged: false})
    }
  }catch{
    res.json({isLogged: false})
  }
}