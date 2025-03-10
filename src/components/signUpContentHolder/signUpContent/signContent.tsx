"use client"
import { useState } from "react"
import { createClient } from '@supabase/supabase-js'
import Link from "next/link"


export const SignUpContent:React.FC = () => {
    const [loginForm, setloginForm] = useState({
        email:'',
        password:'',
    })
    const [pageState, SetPageState] = useState(false)
    const supabase = createClient(process.env.supabaseUrl! , process.env.supabaseKey!)

    const onChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
        setloginForm({...loginForm, [name]:value})
    }

    const OnSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
            const { data, error } = await supabase.auth.signUp({
            email: `${loginForm.email}`,
            password: `${loginForm.password}`,
            })
        
        setloginForm({
            email:'',
            password:''
        })
        console.log(data,error)
        if (data){
            SetPageState(true)
        }
     }
    return(
        <div>
            {!pageState ? 
                <div>      
                    Создать
                    <form className="flex-col" onSubmit={OnSubmit}>
                        <input onChange={onChange} placeholder="email" name='email' value={loginForm.email}/>
                        <input onChange={onChange} placeholder="password" name='password' value={loginForm.password}/>
                        <button>Создать</button>
                    </form>
                    <Link href="/login">Войдите в аккаунт, если он у вас уже есть</Link>
                </div>
            :
                <div >
                <p>Теперь подтвердите верификации пройдя по ссылке с письма по почте</p>
                <p>Данную страницу можно закрыть </p>
                </div>
            }
        </div>
    )
}
