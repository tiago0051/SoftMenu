import db from "../../services/db"

export default async function handler(req, res) {
    var user = "mafia-burguer"
  
    if(req.headers.host == 'localhost:3000' || req.headers.host =='www.softmenus.com.br' || req.headers.host =='softmenus.com.br')
      user = "mafia-burguer"
  
    const DB = await db()
    const empresa = await DB.collection("empresas").findOne({user: user})
  
    res.status(200).json(req.body.produto ? empresa.produtos.find(produto => produto.nome == req.body.produto) : empresa.produtos)
  }