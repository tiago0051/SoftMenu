import Head from 'next/head'
import FeatherIcons from 'feather-icons-react'
import axios from 'axios'

import Perfil from "../components/loja/perfil"
import Categorias from "../components/loja/categorias"
import Produtos from '../components/loja/produtos'

import {InputPesquisar} from "../styles/comps"

export default function Home(props) {
  return (
    <div>

    <Head>
      <title>SoftMenu</title>
    </Head>

      <main>
        <header>
          <Perfil empresa={props.empresa}/>
        </header>

        <Categorias empresa={props.empresa}/>

        <InputPesquisar>
          <input placeholder="Pesquisar produto" type="text"/>
          <FeatherIcons icon="search"/>
        </InputPesquisar>

        <Produtos/>
      </main>
    </div>
  )
}

export const getStaticProps = async () => {
  var response
  response = await axios.post(process.env.LINK_API +'/empresa', {user: "mafia-burguer"})
  
  if(response == undefined){
    response = {data: {
      "user": "mafia-burguer",
      "nome": "Máfia Burguer",
      "descricao": "Hamburgueria Gurme",
      "status": "ABERTO",
      "urls": {
        "background": "https://softmenus.s3.sa-east-1.amazonaws.com/Empresas/Mafia+Burguer/background.jpeg",
        "avatar": "https://softmenus.s3.sa-east-1.amazonaws.com/Empresas/Mafia+Burguer/mafiaburguer.jpg"
      },
      "produtos": [
        {
          "nome": "Pizza Calabresa",
          "imageUrl": "https://softmenus.s3.sa-east-1.amazonaws.com/Empresas/Mafia+Burguer/pizza.jpeg"
        }
      ],
      "__v": 0,
      "categorias": [
        {
          "nome": "bebidas",
          "imagemUrl": "https://softmenus.s3.sa-east-1.amazonaws.com/Empresas/Mafia+Burguer/bebidas.jpeg"
        }
      ],
      "contato": "+55 (21) 99109-0212",
      "taxaEntrega": {
        "$numberDecimal": "5.50"
      },
      "tempoEspera": "40 min - 60 min"
    }}
  }

  const empresa = response.data

  return {
    props: {
      empresa: empresa
    },
    revalidate: 60
  }
}
