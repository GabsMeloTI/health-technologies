
'use client'
import './avaliacao.scss'
import Menu from '@/components/menu/page'
import Rodape from '@/components/rodape/page'
import { useState, useEffect } from 'react';


export default function Avalição() {
  const dataAtualString = new Date().toLocaleDateString();
  const [valor, setValor] = useState({
    sexo: "",
    idade: "",
    altura: "",
    peso: ""
  })

  const handleChange = (e) => {
    setValor((prevValor) => ({
      ...prevValor,
      [e.target.name]: e.target.value
    }));
    console.log(valor);
  };

  function calcularTaxa() {
    if (valor.sexo == "masculino") {
        const alturaMetros = valor.altura / 100;
        const imc = valor.peso / (alturaMetros * alturaMetros);
        const calculo =  (1.20 * imc) + (0.23 * valor.idade) - (10.8 * 1) - 5.4;
        return calculo.toFixed(2);
    } else if (valor.sexo == "feminino") {
      const alturaMetros = valor.altura / 100;
      const imc = valor.peso / (alturaMetros * alturaMetros);
      const calculo =  (1.20 * imc) + (0.23 * valor.idade) - (10.8 * 0) - 5.4; 
      return calculo.toFixed(2);
    }
  }

  const gorduraCorporal = calcularTaxa(); 

  return (
    <div className='container-ava'>
        <Menu/>
        <div className='dados'>
            <div className='txt'> 
                <h1>Percentual de Gordura</h1>
                <p>Digitar sempre valores inteiros, arredonde se precisar.</p> 
            </div>
            <form className='input'>
                <select name="sexo" id="sexo" value={valor.sexo} onChange={handleChange}>
                  <option value="escolha">Escolha</option>
                  <option value="masculino">Masculino</option>
                  <option value="feminino">Feminino</option>
                </select>
                <label htmlFor="text">Altura(cm)</label>
                <input type="text" name="altura" id="altura" value={valor.altura} onChange={handleChange} placeholder="185"/>
                <label htmlFor="text">Peso(kg)</label>
                <input type="text" name="peso" id="peso" value={valor.peso} onChange={handleChange} placeholder="80"/>
                <label htmlFor="text">% de gordura(BF)</label>
                <input type="text" name="gordura" id="gordura" value={gorduraCorporal}/>
                <label htmlFor="text">Data da avaliação:</label>
                <input type="text" name="data" id="data" value={dataAtualString} onChange={handleChange} placeholder="10/04/2023"/>
            </form>
            <Rodape/>
        </div>  
    </div>
  )
}
