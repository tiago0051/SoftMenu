import { MongoClient } from 'mongodb';

var db;

export default async function handler(req, res) {
  var user

  if(req.headers.host == 'localhost:3000' || req.headers.host =='softmenus.com.br')
    user = "mafia-burguer"

  var teste = await MongoClient.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})

  const db = await teste.db("Main");

  const empresa = await db.collection("empresas").findOne({user: user})

  res.status(200).json(empresa)
}
