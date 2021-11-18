import { createContext, useEffect, useState } from "react"
import {setCookie, parseCookies, destroyCookie} from "nookies"
import axios from "axios"
import Router from "next/router";

export const AuthContext = createContext({})

export function AuthProvider({children}){
    const [user, setUser] = useState(null)
    const [empresa, setEmpresa] = useState(null)

    const isAuthenticate = !!user;

    useEffect(() => {
        const {'nextauth.token': token} = parseCookies()

        if(token){
            try{
                axios.post('/api/dashboard/userInformation', {token}).then((response) => {
                    if(response.data.isLogged){
                        setUser(response.data.usuário)
                        setEmpresa(response.data.empresa)
                    }else{
                        setUser({})
                        setEmpresa({})
                        destroyCookie(undefined, 'nextauth.token', {
                            path: '/',
                        })
                        Router.push('/dashboard/login')
                    }
                })
            }catch{
                setUser({})
                setEmpresa({})
                destroyCookie(undefined, 'nextauth.token', {
                    path: '/',
                })
                Router.push('/dashboard/login')
            }
        }
    }, [])

    async function signIn(usuário, senha){
        var a = new Promise((resolve, reject) => {
            axios({method: 'post', url: '/api/dashboard/login', timeout: 4000, data: {usuário: usuário, senha: senha}}).then((response) => {
                if(response.status == 202 && response.data.isLogged){
                    setCookie(undefined, 'nextauth.token', response.data.token, {
                        maxAge: 60 * 60 * 24, //8 h
                        path: '/',
                    })
    
                    setUser(response.data.usuário)
                    setEmpresa(response.data.empresa)

                    resolve(true)
                    Router.push('/dashboard/')
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