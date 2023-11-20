
import './avaliacao.scss'
import Menu from '@/components/menu/page'
import Rodape from '@/components/rodape/page'

export default function Avalição() {
  return (
    <div className='container-ava'>
        <Menu/>
        <div className='dados'>
            <div className='txt'> 
                <h1>REGISTRAR AVALIAÇÃO</h1>
                <p>Digitar sempre valores inteiros, arredonde se precisar.</p> 
            </div>
            <div className='input'>
                <label htmlFor="text">Altura(cm)</label>
                <input type="text" name="altura" id="altura"  placeholder="185"/>
                <label htmlFor="text">Cintura(cm)</label>
                <input type="text" name="cintura" id="cintura" placeholder="50"/>
                <label htmlFor="text">Pescoço(cm)</label>
                <input type="text" name="pescoço" id="pescoço" placeholder="20"/>
                <label htmlFor="text">Peso(kg)</label>
                <input type="text" name="peso" id="peso" placeholder="80"/>
                <label htmlFor="text">% de gordura(BF)</label>
                <input type="text" name="gordura" id="gordura" placeholder="% de gordura"/>
                <label htmlFor="text">Data da avaliação:</label>
                <input type="text" name="data" id="data" placeholder="10/04/2023"/>
                <button>Registrar avaliação</button>
            </div>
            <Rodape/>
        </div>  
    </div>
  )
}
