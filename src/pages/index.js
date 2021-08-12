import Perfil from "../components/loja/perfil"
import Categorias from "../components/loja/categorias"
import Head from 'next/head'

export default function Home() {
  return (
    <div>

    <Head>
      <title>SoftMenu</title>
    </Head>

      <main>
        <header>
          <Perfil/>
        </header>

        <Categorias/>
      </main>
    </div>
  )
}
