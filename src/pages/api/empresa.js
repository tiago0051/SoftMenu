import { getEmpresaByUrl, getEmpresas } from "../../models/EmpresaModel";

export default async function handler(req, res) {
  const empresa_nome = req.body.empresa_nome;

  if(!empresa_nome){
    const empresas = await getEmpresas()
    res.status(200).json(empresas)
    return
  }

  const empresa = await getEmpresaByUrl(empresa_nome)

  res.status(200).json({empresa})
}
