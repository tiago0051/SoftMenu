import { MongoClient } from 'mongodb';

var db;
var connection

export default async function handler(req, res) {
  var user = "mafia-burguer"

  if(req.headers.host == 'localhost:3000' || req.headers.host =='www.softmenus.com.br' || req.headers.host =='softmenus.com.br')
    user = "mafia-burguer"

    if(!db || !connection){
      connection = await MongoClient.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})

      db = await connection.db("Main");
    }

  const empresa = await db.collection("empresas").findOne({user: user})

  res.status(200).json(empresa)
}
