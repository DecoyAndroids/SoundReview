"use client"
import { useState } from "react"
import { useAuthStore } from "axios/store/authStore"
import {signInWithPassword} from "axios/app/actions/auth"
import Link from "next/link"
import { useRouter } from "next/navigation"



export const LoginContent:React.FC = () =>{
    const [loginForm, setloginForm] = useState({email:'',password:'',})
    //const [email, setEmail] = useState("");
    //const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const login = useAuthStore((state) => state.login);
    const router = useRouter();
    
    const onChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
        setloginForm({...loginForm, [name]:value})
    }

    const OnSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setError("")

        const {error} = await login(loginForm.email,loginForm.password)
        if (error) {
            setError(error)
            return;
        }
        router.push('/')
     }
    return(
        <div>      
            Войти
            <form className="flex-col" onSubmit={OnSubmit}>
            <input onChange={onChange} placeholder="email" name='email' value={loginForm.email}/>
            <input onChange={onChange} placeholder="password" name='password' value={loginForm.password}/>
            <button>Войти</button>
            </form>
            {/* <button onClick={() => signInWithGoogle()}>Войти через Google</button> */}
            <Link href="/signup">Создайте Аккаунт, если у вас его нет</Link>
        </div>
    )
}