import { LoginStyled , UsuárioInput, SenhaInput, LogarButton} from "../../styles/dashbaord"

export default function Login(){
    return(
        <LoginStyled>
            <form>
                <img src="/Logo-Completa-Branco.svg" alt="Logo SoftMenus"/>
                <UsuárioInput type="text" placeholder="Usuário (CPF / CNPJ)"/>
                <SenhaInput type="password" placeholder="Senha"/>
                <LogarButton type="submit">Logar</LogarButton>
            </form>

        </LoginStyled>
    )
}