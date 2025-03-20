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
                <div className="bg-[rgb(var(--blackbrown))] p-7 rounded-[9px] gap-1 flex flex-col grow">      
                    <p className="m-auto">Создать</p>
                    <form className="flex flex-col gap-3" onSubmit={OnSubmit}>
                        <input onChange={onChange} className="p-2 px-4 bg-[rgb(var(--blackamber))]" placeholder="email" name='email' value={loginForm.email}/>
                        <input onChange={onChange} className="p-2 px-4 bg-[rgb(var(--blackamber))]" placeholder="password" name='password' value={loginForm.password}/>
                        <button className="bg-[rgb(var(--gray))] p-2">Создать</button>
                    </form>
                    <Link href="/login" className="text-[rgb(var(--sub))] hover:underline">Войдите в аккаунт, если он у вас уже есть</Link>
                    <Link href='/' className="text-[rgb(var(--sub-secondary))] hover:underline">На главную</Link>
                </div>
            :
                <div className="bg-[rgb(var(--blackbrown))] p-7 rounded-[9px] gap-1 flex flex-col grow">
                    <p className="m-auto">Создать</p>
                    <p className="word-spacin">Теперь подтвердите создание аккаунта, пройдя по ссылке с письма по почте</p>
                    <p>Данную страницу можно закрыть </p>
                </div>
            }
        </div>
    )
}

// {/* <div className="bg-[rgb(var(--blackbrown))] p-7 rounded-[9px] gap-1 flex flex-col grow">   
//             <p className="m-auto">Войти</p>
//             <form className="flex flex-col gap-3" onSubmit={OnSubmit}> 
//                 <input onChange={onChange} className="p-2 px-4 bg-[rgb(var(--blackamber))]" placeholder="email" name='email' value={loginForm.email}/>
//                 <input onChange={onChange} className="p-2 px-4 bg-[rgb(var(--blackamber))]" placeholder="password" name='password' value={loginForm.password}/>
//                 <button className="bg-[rgb(var(--gray))] p-2">Войти</button>
//                 {loginError && <p className="text-[rgb(var(--red))] text-[0.75rem] ">Пожалуйста, проверьте свой пароль и почту и попробуйте снова.</p>}
//             </form>
//             {/* <button onClick={() => signInWithGoogle()}>Войти через Google</button> */}
//             <Link href="/signup" className="text-[rgb(var(--sub))] hover:underline">Создайте Аккаунт, если у вас его нет</Link>
//             <Link href='/' className="text-[rgb(var(--sub-secondary))] hover:underline">На главную</Link>   
//         </div> */}