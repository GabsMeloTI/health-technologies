import Image from "next/image"
import Link from "next/link"
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import './menu.scss'

export default function Menu() {
    // const [userData, setUserData] = useState(null); // Make sure this line is correct

    // useEffect(() => {
    //   const storedUser = localStorage.getItem('user');
    //   if (storedUser) {
    //     const userData = JSON.parse(storedUser);
    //     setUserData(userData); // Ensure that this line has the correct function name
    //   }
    // }, []);
    const router = useRouter();
    const userId = router.query.id;

    useEffect(() => {
        // Faça algo com o userId, por exemplo, realizar uma pesquisa por ID
        console.log("ID do usuário:", userId);
        
        // ... (restante do código)
    }, [userId]);

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
                <Link href='/healthsolu/imc'><p>Calcular IMC</p></Link>
                <Link href='/healthsolu/tmb'><p>Calcular TMB</p></Link>
                <Link href='/healthsolu/dieta'><p>Dieta simples</p></Link>
                <Link href='/healthsolu/dados'><p>Meus dados</p></Link>
            </div>
        </div>
    )
}