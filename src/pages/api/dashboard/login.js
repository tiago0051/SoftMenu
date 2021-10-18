import {Logar} from '../../../models/UsuárioModel';
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET

export default async (req, res) => {
  var senha = req.body.senha;
  var usuário = req.body.usuário;

  var Usuário = await Logar(usuário, senha)

  if(Usuário){
    res.statusCode = 202

    const token = jwt.sign({ idDB: Usuário._id }, SECRET, {
      expiresIn: 60 * 8 // expires in 5min
    });

    const Empresa = await Usuário.getEmpresa()

    res.json({isLogged: true, token, usuário: Usuário, empresa: Empresa})
  }else{
    res.statusCode = 401
    res.json({isLogged: false})
  }
}