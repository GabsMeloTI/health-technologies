import Image from "next/image"
import Link from "next/link"
import './healthsolu/login/login.scss'

export default function Login() {
    return(
        <div className="container-box">
            <div className="geral">
                <div className="interação">
                    <h1>LOGIN</h1>
                    <div className="inputs">
                        <label htmlFor="text">Email</label>
                        <input type="text" name="email" id="email"  placeholder="@gmail.com"/>
                        <label htmlFor="text">Senha</label>
                        <input type="text" name="senha" id="senha" placeholder="Senha"/>
                    </div>
                    <button>Entrar</button>
                    <p>Não tem cadastro? Então <Link href='/healthsolu/cadastro'>cadastre-se.</Link></p>
                </div>
                <div className="img-text">
                    <Image src='/img/imgLogin.png' alt="" width={900} height={800}/>
                </div>
            </div>
        </div>
    )
}