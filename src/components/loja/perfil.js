import React, {useState} from 'react'
import Image from 'next/image'
import FeatherIcons from 'feather-icons-react'

import user from '../../assets/loja/mafiaburguer.jpg'
import background from '../../assets/loja/background.jpeg'

import { PerfilStyled, Title } from '../../styles/comps'

export default function Perfil(){

    const [tittle, setTittle] = useState('Máfia Burguer')
    const [descricao, setDescricao] = useState('Hamburgueria Gurme')
    const [status, setStatus] = useState('FECHADO')

    return (
        <PerfilStyled backgroundImage={background.src}>
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
            </div>
        </PerfilStyled>
    )
}
