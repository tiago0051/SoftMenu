import React, { useEffect, useState } from "react"

import { BebidasStyled, Bebida } from "../../styles/comps"

export default function Bebidas(props){
    const [Bebidas, setBebidas] = useState([])

    useEffect(() => {
        var items = props.empresa.produtos.find(produto => produto.categoria == "Bebidas")
        if(typeof items == Array){
            setBebidas(items)
        }else{
            setBebidas([items])
        }
    },[])

    function listarBebidas(){
        const list = Bebidas.map(bebida => (
            <Bebida>
            <div id="informacoes">
                <h3>{bebida.nome}</h3>
                
                <span>
                    {
                        bebida.preço.toLocaleString('pt-BR', {
                            style: 'currency',
                            currency: 'BRL',
                        })
                    }
                </span>
            </div>

            <div id="produto">
                <img src={bebida.imageUrl}/>
                <div>
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                </div>
            </div>
        </Bebida>
        ))

        return list
    }

    return (
        <BebidasStyled>
            <h2>{props.title}</h2>

            {
                listarBebidas()
            }
        </BebidasStyled>


    )
}