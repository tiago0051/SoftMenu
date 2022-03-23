import { createContext, useEffect, useState } from "react"
import {setCookie, parseCookies, destroyCookie} from "nookies"
import axios from "axios"
import {useRouter} from "next/router";

export const AuthContext = createContext({})

export function AuthProvider({children}){
    const Router = useRouter()

    const [user, setUser] = useState(null)
    const [empresa, setEmpresa] = useState(null)
    const [executar, setExecutar] = useState(false)
    const empresa_nome = Router.query.empresa_nome

    const isAuthenticate = !!user;

    useEffect(() => {
        const {'nextauth.token': token} = parseCookies()

        if(token){
            axios.post('/api/dashboard/userInformation', {token}).then((response) => {
                if(response.data.isLogged){
                    setUser(response.data.usuário)
                }else{
                    setUser({})
                    setEmpresa({})
                    destroyCookie(undefined, 'nextauth.token', {
                        path: '/',
                    })
                    Router.push(`/${empresa_nome}/dashboard/login`)
                }
            }).catch(() => {
                setUser({})
                setEmpresa({})
                destroyCookie(undefined, 'nextauth.token', {
                    path: '/',
                })
                Router.push(`/${empresa_nome}/dashboard/login`)
            })
        }

        if(empresa_nome){
            axios.post('/api/dashboard/empresaInformation', {empresa_nome}).then((response) => {
                if(response.status == 200){
                    //console.log(response.data)
                    setEmpresa(response.data.empresa)
                }else{
                    setEmpresa({})
                }
            }).catch(() => {
                setEmpresa({})
            })
        }
    }, [executar])

    async function signIn(usuário, senha){
        var a = new Promise((resolve, reject) => {
            axios({method: 'post', url: '/api/dashboard/login', timeout: 4000, data: {usuário: usuário, senha: senha, empresa_nome}}).then((response) => {
                if(response.status == 202 && response.data.token){
                    setCookie(undefined, 'nextauth.token', response.data.token, {
                        maxAge: 60 * 60 * 24, //8 h
                        path: '/',
                    })

                    setExecutar(true)

                    resolve(true)
                    Router.push(`/${empresa_nome}/dashboard/`)
                }else if(isAuthenticate)
                    resolve(false)
                    
            }).catch(() => {
                resolve(false)
            })
        })

        return a;
    }

    return(
        <AuthContext.Provider value={{isAuthenticate, user, empresa, signIn}}>
            {children}
        </AuthContext.Provider>
    )
}