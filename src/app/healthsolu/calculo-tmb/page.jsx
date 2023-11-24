'use client'
import Menu from "@/components/menu/page"
import Rodape from "@/components/rodape/page"
import './calculo.scss'
import { useState } from "react"

export default function TMB() { 
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

  function calcularTMB() {
    if (valor.altura === " " || valor.peso === " " || valor.idade == " " || valor.sexo ==  " " || valor.altura === 0 || valor.peso === 0 || valor.idade == 0 || valor.sexo ==  0) {
      return 0;
    } else if (valor.sexo == "masculino") {
        const alturaMetros = valor.altura / 100;
        const calculo = 88.362 + (13.397 * valor.peso) + (4.799 * alturaMetros) - (5.677 * valor.idade)
        return calculo.toFixed(2);
    } else if (valor.sexo == "feminino") {
        const alturaMetros = valor.altura / 100;
        const calculo = 447.593 + (9.247 * valor.peso) + (3.098 * alturaMetros) - (4.330 * valor.idade)
        return calculo.toFixed(2);
    }
  }

  const resultadoTMB = calcularTMB(); 

  return (
    <div className="container-tmb">
        <Menu/>
        <div className="dados">
            <div className="textos">
                <h1>TMB: Taxa metábolica basal</h1>
                <p>Digitar sempre valores inteiros, arredonde se precisar.</p>
                <div className="explicacao">
                    <p>A Taxa Metabólica Basal ou TMB é a quantidade energia em quilocalorias (Kcal) que seu corpo gasta para sobreviver, ou seja, realizar todas as atividades metabólicas em repouso durante um dia.</p>
                </div>
            </div>
            <div className="inputs">
                <label htmlFor="text">Sexo</label>
                <select name="sexo" id="sexo" value={valor.sexo} onChange={handleChange}>
                    <option value="escolha">Escolha</option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                </select>
                <label htmlFor="text">Idade</label>
                <input type="number" name="idade" id="idade" value={valor.idade} onChange={handleChange}/>
                <label htmlFor="text">Altura(cm)</label>
                <input type="number" name="altura" id="altura"  placeholder="185" value={valor.altura} onChange={handleChange}/>
                <label htmlFor="text">Peso(kg)</label>
                <input type="number" name="peso" id="peso" placeholder="80" value={valor.peso} onChange={handleChange}/>
            </div>
            <div className="resp">
                <p>Sua taxa metábolica basal é de <span>{resultadoTMB}</span>Kcal</p>
            </div>
            <Rodape/>
        </div>
    </div>
  )
}
