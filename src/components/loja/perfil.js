import React, {useState} from 'react'
import Image from 'next/image'

import user from '../../assets/loja/user.png'

import { PerfilStyled, Title } from '../../styles/comps'

export default function Perfil(){

    const [tittle, setTittle] = useState('Softmenus')
    const [descricao, setDescricao] = useSate('Hamburgueria Gurme')

    return (
        <PerfilStyled>
            <div id="wallpaper">
                <div><Image src={user} alt="me"/></div>
            </div>

            <div id="informacoes">
                <Title>{tittle}</Title>
                <p>{descricao}</p>
            </div>
        </PerfilStyled>
    )
}
