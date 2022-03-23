import { getProdutosEmpresaByUrl } from "../../models/EmpresaModel";

export default (req, res) => {
    const empresa_nome = req.body.empresa_nome;

    if(!empresa_nome){
        res.status(400).json({success: false, message: "Empresa não informada"})
        return
    }

    getProdutosEmpresaByUrl(empresa_nome).then(produtos => {
        res.json({success: true, produtos})
    })
}