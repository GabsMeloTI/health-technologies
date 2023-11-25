'use client'
import Menu from "@/components/menu/page";
import Rodape from "@/components/rodape/page";
import Image from "next/image";
import './imc.scss'
import { useState } from "react";

export default function IMC() {
  const [valor, setValor] = useState({
    peso: "",
    altura: ""
  });

  const handleChange = (e) => {
    setValor((prevValor) => ({
      ...prevValor,
      [e.target.name]: e.target.value
    }));
  };
  

  

  function calcularIMC() {
    if (valor.altura === " " || valor.peso === " " || valor.altura === 0 || valor.peso === 0 ) {
      return 0;
    } else {
      const alturaMetros = valor.altura / 100;
      const calculo = valor.peso / (alturaMetros * alturaMetros);
      return calculo.toFixed(2);
    }
  }

  const resultadoIMC = calcularIMC(); 

  return (
    <div className="container-imc">
      <Menu />
      <div className="dados">
        <div className="textos">
          <h1>IMC: Índice de massa corporal</h1>
          <p>Digitar sempre valores inteiros, arredonde se precisar.</p>
          <div className="explicacao">
            <p>
              O índice de massa corporal é uma medida internacional usada para
              calcular se uma pessoa está no peso ideal.
            </p>
          </div>
        </div>
        <div className="inputs">
          <label htmlFor="number">Altura(cm)</label>
          <input
            type="number"
            name="altura"
            id="altura"
            placeholder="185"
            value={valor.altura}
            onChange={handleChange}
          />
          <label htmlFor="number">Peso(kg)</label>
          <input
            type="number"
            name="peso"
            id="peso"
            placeholder="80"
            value={valor.peso}
            onChange={handleChange}
          />
        </div>
        <div className="resp">
          <p>
            O seu índice de massa corporal é de{" "}
            <span>{resultadoIMC}</span>
          </p>
        </div>
        <div className="pesos-geral">
                <h1>Entenda o resultado</h1>
                <div className="pesos">
                    <div className="peso">
                        <Image src='/img/obs3r.png' alt='' width={150} height={100}/>
                        <p>Acima de 40,0</p>
                        <h2>Obesidade grau III</h2>
                        <p>Aqui o sinal é vermelho, com forte probabilidade de já existirem doenças muito graves associadas. O tratamento deve ser ainda mais urgente.</p>
                    </div>
                    <div className="peso">
                        <Image src='/img/obs2r.png' alt='' width={150} height={100}/>
                        <p>Entre 35,0 e 39,9</p>
                        <h2>Obesidade grau II</h2>
                        <p>Mesmo que seus exames aparentem estar normais, é hora de se cuidar, iniciando mudanças no estilo de vida com o acompanhamento próximo de profissionais de saúde.</p>
                    </div>
                    <div className="peso">
                        <Image src='/img/obs1r.png' alt='' width={150} height={100}/>
                        <p>Entre 30,0 e 34,9</p>
                        <h2>Obesidade grau I</h2>
                        <p>Sinal de alerta! Chegou na hora de se cuidar, mesmo que seus exames sejam normais. Vamos dar início a mudanças hoje! Cuide de sua alimentação. Você precisa iniciar um acompanhamento com nutricionista e/ou endocrinologista.</p>
                    </div>
                    <div className="peso">
                        <Image src='/img/sobrepesor.png' alt='' width={150} height={100}/>
                        <p>Entre 25,0 e 29,9</p>
                        <h2>Sobrepeso</h2>
                        <p>Ele é, na verdade, uma pré-obesidade e muitas pessoas nessa faixa já apresentam doenças associadas, como diabetes e hipertensão. Importante rever hábitos e buscar ajuda antes de, por uma série de fatores, entrar na faixa da obesidade pra valer.</p>
                    </div>
                    <div className="peso">
                        <Image src='/img/normalr.png' alt='' width={150} height={100}/>
                        <p>Entre 18,6 e 24,9</p>
                        <h2>Normal</h2>
                        <p>Que bom que você está com o peso normal! E o melhor jeito de continuar assim é mantendo um estilo de vida ativo e uma alimentação equilibrada.</p>
                    </div>
                    <div className="peso">
                        <Image src='/img/abaixor.png' alt='' width={150} height={100}/>
                        <p>18,5 ou menos</p>
                        <h2>Abaixo do normal</h2>
                        <p>Procure um médico. Algumas pessoas têm um baixo peso por características do seu organismo e tudo bem. Outras podem estar enfrentando problemas, como a desnutrição. É preciso saber qual é o caso.</p>
                    </div>
                </div>
            </div>
        <Rodape />
      </div>
    </div>
  );
}
