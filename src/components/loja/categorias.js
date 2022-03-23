import React from 'react'

import { CategoriasStyled, Categoria } from "../../styles/comps"

import { useEffect, useState } from 'react'

export default function Categorias(props){

    const [categorias, setCategorias] = useState([])

    useEffect(() => {
        setCategorias(props.empresa.map(produto => produto.categoria))
    }, [])

    return(
        <CategoriasStyled>
            {
                categorias.map(element => (
                    <Categoria href={"#cat-" + element} key={element}>
                        <h2>{element}</h2>
                    </Categoria>
                ))
            }
        </CategoriasStyled>
    )
}