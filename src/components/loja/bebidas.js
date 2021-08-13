import React from "react"

import { BebidasStyled, Bebida } from "../../styles/comps"

export default function Bebidas(props){
    return (
        <BebidasStyled>
            <h2>{props.title}</h2>

            <Bebida>
                <div id="informacoes">
                    <h3>Coca-cola 2L</h3>
                    
                    <span>R$ 7,00</span>
                </div>

                <div id="produto">
                    <img src="https://softmenus.s3.sa-east-1.amazonaws.com/Empresas/coca-cola.jpg"/>
                    <div>
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                </div>
            </Bebida>

            <Bebida>
                <div id="informacoes">
                    <h3>Coca-cola 2L</h3>
                    
                    <span>R$ 7,00</span>
                </div>

                <div id="produto">
                    <img src="https://softmenus.s3.sa-east-1.amazonaws.com/Empresas/coca-cola.jpg"/>
                    <div>
                        <button>-</button>
                        <span>1</span>
                        <button>+</button>
                    </div>
                </div>
            </Bebida>
        </BebidasStyled>


    )
}