import Menu from "@/components/menu/page"
import './dados.scss'
import Rodape from "@/components/rodape/page"

export default function Dados() {
  return (
    <div className="container-dados">
        <Menu/>
        <div className="dados">
            <div className="textos">
                <h1>Meus dados</h1>
                <p>Sempre mantenha seus dados atualizados.</p>
            </div>
            <div className="inputs">
                <label htmlFor="text">Nome</label>
                <input type="text" name="nome" id="nome"  placeholder="João Silva"/>
                <label htmlFor="text">Celular</label>
                <input type="text" name="celular" id="celular" placeholder="(11)90000-0000"/>
                <label htmlFor="text">Data de nascimento</label>
                <input type="date" name="nascimento" id="nascimento" placeholder="09/04/1963"/>     
                <label htmlFor="">Genêro</label>
                <select name="sexo" id="sexo">
                    <option value="escolha">Escolha</option>
                    <option value="masculino">Masculino</option>
                    <option value="feminino">Feminino</option>
                </select>
                <label htmlFor="text">Email</label>
                <input type="text" name="email" id="email" placeholder="@gmail.com"/>      
                <button>Salvar alterações</button>  
            </div>
            <Rodape/>
        </div>
    </div>
  )
}
