import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import FeatherIcons from 'feather-icons-react'

import { PerfilStyled, Title } from '../../styles/comps'

export default function Perfil(props){
    return (
        <PerfilStyled backgroundImage={props.empresa.imagem_background} aberto={props.empresa.status == "ABERTO"}>
            <div id="wallpaper">
                <div id="avatar"><img src={props.empresa.avatar} alt="me"/></div>
            </div>

            <div id="empresa">
                    <Title>{props.empresa.nome}</Title>
                    <p>{props.empresa.descricao}</p>
            </div>

            <div id="informacoes">
                <div id="informacoe">
                    <p><FeatherIcons icon="dollar-sign"/> Taxa de entrega</p>
                    <span>
                        {
                            props.empresa.taxaEntrega
                                .toLocaleString('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL',
                                })
                        }
                    </span>
                </div>

                <div id="informacoe">
                    <div id="status">
                        <tittle>{props.empresa.status}</tittle>
                    </div>
                </div>

                <div id="informacoe">
                    <p><FeatherIcons icon="clock"/> Tempo de Espera</p>
                    <span>{props.empresa.tempoEspera}</span>
                </div>
            </div>
        </PerfilStyled>
    )
}
