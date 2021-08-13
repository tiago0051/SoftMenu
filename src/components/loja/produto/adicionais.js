import React from "react"

import { VaricoesStyled, Varicao } from "../../../styles/produto"

export default function Adicionais(){
    return (
        <VaricoesStyled>
            <div id="title">
                <h2>Variações do Produto</h2>
            </div>

            <Varicao>
                <h3>Pequena</h3>
                <p>25 cm (+ R$ 3,00)</p>
                <input type="checkbox"/>
            </Varicao>

            <Varicao>
                <h3>Média</h3>
                <p>35 cm (+ R$ 4,00)</p>
                <input type="checkbox"/>
            </Varicao>

            <Varicao>
                <h3>Grande</h3>
                <p>45 cm (+ R$ 6,00)</p>
                <input type="checkbox"/>
            </Varicao>
        </VaricoesStyled>
    )
}