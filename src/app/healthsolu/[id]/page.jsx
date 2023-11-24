'use client'
import { useEffect, useState } from "react"
import Avalição from "@/components/avaliacao/page";
import Dieta from "@/components/dieta/page";
import Cadastro from "@/components/cadastro/page";
import IMC from "@/components/calculo-imc/page";
import TMB from "@/components/calculo-tmb/page";
import Login from "@/app/page";
import NotFound from "@/app/not-found";
import Dados from "@/components/dados/page";

export default function Navegacao({params}) {
    const [msg, setMsg] = useState(<Login/>);
    const id = params.id;

    useEffect(() => {
        if(id == 'imc') {
            setMsg(<IMC/>)
        } else if(id == 'tmb') {
            setMsg(<TMB/>)
        } else if(id == 'cadastro') {
            setMsg(<Cadastro/>)
        } else if(id == 'avaliacao') {
            setMsg(<Avalição/>)
        } else if(id == 'dieta') {
            setMsg(<Dieta/>)
        } else if(id == 'dados') {
            setMsg(<Dados/>)
        } else {
            setMsg(<NotFound/>)
        }
    }, [id])
    
    return(
        <div>
            {msg}
        </div> 
    )
    
}