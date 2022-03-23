import {Logar} from '../../../models/UsuárioModel';
const jwt = require('jsonwebtoken');

const SECRET = process.env.JWT_SECRET

export default async (req, res) => {
  var senha = req.body.senha;
  var usuário = req.body.usuário;
  var empresa_nome = req.body.empresa_nome;

  Logar(usuário, senha, empresa_nome).then(Usuário => {
    if(Usuário){
      res.statusCode = 202

      const token = jwt.sign({ id: Usuário.id }, SECRET, {
        expiresIn: 60 * 8
      });
  
      res.status(202).json({success: true, message: "Logado com sucesso", token, usuário: Usuário})
    }else{
      res.statusCode = 401
      res.json({isLogged: false})
    }
  }).catch(error => {
    res.status(500).json({success: false, message: "Erro ao logar", error})
  })
}