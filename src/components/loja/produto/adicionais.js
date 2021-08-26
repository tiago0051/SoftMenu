import React, {useState, useEffect} from "react"

import { VaricoesStyled, Varicao } from "../../../styles/produto"

export default function Adicionais(props){

    const [Adicionais, SetAdicionais] = useState(props.adicionais)

    return (
        <VaricoesStyled>
            <div id="title">
                <h2>Variações do Produto</h2>
            </div>
            {
                Adicionais.map(adicional => (
                    <Varicao key={adicional.nome}>
                        <h3>{adicional.nome}</h3>
                        <p>{adicional.descrição}(+ {
                            adicional.preço.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                            })
                        })</p>
                        <input type="checkbox"/>
                    </Varicao>
                ))
            }
        </VaricoesStyled>
    )
}