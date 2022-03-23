import Head from 'next/head'
import axios from 'axios'
import absoluteUrl from "next-absolute-url"

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
      <title>SoftMenu</title>
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

const url = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"

export const getStaticProps = async (ctx) => {
  const empresa_nome = ctx.params.empresa_nome

  const response_produtos = await axios.post(`${url}/api/produtos`, {empresa_nome})
  const response_empresa = await axios.post(`${url}/api/empresa`, {empresa_nome})

  return {
    props: {
      produtos: response_produtos.data.produtos,
      empresa: response_empresa.data.empresa
    }
  }
}

export const getStaticPaths = async () => {
  const response = await axios.get(`${url}/api/empresa`)

  const paths = response.data.map(empresa => ({params: {empresa_nome: empresa.url}}))
  
  return {
    paths: paths,
    fallback: false
  }
}
