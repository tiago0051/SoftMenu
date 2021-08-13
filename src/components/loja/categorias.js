import React from 'react'
import Image from 'next/image'

import { CategoriasStyled, Categoria } from "../../styles/comps"

import bebidas from '../../assets/loja/bebidas.jpeg'
import { useEffect, useState } from 'react'

export default function Categorias(props){

    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        setCategorias(props.empresa.categorias)
    }, [])

    return(
        <CategoriasStyled>
            {
                categorias.map(element => (
                    <Categoria>
                        <div><img src={element.imagemUrl} alt={element.nome}/></div>
                        <h2>{element.nome}</h2>
                    </Categoria>
                ))
            }
        </CategoriasStyled>
    )
}