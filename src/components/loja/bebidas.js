import React, { useEffect, useState } from "react"

import { BebidasStyled, Bebida } from "../../styles/comps"

export default function Bebidas(props){
    const [Bebidas, setBebidas] = useState(props.empresa.produtos.filter(produto => produto.categoria == "Bebidas"))

    function listarBebidas(){
        const list = Bebidas.map(bebida => (
            <Bebida id="cat-Bebidas" key={bebida.nome}>
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