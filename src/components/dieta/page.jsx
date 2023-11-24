import Menu from "@/components/menu/page"
import Rodape from "@/components/rodape/page"
import './dieta.scss'

export default function Dieta() {
  return (
    <div className="container-dieta">
        <Menu/>
        <div className="dados">
            <div className="textos">
                <h1>Montagem de dieta simples</h1>
                <p>Digitar sempre valores inteiros, arredonde se precisar.</p>
            </div>
            <div className="inputs">
                <label htmlFor="">Genêro</label>
                <select name="genero" id="genero">
                    <option value="">Masculino</option>
                    <option value="">Feminino</option>
                </select>
                <label htmlFor="">Idade</label>
                <input type="text" name="idade" id="idade" />
                <label htmlFor="text">Altura(cm)</label>
                <input type="text" name="altura" id="altura"  placeholder="185"/>
                <label htmlFor="text">Peso(kg)</label>
                <input type="text" name="peso" id="peso" placeholder="80"/>
                <label htmlFor="">Nível de atividade</label>
                <select name="atividade" id="atividade">
                    <option value="">Sedentário(Exercício mínimo e trabalha sentado)</option>
                    <option value="">Levemente ativo - 1 a 2x na semana</option>
                    <option value="">Médio ativo - 3 a 5x na semana</option>
                    <option value="">Muito ativo - 6 a 7x na semana</option>
                    <option value="">Extremamente ativo - Atleta 2x ao dia</option>
                </select>
                <label htmlFor="">Qual o seu ojetivo</label>
                <select name="objetivo" id="objetivo">
                    <option value="">Emagrecer</option>
                    <option value="">Emagrecer agressivo</option>
                    <option value="">Manter</option>
                    <option value="">Ganhos secos</option>
                    <option value="">Ganhar agressivo</option>
                </select>
                <label htmlFor="">Estado atual</label>
                <select name="objetivo" id="objetivo">
                    <option value="">Magrelo(a)</option>
                    <option value="">Massa magra considerável</option>
                    <option value="">Falso magro(a)</option>
                    <option value="">Muito acima do peso</option>
                </select>
            </div>
            <div className="resp">
                <p>De acordo com seu objetivo você deve consumir um total de<span>2341</span>Kcal</p>
                
                <table border={1}>
                    <thead>
                        <tr>
                            <th>Carboidratos</th>
                            <th>Gorduras</th>
                            <th>Proteinas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>345</td>
                            <td>44</td>
                            <td>56</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <Rodape/>
        </div>
    </div>
  )
}
