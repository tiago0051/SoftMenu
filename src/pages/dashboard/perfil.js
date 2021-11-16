import { useContext, useEffect } from 'react'
import { parseCookies } from 'nookies'

import { DashboardStyled, OptionStyled, PerfilStyled } from '../../styles/dashboard'
import Navbar from '../../components/dashboard/navbar'
import { AuthContext } from '../../contexts/AuthContext'

export default function Perfil(){
    const {empresa} = useContext(AuthContext)

    return(
        <DashboardStyled>
            <Navbar nome={empresa?.nome} avatar={empresa?.urls.avatar} selecionado="perfil"/>

            <OptionStyled>
                <div>
                    <h1>Editar Perfil</h1>
                </div>

                <PerfilStyled>
                    <span>Configurações da foto de perfil e do avatar</span>
                    <div>
                        <div className="imagem">
                            <img src={empresa?.urls.avatar} alt=""/>
                            <button>Enviar</button>
                        </div>

                        <div className="imagem">
                            <img src={empresa?.urls.background} alt=""/>
                            <button>Enviar</button>
                        </div>
                    </div>

                    <span>Configurações gerais</span>

                    <div id="informações">
                        <input type="text" id="nome" placeholder="Nome do Restaurante"/>

                        <input id="descrição" placeholder="Descrição"/>

                        <input type="text" id="whatsapp" placeholder="Número para Whatsapp"/>

                        <input type="text" id="entrega" placeholder="Tempo para Entrega"/>

                        <input type="text" id="taxa" placeholder="Taxa de Entrega"/>
                    </div>

                </PerfilStyled>
            </OptionStyled>
        </DashboardStyled>
    )
}

export const getServerSideProps = async (ctx) => {
    const {'nextauth.token': token} = parseCookies(ctx)
    if(!token){
        return {
            redirect: {
                destination: '/dashboard/login',
                permanent: false,
            }
        }
    }


    return{
        props: {}
    }
}