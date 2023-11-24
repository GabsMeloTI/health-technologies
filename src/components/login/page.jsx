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
        
        const response = await fetch("http://localhost:8080/HealthSolu/api/usuario");
        if(response.ok) {
            const resp = await response.json();
            let foundUser = " ";
            try {
                for (let usu = 0; usu < resp.length; usu++) {
                    if (resp[usu].email === loginData.email && loginData.senha === resp[usu].senha) {
                        foundUser = resp[usu];
                        sessionStorage.setItem('user', JSON.stringify(foundUser));
                        alert("Login efetuado com sucesso!");
                        window.location = `/healthsolu/avaliacao`;
                        userFound = true;
                        // Não use o break aqui para continuar iterando se necessário
                    }
                }
                alert("Email ou senha incorretos!");

            }catch(error) {
                console.log("Erro no response da verificação do email");
                console.log(error);
            }
        }
    }
      
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