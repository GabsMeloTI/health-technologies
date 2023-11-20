import Image from "next/image"
import Link from "next/link"
import './menu.scss'

export default function Menu() {
    return(
        <div className='option'>
            <div className='user'>
                <Image src='/img/logoHealth.png' alt='' width={200} height={100}/>
            </div>
            <div className='links'>
                <Link href='' className='user-link'>
                    <Image src='/img/user.png' alt="" width={25} height={50}/>
                    <p>Usuário</p>
                </Link>
                <Link href='/healthsolu/avaliacao'><p>Avaliações</p></Link>
                <Link href='/healthsolu/calculo-imc'><p>Calcular IMC</p></Link>
                <Link href='/healthsolu/calculo-tmb'><p>Calcular TMB</p></Link>
                <Link href='/healthsolu/dieta'><p>Dieta simples</p></Link>
                <Link href='/healthsolu/dados'><p>Meus dados</p></Link>
            </div>
        </div>
    )
}