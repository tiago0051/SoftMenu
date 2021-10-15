import { useState } from "react";
import axios from "axios";

import { LoginStyled , UsuárioInput, SenhaInput, LogarButton} from "../../styles/dashbaord"

export default function Login(){

    const [Usuário, setUsuário] = useState('')
    const [Senha, setSenha] = useState('')    

    function submitForm(event){
        event.preventDefault();

        axios.post("/api/dashboard/login", {Usuário: Usuário, Senha: Senha})
    }

    return(
        <LoginStyled>
            <form onSubmit={submitForm}>
                <img src="/Logo-Completa-Branco.svg" alt="Logo SoftMenus"/>
                <UsuárioInput type="text" placeholder="Usuário (CPF / CNPJ)" onChange={event => setUsuário(event.target.value)}/>
                <SenhaInput type="password" placeholder="Senha" onChange={event => setSenha(event.target.value)}/>
                <LogarButton type="submit">Logar</LogarButton>
            </form>

        </LoginStyled>
    )
}