import { getEmpresaByUrl } from "../../../models/EmpresaModel"

export default async function empresaInformation(req, res){
    const empresa_nome = req.body.empresa_nome

    if(!empresa_nome){
        res.status(400).send('Empresa não informada')
        return
    }

    const empresa = await getEmpresaByUrl(empresa_nome);
    
    res.status(200).json({empresa})
}