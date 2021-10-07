import React, {useState, useEffect} from "react"
import FeatherIcons from 'feather-icons-react'
import { useRouter } from "next/router"
import Autocomplete from "react-google-autocomplete";

import { CarrinhoStyled, Header, Produtos, Produto, Finalizar } from "../../styles/carrinho"

export default function Carrinho(props){
    const router = useRouter()

    const [Empresa, setEmpresa] = useState({})

    const [Carrinho, setCarrinho] = useState([])
    const [PreçoTotal, setPreçoTotal] = useState(0)

    const [FormaPagamento, setFormaPagamento] = useState("Dinheiro")
    const [Endereço, setEndereço] = useState({})
    const [FormaEntrega, setFormaEntrega] = useState("Entrega")
    const [ComplementoEndereço, setComplementoEndereço] = useState("")

    useEffect(() => {
        setEmpresa(JSON.parse(window.localStorage.getItem("empresa")))

        var carrinho = JSON.parse(window.localStorage.getItem("carrinho"))

        if(!carrinho) carrinho = []

        if(carrinho.length == 0){
            router.push("/")
        }else{
            setCarrinho(carrinho)
        }
    }, [])

    useEffect(() => {
        var total = 0;

        Carrinho.forEach(item => {
            total += item.preço
        })

        setPreçoTotal(total)
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

    function enviarMensagem(){
        var mensagem = ""
        
        mensagem += "SoftMenus" + finalizarLinha()

        mensagem += "-" + finalizarLinha()
        
        mensagem += "Items:" + finalizarLinha()

        mensagem += "-" + finalizarLinha()

        Carrinho.map(item => {
            mensagem += item.nome.toUpperCase() + finalizarLinha()

            mensagem += item.preço.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
            }) + finalizarLinha()

            mensagem += "-" + finalizarLinha()

            mensagem += item.Variações.Nome + finalizarLinha()

            mensagem += "-" + finalizarLinha()
        })

        mensagem += "Total: " + PreçoTotal.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
        }) + finalizarLinha()

        mensagem += "-" + finalizarLinha()

        mensagem += "Endereço: " + Endereço.formatted_address + finalizarLinha()

        mensagem += "Complemento do Endereço: " + ComplementoEndereço + finalizarLinha()

        mensagem += "-" + finalizarLinha()

        mensagem += "Forma de Pagamento: " + FormaPagamento + finalizarLinha()

        mensagem += "-" + finalizarLinha()

        mensagem += "Forma de entrega: " + FormaEntrega + finalizarLinha()

        router.push("whatsapp://send/?phone=+55021974481023&text=" + mensagem)

        window.localStorage.removeItem("carrinho")

        router.push("/")
    }

    function finalizarLinha(){
        var mensagem = ""
        for(var i = 0; i < 100; i++)mensagem += "%20"

        return mensagem
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

            <Finalizar>
                <div id="formaEntrega">
                    <label htmlFor="FormaEntrega" onChange={(event) => setFormaEntrega(event.target.value)}>Forma de Entrega : Delivery</label>

                    <select name="FormaEntrega" id="FormaEntrega">
                        <option value="entrega">Entrega</option>
                        <option value="retirar">Retirar</option>
                    </select>
                </div>


                <label>Endereço de Entrega</label>
                <Autocomplete
                apiKey={"AIzaSyA8g0yxm_HcAIJ9hDIy9pZiRhGUqxrmmNc"}
                onPlaceSelected={(place) => {
                    setEndereço(place)
                }}
                options={{
                    types: ["geocode", "establishment"],
                    componentRestrictions: { country: "br" },
                }}
                />

                <label htmlFor="Complemento">Complemento do Endereço</label>
                <input name="Complemento" type="text" onChange={(event) => {console.log(event.target.value); setComplementoEndereço(event.target.value);}} />

                <label htmlFor="FormaPagamento">Forma de Pagamento</label>
                <select name="FormaPagamento" id="FormaPagamento" onChange={(event) => setFormaPagamento(event.target.value)}>
                    <option value="Dinheiro">Dinheiro</option>
                    <option value="Cartão de Debito">Cartão de Debito</option>
                    <option value="Cartão de Credito">Cartão de Credito</option>
                    <option value="Pix">Pix</option>
                </select>

                <div id="button">
                    <span>Total: {
                        PreçoTotal.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        })
                    
                    }</span>
                    <button onClick={enviarMensagem}>Finalizar</button>
                </div>
            </Finalizar>

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
        </CarrinhoStyled>
    )
}