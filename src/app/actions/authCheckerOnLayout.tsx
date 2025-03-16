'use client'
import { useAuthStore } from "~/store/authStore";
import { useEffect } from "react";

export const AuthCheckerOnLayout : React.FC = () => { 
    const checkAuth = useAuthStore((state) => state.checkAuth);
    useEffect(()  => {
        const fetchData = async () => {
        await checkAuth(); // Загружаем пользователя при старте
        }
        void fetchData()
    }, [checkAuth]);
    return (
        <></>
    )
    }