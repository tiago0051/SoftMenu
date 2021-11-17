import nc from 'next-connect'
import upload from '../../../../Utils/upload'
import {getEmpresaByUser} from '../../../models/EmpresaModel';

const handler = nc()
    .use(upload.array('files', 2))
    .post((req, res) => {
        const {token, userEmpresa, nome, descrição, contato, taxaEntrega, tempoEntrega} = req.body

        try{
            JSON.parse(token)

            if(!userEmpresa)
                throw new Error('userEmpresa não informado')

            if(!nome)
                throw new Error('nome não informado')
            
            if(!descrição)
                throw new Error('descrição não informado')

            if(!contato)
                throw new Error('contato não informado')

            if(!taxaEntrega)
                throw new Error('taxaEntrega não informado')

            if(!tempoEntrega)
                throw new Error('tempoEntrega não informado')

            const empresa = getEmpresaByUser(userEmpresa)

            empresa.nome = nome
            empresa.descricao = descrição
            empresa.contato = contato
            empresa.taxaEntrega = taxaEntrega
            empresa.tempoEntrega = tempoEntrega

            empresa.urls.avatar = req.files[0].location
            empresa.urls.background = req.files[1].location
            
            res.json({
                empresa: empresa
            })
        }catch (ex){
            return res.json({
                error: ex.message
            })
        }
    })
    .patch(async (req, res) => {
        throw new Error("Throws me around! Error can be caught and handled.");
      });

export const config = {
    api: {
        bodyParser: false
    }
}

export default handler;