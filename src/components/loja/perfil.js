import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import FeatherIcons from 'feather-icons-react'

import user from '../../assets/loja/mafiaburguer.jpg'
import background from '../../assets/loja/background.jpeg'

import { PerfilStyled, Title } from '../../styles/comps'

export default function Perfil(props){

    const [tittle, setTittle] = useState('')
    const [descricao, setDescricao] = useState('')
    const [status, setStatus] = useState('')

    useEffect(() => {
        setTittle(props.empresa.nomeEmpresa)
        setDescricao(props.empresa.descricao)
        setStatus(props.empresa.status)
    }, [])

    return (
        <PerfilStyled backgroundImage={background.src} aberto={status == "ABERTO"}>
            <div id="wallpaper">
                <div id="status">
                    <tittle>{status}</tittle>
                </div>

                <div id="avatar"><Image src={user} alt="me"/></div>

                <div id="empresa">
                    <Title>{tittle}</Title>
                    <p>{descricao}</p>
                </div>
            </div>

            <div id="informacoes">
                <div id="informacoe">
                    <p><FeatherIcons icon="dollar-sign"/> Taxa de entrega</p>
                    <span>R$ 0,00</span>
                </div>

                <div id="informacoe">
                    <p><FeatherIcons icon="clock"/> Tempo de Espera</p>
                    <span>40 min - 60 min</span>
                </div>

                <div id="informacoe">
                    <p><FeatherIcons icon="phone"/> contato</p>
                    <span><a href="tel:2198541-5544">(21) 98541-5544</a></span>
                </div>
            </div>
        </PerfilStyled>
    )
}
