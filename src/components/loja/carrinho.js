import { useEffect, useState } from 'react'
import {CarrinhoComponent} from  '../../styles/comps'
import FeatherIcons from 'feather-icons-react'

export default function Carrinho(){

    const [ShowCarrinho, setShowCarrinho] = useState(false)
    const [Carrinho, setCarrinho] = useState([])

    useEffect(() => {
        var carrinho = JSON.parse(window.localStorage.getItem("carrinho"))

        if(!carrinho) carrinho = []

        setShowCarrinho(carrinho.length > 0)
        setCarrinho(carrinho)
    }, [])

    return(
        <>
            {
                ShowCarrinho ? 
                (
                    <CarrinhoComponent Quantidade={Carrinho.length}>
                        <span>Total: R$ 0,00</span>
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