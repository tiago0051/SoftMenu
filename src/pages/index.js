import Head from 'next/head'
import axios from 'axios'

import Perfil from "../components/loja/perfil"
import Categorias from "../components/loja/categorias"
import Produtos from '../components/loja/produtos'
import Carrinho from '../components/loja/carrinho'
import { useEffect } from 'react'

export default function Home(props) {

  useEffect(() => {
    window.localStorage.setItem("empresa", JSON.stringify(props.empresa))
  }, [])

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

        <Carrinho/>
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
    }
  }
}
