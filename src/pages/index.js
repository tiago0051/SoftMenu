import Head from 'next/head'
import FeatherIcons from 'feather-icons-react'

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

        <Categorias/>

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
  return {
    props: {
      empresa: {
        nomeEmpresa: "Máfia Burguer",
        descricao: "Hamburgueria Gurme",
        status: "ABERTO"
      }
    },
    revalidate: 60
  }
}
