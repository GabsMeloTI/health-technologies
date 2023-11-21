'use client'
import Image from "next/image"
import Link from "next/link"
import './cadastro.scss'
import { useState } from "react"
import { Nova_Square } from "next/font/google"

export default function Cadastro() {
     const [novo, setNovo] = useState({
        id: "",
        nome: "",
        email : "",
        senha: "",
        peso: "",
        sexo: "",
        altura: "",
        telefone:"",   
        dataNascimento: ""
    })

    const handleChange = (e) => {
        setNovo((prevNovo) => ({
            ...prevNovo,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = e => {
        e.preventDefault();

        fetch('http://localhost:8080/HealthSolu/api/usuario', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json; charset=UTF-8'
            
            },
            body: JSON.stringify(novo)
        }).then(() => {
            window.location = '/'
        })
    }

    return(
        <div className="container-box">
            <div className="geral">
                <div className="interação">
                    <h1>CADASTRO</h1>
                    <form className="inputs" onSubmit={handleSubmit}>
                        <label htmlFor="text">Nome completo</label>
                        <input type="text" name="nome" id="nome" value={novo.nome} onChange={handleChange} placeholder="João Silva"/>
                        <label htmlFor="text">Data de nascimento</label>
                        <input type="text" name="nascimento" id="nascimento" value={novo.dataNascimento} onChange={handleChange} placeholder="09/04/1963"/>
                        <label htmlFor="text">Email</label>
                        <input type="text" name="email" id="email" value={novo.email} onChange={handleChange} placeholder="@gmail.com"/>
                        <label htmlFor="text">Celular</label>
                        <input type="text" name="telefone" id="telefone" value={novo.telefone} onChange={handleChange} placeholder="(11)90000-0000"/>
                        <label htmlFor="text">Senha</label>
                        <input type="password" name="senha" id="senha" value={novo.senha} onChange={handleChange} placeholder="Senha"/>
                        <label htmlFor="text">Confirme sua senha</label>
                        <input type="password" name="confirmação" id="confirmação" placeholder="Confirmação"/>
                        <label htmlFor="text">Peso</label>
                        <input type="text" name="peso" id="peso" value={novo.peso} onChange={handleChange} placeholder="80"/>
                        <label htmlFor="text">Altura</label>
                        <input type="text" name="altura" id="altura" value={novo.altura} onChange={handleChange} placeholder="180"/>
                        <label htmlFor="">Genêro</label>
                        <select name="genero" id="genero" value={novo.sexo} onChange={handleChange}>
                            <option value="">Masculino</option>
                            <option value="">Feminino</option>
                        </select>
                        <button>Cadastrar-me</button>
                    </form>
                    <p>Já possui cadastro? Então faça o <Link href='/'>login.</Link></p>
                </div>
                <div className="img-text">
                    <Image src='/img/imgCad.png' alt="" width={900} height={800}/>
                </div>
            </div>
        </div>
    )
}