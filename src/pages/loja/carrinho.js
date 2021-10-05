import React, {useState, useEffect} from "react"
import FeatherIcons from 'feather-icons-react'
import { useRouter } from "next/router"

import { CarrinhoStyled, Header, Produtos, Produto, Finalizar } from "../../styles/carrinho"

export default function Carrinho(props){
    const router = useRouter()

    const [Empresa, setEmpresa] = useState({})

    const [Carrinho, setCarrinho] = useState([])
    const [PreçoTotal, setPreçoTotal] = useState(0)

    useEffect(() => {
        setEmpresa(JSON.parse(window.localStorage.getItem("empresa")))

        var carrinho = JSON.parse(window.localStorage.getItem("carrinho"))

        if(!carrinho) carrinho = []

        setCarrinho(carrinho)
    }, [])

    useEffect(() => {
        var total = 0;

        Carrinho.forEach(item => {
            total += item.preço
        })

        setPreçoTotal(total)

        if(Carrinho.length == 0)
            router.push("/")
    }, [Carrinho])

    function removeItemCarrinho(event){
        var nomeItem;
        
        try {
            nomeItem = event.target.parentElement.children[0].children[0].textContent
        } catch {
            nomeItem = event.target.parentElement.parentElement.parentElement.children[0].children[0].textContent
        }
        
        var carrinho = []

        carrinho = JSON.parse(window.localStorage.getItem("carrinho"))

        if(!carrinho) carrinho = []

        var index = carrinho.findIndex((item) => item.nome == nomeItem)

        carrinho.splice(index, 1)

        window.localStorage.setItem("carrinho", JSON.stringify(carrinho))

        setCarrinho(carrinho)
    }

    return(
        <CarrinhoStyled>
            <Header>
                <FeatherIcons icon="chevron-left" onClick={() => router.back()}/>
                
                <div>
                    <h1>{Empresa.nome}</h1>
                    <p>{Empresa.descricao}</p>
                </div>
            </Header>

            <Produtos>
                <div id="title">
                    <FeatherIcons icon="shopping-cart"/>
                    <h2>Meu Carrinho ({Carrinho.length})</h2>
                </div>

                {
                    Carrinho.map(item => {
                        return(
                            <Produto>
                                <div id="informacoes">
                                    <h3>{item.nome}</h3>
                                    <p>{item.Variações.Nome}</p>
                                    <span>
                                        {
                                            item.preço.toLocaleString('pt-BR', {
                                                style: 'currency',
                                                currency: 'BRL',
                                            })
                                        }
                                    </span>
                                </div>
            
                                <FeatherIcons icon ="x" onClick={removeItemCarrinho}/>
                            </Produto>
                        )
                    })
                }
            </Produtos>

            <Finalizar>
                <input type="text" id="FormaEntrega" name="FormaEntrega" placeholder="Forma de Entrega : Delivery"/>

                <div id="pesquisarEndereco">
                    <input type="text" id="PesquisarEndereco" name="PesquisarEndereco" placeholder="Pesquisar Endereço"/>
                    <FeatherIcons icon="search"/>
                </div>

                <input type="text" id="FormaPagamento" name="FormaPagamento" placeholder="Forma de pagamento: Cartão de Débito"/>

                <div id="button">
                    <span>Total: {
                        PreçoTotal.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        })
                    
                    }</span>
                    <button>Finalizar</button>
                </div>
            </Finalizar>
        </CarrinhoStyled>
    )
}