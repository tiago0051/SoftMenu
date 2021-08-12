import React from 'react'
import Image from 'next/image'

import user from '../../assets/loja/user.png'

import { PerfilStyled, Title } from '../../styles/comps'

export default function Perfil(){
    return (
        <PerfilStyled>
            <div id="wallpaper">
                <div><Image src={user} alt="me"/></div>
            </div>

            <div id="informacoes">
                <Title>Softmenus</Title>
                <p>Hamburgueria Gurme</p>
            </div>
        </PerfilStyled>
    )
}
