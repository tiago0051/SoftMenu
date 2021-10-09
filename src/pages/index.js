import Head from 'next/head'
import axios from 'axios'

import Perfil from "../components/loja/perfil"
import Categorias from "../components/loja/categorias"
import Produtos from '../components/loja/produtos'
import Carrinho from '../components/loja/carrinho'
import { useEffect } from 'react'

export default function Home(props) {

  useEffect(() => {
    //console.log(props.empresa)
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

export const getServerSideProps = async (ctx) => {
  var response = await axios.post(ctx.req.headers.referer + '/api/empresa')

  const empresa = response.data

  return {
    props: {
      empresa: empresa
    }
  }
}
