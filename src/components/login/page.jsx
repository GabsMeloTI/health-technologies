'use client'
import Image from "next/image"
import Link from "next/link"
import './login.scss'
import { useState } from "react"

export default function LoginTeste() {
    const [loginData, setLoginData] = useState({
        email: "",
        senha: ""
    });

    const handleChange = (e) => {
        setLoginData((prevLoginData) => ({
            ...prevLoginData,
            [e.target.name]: e.target.value
        }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        fetch("http://localhost:8080/HealthSolu/api/usuario", {
            method: "GET", 
            headers: { 
                'Content-Type': 'application/json',
            },
            }).then((resp) => {
                return resp.json();
            }).then((resp) => {
                setLoginData(resp);
                for(const usu in resp) {
                    console.log(resp[usu].senha);
                    console.log(loginData.senha);
                    console.log(resp[usu].email);
                    console.log(loginData.email);
                    if (resp[usu].email === loginData.email && loginData.senha == resp[usu].senha) {
                        console.log("Sucesso!");
                        window.location = "/healthsolu/avaliacao";
                    }
                }
                
            }).catch((error) => {
                console.error("Erro na solicitação fetch:", error);
        });

    }
    

    
    // const handleSubmit = (e) => {
    //     e.preventDefault();

    //     // Enviar dados de login para a API
    //     fetch('http://localhost:8080/HealthSolu/api/usuario', {
    //         method: 'GET',
    //         headers: {
    //             'Content-Type': 'application/json; charset=UTF-8',
    //         },
    //     })
    //     .then(response => {
    //         return response.json();
    //         console.log(response);
    //     })                  
    // }
      
    return(
        <div className="container-box">
            <div className="geral">
                <div className="interação">
                    <h1>LOGIN</h1>
                    <form className="inputs" onSubmit={handleSubmit}>
                        <label htmlFor="text">Email</label>
                        <input type="text" name="email" id="email" placeholder="@gmail.com"
                            value={loginData.email}
                            onChange={handleChange}/>
                        <label htmlFor="password">Senha</label>
                        <input type="password" name="senha" id="senha" placeholder="Senha"
                            value={loginData.senha}
                            onChange={handleChange}/>
                        <button>Entrar</button>
                    </form>
                    
                    <p>Não tem cadastro? Então <Link href='/healthsolu/cadastro'>cadastre-se.</Link></p>
                </div>
                <div className="img-text">
                    <Image src='/img/imgLogin.png' alt="" width={900} height={800}/>
                </div>
            </div>
        </div>
    )
}