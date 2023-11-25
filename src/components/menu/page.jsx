'use client'
import Image from "next/image"
import Link from "next/link"
import './menu.scss'
import { useEffect, useState } from "react";

export default function Menu() {
    const [userData, setUserData] = useState(" ");

    useEffect(() => {
      const storedUser = JSON.parse(sessionStorage.getItem('user'));
      if (storedUser) {
        setUserData(storedUser);
      }
    }, []);

    return(
        <div className='option'>
            <div className='user'>
                <Image src='/img/logoHealth.png' alt='' width={200} height={100}/>
            </div>
            <div className='links'>
                <Link href='' className='user-link'>
                    <Image src='/img/user.png' alt="" width={25} height={50}/>
                    <p>{userData.nome}</p>
                </Link>
                <Link href='/healthsolu/avaliacao'><p>Percentual de Gordura</p></Link>
                <Link href='/healthsolu/imc'><p>Calcular IMC</p></Link>
                <Link href='/healthsolu/tmb'><p>Calcular TMB</p></Link>
                <Link href='/healthsolu/dados'><p>Meus dados</p></Link>
            </div>
        </div>
    )
}