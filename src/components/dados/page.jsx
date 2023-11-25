'use client'
import { useEffect, useState } from "react";
import Menu from "@/components/menu/page";
import Rodape from "@/components/rodape/page";
import './dados.scss'

export default function Dados() {
  const [userData, setUserData] = useState({
    nome: "",
    telefone: "",
    email: "",
    peso: "",
    altura: "",
    id: ""
  });

  useEffect(() => {
    const storedUser = JSON.parse(sessionStorage.getItem('user'));
    if (storedUser) {
      setUserData(storedUser);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };


  return (
    <div className="container-dados">
      <Menu />
      <div className="dados">
        <div className="textos">
          <h1>Meus dados</h1>
          <p>Sempre mantenha seus dados atualizados.</p>
        </div>
        <div className="inputs">
          <label htmlFor="nome">Nome</label>
          <input
            type="text"
            name="nome"
            id="nome"
            placeholder="João Silva"
            value={userData.nome}
          />
          <label htmlFor="celular">Celular</label>
          <input
            type="text"
            name="telefone"
            id="telefone"
            placeholder="(11)90000-0000"
            value={userData.telefone}
          />
          <label htmlFor="nascimento">Data de nascimento</label>
          <input
            type="text"
            name="dataNascimento"
            id="dataNascimento"
            value={userData.dataNascimento} 
          />
          <label htmlFor="sexo">Gênero</label>
          <input
            type="text"
            name="sexo"
            id="sexo"
            value={userData.sexo}
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="@gmail.com"
            value={userData.email}
          />
          <label htmlFor="number">Altura(cm)</label>
          <input
            type="number"
            name="altura"
            id="altura"
            placeholder="185"
            value={userData.altura}
          />
          <label htmlFor="number">Peso(kg)</label>
          <input
            type="number"
            name="peso"
            id="peso"
            placeholder="80"
            value={userData.peso}
          />
        </div>
        <Rodape />
      </div>
    </div>
  );
}
