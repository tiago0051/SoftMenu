import Head from 'next/head'
import FeatherIcons from 'feather-icons-react'
import axios from 'axios'
import Router from 'next/router'

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

export const getStaticProps = async (ctx) => {
  var response = await axios.post(process.env.LINK_API +'/empresa')

  const empresa = response.data

  return {
    props: {
      empresa: empresa
    },
    revalidate: 60
  }
}
