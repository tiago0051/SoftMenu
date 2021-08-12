import Image from "next/image"
import { Title, Produto, ProdutosStyled } from "../../styles/comps"

import pizza from '../../assets/loja/pizza.jpeg'

export default function Produtos(){
    return(
        <ProdutosStyled>
            <Produto>
                <div id="informacoes">
                    <h2>Pizza Calabresa</h2>
                    <p>Queijo prato, calabresa, azeitona e cebola</p>
                    <span>R$ 32,50</span>
                </div>

                <div id="image">
                    <Image src={pizza} alt="produto"/>
                </div>
            </Produto>

            <Produto>
                <div id="informacoes">
                    <h2>Pizza Calabresa</h2>
                    <p>Queijo prato, calabresa, azeitona e cebola</p>
                    <span>R$ 32,50</span>
                </div>

                <div id="image">
                    <Image src={pizza} alt="produto"/>
                </div>
            </Produto>

            <Produto>
                <div id="informacoes">
                    <h2>Pizza Calabresa</h2>
                    <p>Queijo prato, calabresa, azeitona e cebola</p>
                    <span>R$ 32,50</span>
                </div>

                <div id="image">
                    <Image src={pizza} alt="produto"/>
                </div>
            </Produto>
        </ProdutosStyled>
    )
}