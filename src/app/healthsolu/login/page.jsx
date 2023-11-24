// Seu componente de login em Next.js
'use client'
import { useState } from 'react';

export default function Login() {
  const [credentials, setCredentials] = useState({
    email: '',
    senha: '',
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };


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
            setCredentials(resp);
            console.log(resp);
        }).catch((error) => {
            console.error("Erro na solicitação fetch:", error);
    });

    //// Fazer chamada à API para obter dados do usuário
    //try {
    //  const response = await fetch(`http://localhost:8080/HealthSolu/api/usuario`);
    //  if (!response.ok) {
    //    throw new Error('Network response was not ok');
    //  }
//
    //  const userData = await response.json();
//
    //  // Verificar as credenciais
    //  if (response.senha === credentials.senha) {
    //    console.log(userData.senha);
    //    console.log('Login bem-sucedido:', userData);
//
    //    // Você pode armazenar informações sobre a sessão aqui, se necessário
//
    //  } else {
    //    console.log(response.senha);
    //    console.log(credentials.senha);
    //    console.error('Credenciais inválidas');
    //  }
    //} catch (error) {
    //  console.error('Houve um problema com o login:', error);
    //}
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input type="text" name="email" value={credentials.email} onChange={handleChange} />

        <label>Senha:</label>
        <input type="password" name="senha" value={credentials.senha} onChange={handleChange} />

        <button type="submit">Entrar</button>
      </form>
    </div>
  );
}
