import Head from 'next/head'
import axios from 'axios'
import absoluteUrl from "next-absolute-url"

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

export const getServerSideProps = async (ctx) => {
  const { origin } = absoluteUrl(ctx.req, "localhost:3000");

  var response = await axios.post(origin + '/api/empresa')

  const empresa = response.data

  return {
    props: {
      empresa: empresa
    }
  }
}
