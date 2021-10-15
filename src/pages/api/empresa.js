import db from "../../services/db";

export default async function handler(req, res) {
  var user = ""

  if(req.headers.host == 'localhost:3000' || req.headers.host =='www.softmenus.com.br' || req.headers.host =='softmenus.com.br')
    user = "rocks"

  if(req.headers.host == 'rocks.softmenus.com.br')
    user = "rocks"

  const DB = await db()
  const empresa = await DB.collection("empresas").findOne({user: user})

  res.status(200).json(empresa)
}
