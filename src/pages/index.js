import Head from 'next/head'
import FeatherIcons from 'feather-icons-react'
import axios from 'axios'
import Router from 'next/router'

import Perfil from "../components/loja/perfil"
import Categorias from "../components/loja/categorias"
import Produtos from '../components/loja/produtos'

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

        <Produtos empresa={props.empresa}/>
      </main>
    </div>
  )
}

export const getStaticProps = async (ctx) => {
  var response = await axios.post(process.env.LINK_API +'/empresa', {user: "mafia-burguer"})

  const empresa = response.data

  return {
    props: {
      empresa: empresa
    },
    revalidate: 60
  }
}
