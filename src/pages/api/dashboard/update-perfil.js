import nc from 'next-connect'
import upload from '../../../../Utils/upload'
import {getEmpresaByUser} from '../../../models/EmpresaModel';
import aws from 'aws-sdk';
import jwt from 'jsonwebtoken';

const handler = nc()
    .use(upload.array('file', 2))
    .post(async (req, res) => {
        const {token, userEmpresa, nome, descrição, contato, taxaEntrega, tempoEntrega} = req.body

        try{
            
            jwt.verify(token, process.env.JWT_SECRET)

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

            const empresa = await getEmpresaByUser(userEmpresa)

            empresa.nome = nome
            empresa.descricao = descrição
            empresa.contato = contato
            empresa.taxaEntrega = taxaEntrega
            empresa.tempoEntrega = tempoEntrega

            var s3 = new aws.S3()

            req.files.map(file => {
                var fileName = file.originalname.split('.')[0]
                
                if(fileName == "avatar"){
                    if(fileName == "avatar"){
                        const params = {
                                Bucket: process.env.AWS_BUCKET,
                                Key: empresa.urls.avatar.replace('https://softmenus.s3.sa-east-1.amazonaws.com/', '')
                        }
                        s3.deleteObject(params).promise()
                        empresa.urls.avatar = file.location
                    }
                }
            })

            empresa.save()

            res.json({
                salvo: true
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