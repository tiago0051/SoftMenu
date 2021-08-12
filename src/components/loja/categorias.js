import Image from 'next/image'

import { CategoriasStyled, Categoria } from "../../styles/comps"

import bebidas from '../../assets/loja/bebidas.jpeg'

export default function Categorias(){
    return(
        <CategoriasStyled>
            <Categoria>
                <div><Image src={bebidas} alt="bebidas"/></div>
                <h2>Hamburgueres</h2>
            </Categoria>

            <Categoria>
                <div><Image src={bebidas} alt="bebidas"/></div>
                <h2>Bebidas</h2>
            </Categoria>

            <Categoria>
                <div><Image src={bebidas} alt="bebidas"/></div>
                <h2>Bebidas</h2>
            </Categoria>

            <Categoria>
                <div><Image src={bebidas} alt="bebidas"/></div>
                <h2>Bebidas</h2>
            </Categoria>
        </CategoriasStyled>
    )
}