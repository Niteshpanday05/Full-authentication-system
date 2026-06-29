"use client";

import { useRouter } from "next/navigation";

import { AuthService } from "../services/auth.service";

export function useRegister() {

    const router = useRouter();

    const register = async(data:any)=>{

        await AuthService.register(data);

        router.push("/verify-email");
    };

    return {
        register,
    };
}