import React, {useState} from "react"
import FeatherIcons from 'feather-icons-react'

import { CarrinhoStyled, Header, Produtos, Produto, Finalizar } from "../../styles/carrinho"

export default function Carrinho(props){

    const [quantidade, setQuantidade] = useState(0)

    return(
        <CarrinhoStyled>
            <Header>
                <FeatherIcons icon="chevron-left"/>
                
                <div>
                    <h1>{props.empresa.nome}</h1>
                    <p>{props.empresa.descricao}</p>
                </div>
            </Header>

            <Produtos>
                <div id="title">
                    <FeatherIcons icon="shopping-cart"/>
                    <h2>Meu Carrinho ({quantidade})</h2>
                </div>
                
                <Produto>
                    <div id="informacoes">
                        <h3>Pizza Calabresa</h3>
                        <p>Tamanho grande</p>
                        <span>R$ 38,50</span>
                    </div>

                    <img src="https://softmenus.s3.sa-east-1.amazonaws.com/Empresas/pizza.jpeg"/>
                </Produto>

                <Produto>
                    <div id="informacoes">
                        <h3>Pizza Calabresa</h3>
                        <p>Tamanho grande</p>
                        <span>R$ 38,50</span>
                    </div>

                    <img src="https://softmenus.s3.sa-east-1.amazonaws.com/Empresas/pizza.jpeg"/>
                </Produto>
            </Produtos>

            <Finalizar>
                <input type="text" id="FormaEntrega" name="FormaEntrega" placeholder="Forma de Entrega : Delivery"/>

                <div id="pesquisarEndereco">
                    <input type="text" id="PesquisarEndereco" name="PesquisarEndereco" placeholder="Pesquisar Endereço"/>
                    <FeatherIcons icon="search"/>
                </div>

                <input type="text" id="FormaPagamento" name="FormaPagamento" placeholder="Forma de pagamento: Cartão de Débito"/>

                <div id="button">
                    <span>Total: R$ 70,50</span>
                    <button>Finalizar</button>
                </div>
            </Finalizar>
        </CarrinhoStyled>
    )
}

export const getStaticProps = async () => {
    return {
      props: {
        empresa: {
          nome: "Máfia Burguer",
          descricao: "Hamburgueria Gurme",
          status: "ABERTO",
          urls: {
            background: "https://softmenus.s3.sa-east-1.amazonaws.com/Empresas/background.jpeg",
            avatar: "https://softmenus.s3.sa-east-1.amazonaws.com/Empresas/mafiaburguer.jpg"
          },
          produtos: {
            nome: "Pizza Calabresa",
            imagem: ""
          }
        }
      },
      revalidate: 60
    }
  }