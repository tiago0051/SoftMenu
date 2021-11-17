import { useContext, useEffect, useState } from 'react'
import { parseCookies } from 'nookies'

import { DashboardStyled, OptionStyled, PerfilStyled } from '../../styles/dashboard'
import Navbar from '../../components/dashboard/navbar'
import { AuthContext } from '../../contexts/AuthContext'
import axios from 'axios'

export default function Perfil(){
    const {empresa} = useContext(AuthContext)

    useEffect(() => {
        if(empresa != null){
            setNome(empresa.nome)
            setDescricao(empresa.descricao)
            setWhatsapp(empresa.contato)
            setTempoEntrega(empresa.tempoEspera)
            setTaxaEntrega(empresa.taxaEntrega)
        }
    }, [empresa])

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [whatsapp, setWhatsapp] = useState('')
    const [tempoEntrega, setTempoEntrega] = useState('')
    const [taxaEntrega, setTaxaEntrega] = useState('')
    const [endereço, setEndereço] = useState('')
    const [avatar, setAvatar] = useState()
    const [avatarUrl, setAvatarUrl] = useState()
    const [background, setBackground] = useState()
    const [backgroundUrl, setBackgroundUrl] = useState()

    useEffect(() => {
        setAvatarUrl(empresa?.urls.avatar)
        setBackgroundUrl(empresa?.urls.background)
    }, [])

    function searchImageAvatar(){
        var inputElement = document.createElement("input");

        // Set its type to file
        inputElement.type = "file";
    
        // Set accept to the file types you want the user to select. 
        // Include both the file extension and the mime type
        inputElement.accept = "image/*";
    
        // set onchange event to call callback when user has selected file
        inputElement.addEventListener("change", (event) => {setAvatar(event.target.files[0]); setAvatarUrl(URL.createObjectURL(event.target.files[0]))});
        
        // dispatch a click event to open the file dialog
        inputElement.dispatchEvent(new MouseEvent("click")); 
    }

    function searchImageBackground(){
        var inputElement = document.createElement("input");

        // Set its type to file
        inputElement.type = "file";
    
        // Set accept to the file types you want the user to select. 
        // Include both the file extension and the mime type
        inputElement.accept = "image/*";
    
        // set onchange event to call callback when user has selected file
        inputElement.addEventListener("change", (event) => {setBackground(event.target.files[0]); setBackgroundUrl(URL.createObjectURL(event.target.files[0]))});
        
        // dispatch a click event to open the file dialog
        inputElement.dispatchEvent(new MouseEvent("click")); 
    }

    function handleSubmit(e){
        console.log(nome, descricao, whatsapp, tempoEntrega, taxaEntrega, endereço)

        const data = new FormData()

        data.append('nome', nome)
        data.append('descricao', descricao)
        data.append('contato', whatsapp)
        data.append('tempoEspera', tempoEntrega)
        data.append('taxaEntrega', taxaEntrega)
        data.append('endereco', endereço)
        if(avatar)
            data.append('files', avatar)
        if(background)
            data.append('files', background)

        axios.post('/api/dashboard/update-perfil', data).then(res => {
            console.log(res)
        })
    }

    return(
        <DashboardStyled>
            <Navbar nome={empresa?.nome} avatar={empresa?.urls.avatar} selecionado="perfil"/>

            <OptionStyled>
                <div>
                    <h1>Editar Perfil</h1>
                </div>

                <PerfilStyled>
                    <div>
                        <div className="imagem">
                            <img src={avatarUrl} alt=""/>
                            <button onClick={searchImageAvatar}>Enviar</button>
                        </div>

                        <div className="imagem">
                            <img src={backgroundUrl} alt=""/>
                            <button onClick={searchImageBackground}>Enviar</button>
                        </div>
                    </div>

                    <div id="informações">
                        <input type="text" id="nome" placeholder="Nome do Restaurante" defaultValue={nome} onChange={(event) => setNome(event.target.value)}/>

                        <input id="descrição" placeholder="Descrição" defaultValue={descricao} onChange={(event) => setDescricao(event.target.value)}/>

                        <input type="text" id="whatsapp" placeholder="Número para Whatsapp" defaultValue={whatsapp} onChange={(event) => setWhatsapp(event.target.value)}/>

                        <input type="text" id="entrega" placeholder="Tempo para Entrega" defaultValue={tempoEntrega} onChange={(event) => setTempoEntrega(event.target.value)}/>

                        <input type="number" id="taxa" placeholder="Taxa de Entrega" defaultValue={taxaEntrega} onChange={(event) => setTaxaEntrega(event.target.value)}/>

                        <input type="text" id="endereço" placeholder="Endereço" defaultValue={endereço} onChange={(event) => setEndereço(event.target.value)}/>

                        <button onClick={handleSubmit}>Salvar</button>
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