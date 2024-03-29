import Head from 'next/head'
import axios from 'axios'

import Perfil from "../../components/loja/perfil"
import Categorias from "../../components/loja/categorias"
import Produtos from '../../components/loja/produtos'
import Carrinho from '../../components/loja/carrinho'
import { useEffect } from 'react'

export default function Home(props) {

  useEffect(() => {
    window.localStorage.setItem("empresa", JSON.stringify(props.empresa))
  }, [])

  return (
    <div>

    <Head>
      <title>{props.empresa.nome}</title>
    </Head>

      <main>
        <header>
          <Perfil empresa={props.empresa}/>
        </header>

        <Categorias empresa={props.produtos}/>

        <Produtos empresa={props.produtos}/>

        <Carrinho/>
      </main>
    </div>
  )
}

const url = process.env.NEXT_PUBLIC_VERCEL_URL ? `https://soft-menu.vercel.app` : "http://localhost:3000"

export const getStaticProps = async (ctx) => {
  const empresa_nome = ctx.params.empresa_nome

  const response_produtos = await axios.post(`${url}/api/produtos`, {empresa_nome})
  const response_empresa = await axios.post(`${url}/api/empresa`, {empresa_nome})

  return {
    props: {
      produtos: response_produtos.data.produtos,
      empresa: response_empresa.data.empresa
    },
    revalidate: 60*10
  }
}

export const getStaticPaths = async () => {
  console.log(url)
  const response = await axios.get(`${url}/api/empresa`)
  var paths = []

  paths = response.data.map(empresa => ({params: {empresa_nome: empresa.url}}))
  
  return {
    paths: paths,
    fallback: false
  }
}
