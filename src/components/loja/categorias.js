import React from 'react'

import { CategoriasStyled, Categoria } from "../../styles/comps"

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
                    <Categoria href={"#cat-" + element.nome} key={element.nome}>
                        <h2>{element.nome}</h2>
                    </Categoria>
                ))
            }
        </CategoriasStyled>
    )
}