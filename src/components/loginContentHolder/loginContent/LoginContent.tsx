"use client"
import { useState } from "react"
import { useAuthStore } from "~/store/authStore"
import Link from "next/link"
import { useRouter } from "next/navigation"



export const LoginContent:React.FC = () =>{
    const [loginForm, setloginForm] = useState({email:'',password:'',})
    const [loginError, setLoginError] = useState(false)

    const login = useAuthStore((state) => state.login);
    const router = useRouter();
    
    const onChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
        setloginForm({...loginForm, [name]:value})
    }

    const OnSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setLoginError(false)
        const {error} = await login(loginForm.email,loginForm.password)
        if (error) {
            setLoginError(true)
            return;
        }
        router.push('/')
     }
    return(
        <div className="bg-[rgb(var(--blackbrown))] p-7 rounded-[9px] gap-1 flex flex-col grow">   
            <p className="m-auto">Войти</p>
            <form className="flex flex-col gap-3" onSubmit={OnSubmit}> 
                <input onChange={onChange} className="p-2 px-4 bg-[rgb(var(--blackamber))] rounded-lg" placeholder="email" name='email' value={loginForm.email}/>
                <input onChange={onChange} className="p-2 px-4 bg-[rgb(var(--blackamber))] rounded-lg   q" placeholder="password" name='password' value={loginForm.password}/>
                <button className="bg-[rgb(var(--gray))] p-2">Войти</button>
                {loginError && <p className="text-[rgb(var(--red))] text-[0.9rem] h-fit">Пожалуйста, проверьте свой пароль и почту и попробуйте снова.</p>}
            </form>
            {/* <button onClick={() => signInWithGoogle()}>Войти через Google</button> */}
            <Link href="/signup" className="text-[rgb(var(--sub))] hover:underline">Создайте Аккаунт, если у вас его нет</Link>
            <Link href='/' className="text-[rgb(var(--sub-secondary))] hover:underline">На главную</Link>   
        </div>
    )
}