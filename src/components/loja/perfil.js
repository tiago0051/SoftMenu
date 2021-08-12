import React, {useState} from 'react'
import Image from 'next/image'

import user from '../../assets/loja/mafiaburguer.jpg'

import { PerfilStyled, Title } from '../../styles/comps'

export default function Perfil(){

    const [tittle, setTittle] = useState('Máfia Burguer')
    const [descricao, setDescricao] = useState('Hamburgueria Gurme')

    return (
        <PerfilStyled>
            <div id="wallpaper">
                <div id="avatar"><Image src={user} alt="me"/></div>

                <div id="informacoes">
                    <Title>{tittle}</Title>
                    <p>{descricao}</p>
                </div>
            </div>
        </PerfilStyled>
    )
}
