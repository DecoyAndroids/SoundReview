"use client"
import { useState } from "react"
import Link from "next/link"
import { signUp } from "~/app/actions/auth"
import * as z from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const SignUpContent:React.FC = () => {
    const [loginForm, setLoginForm] = useState({
        email:'',
        password:'',
        passwordRepeat:'',
        emailError:'',
        passwordError:'',
        passwordRepeatError:'',
    })

    const [pageState, SetPageState] = useState(false)

    const validateField  = (name : string, value : string) =>{
        switch(name){
            case 'email':
                if (!value){
                    return 'Данное поле обязательно'
                }
                if (!value.includes('@') || !value.includes('.')){
                    return 'Форма почты неверна'
                }
                return ''
            case 'password':
                if (!value){
                    return 'Данное поле обязательно'
                }
                if (value.length < 8){
                    return 'Минимальная длинна 8 символов'
                }
                if (value.length > 100){
                    return 'Максимальная длинна 100 символов'
                }
                return ''   
            case 'passwordRepeat':
                if (!value){
                    return 'Данное поле обязательно'
                }
                if (value != loginForm.password){
                    return 'Пароли должны совпадать'
                } 
                return ''
        }
    }

    const onChange = (e:  React.ChangeEvent<HTMLInputElement>) => {
        const {name,value} = e.target
        setLoginForm({...loginForm, [name]:value})
    }

    const OnSubmit = async (e:React.FormEvent<HTMLFormElement>) => { //
        e.preventDefault()
        const { data, error } = await signUp(loginForm.email,loginForm.password)
        
        setLoginForm({
            email:'',
            password:'',
            passwordRepeat:'',
            emailError:'',
            passwordError:'',
            passwordRepeatError:'',
        })
        console.log(data,error)
        if (data){
            SetPageState(true)
        }
    }

    const onBlur = (e:React.FocusEvent<HTMLInputElement|HTMLTextAreaElement>) => {
        const {name,value} = e.target
        setLoginForm((prev)=>({
            ...prev,
            [name+'Error']:validateField(name,value)
        }))
    } 

    return(
        <div>
            {!pageState ? 
                <div className="bg-[rgb(var(--blackbrown))] p-7 rounded-[9px] gap-2 flex flex-col grow">      
                    <p className="m-auto">Создать</p>
                    <form className="flex flex-col grow gap-3" onSubmit={OnSubmit} >
                        <div className="flex flex-col gap-1">
                            <p className="text-[1rem] h-fit text-[rgb(var(--text))]">Введите почту</p>
                            <input onChange={onChange} onBlur={onBlur} className="p-2 px-4 bg-[rgb(var(--blackamber))] rounded-lg" placeholder="email" name='email' value={loginForm.email}/>
                            {loginForm.emailError && <p className="text-[rgb(var(--red))] text-[1.2rem] h-fit">{loginForm.emailError}</p>}
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-[1rem] h-fit text-[rgb(var(--text))]">Придумайте надежный пароль</p>
                            <input  onChange={onChange} onBlur={onBlur} className="p-2 px-4 bg-[rgb(var(--blackamber))] rounded-lg" placeholder="password" name='password' value={loginForm.password}/>
                            {loginForm.passwordError && <p className="text-[rgb(var(--red))] text-[1.2rem] h-fit">{loginForm.passwordError}</p>}
                        </div>
                        <div className="flex flex-col gap-1">
                            <p className="text-[1rem] h-fit text-[rgb(var(--text))]" >Повторите пароль</p>
                            <input onChange={onChange} onBlur={onBlur} className="p-2 px-4 bg-[rgb(var(--blackamber))] rounded-lg" placeholder="password" name='passwordRepeat' value={loginForm.passwordRepeat}/>
                            {loginForm.passwordRepeatError && <p className="text-[rgb(var(--red))] text-[1.2rem] h-fit"> {loginForm.passwordRepeatError}</p>}
                        </div>
                        <button className="bg-[rgb(var(--gray))] p-2 rounded-lg hover:bg-[rgb(var(--blackamber))]" disabled={loginForm.emailError || loginForm.passwordError || loginForm.passwordRepeatError ? true:false}>Создать</button>
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
