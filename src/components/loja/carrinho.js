import { useEffect, useState } from 'react'
import {CarrinhoComponent} from  '../../styles/comps'
import FeatherIcons from 'feather-icons-react'
import Router from 'next/router'

export default function Carrinho(){

    const [ShowCarrinho, setShowCarrinho] = useState(false)
    const [Carrinho, setCarrinho] = useState([])
    const [PreçoTotal, setPreçoTotal] = useState(0)

    useEffect(() => {
        var carrinho = JSON.parse(window.localStorage.getItem("carrinho"))

        if(!carrinho) carrinho = []

        setShowCarrinho(carrinho.length > 0)
        setCarrinho(carrinho)
    }, [])

    useEffect(() => {
        var total = 0;

        Carrinho.forEach(item => {
            total += item.preço
        })

        setPreçoTotal(total)
    }, [Carrinho])

    return(
        <>
            {
                ShowCarrinho ? 
                (
                    <CarrinhoComponent Quantidade={Carrinho.length} onClick={() => Router.push("/loja/carrinho")}>
                        <span>Total: {
                                PreçoTotal.toLocaleString('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                })
                            }
                        </span>
                        <div><FeatherIcons icon="shopping-cart"/></div>
                    </CarrinhoComponent>
                ) :
                (
                    <></>
                )
            }
        </>
    )
}