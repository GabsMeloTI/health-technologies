import Menu from "@/components/menu/page"
import Rodape from "@/components/rodape/page"
import './calculo.scss'

export default function TMB() {
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
            </div>
            <div className="resp">
                <p>Sua taxa metábolica basal é de <span>2341</span>Kcal</p>
            </div>
            <Rodape/>
        </div>
    </div>
  )
}
