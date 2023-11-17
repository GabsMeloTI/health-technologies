import Link from "next/link"
import './login.scss'

export default function Login() {
    return(
        <div className="container-box">
            <div className="input">
                <h1>LOGIN</h1>
                <label htmlFor="text">Email:</label>
                <input type="text" name="email" id="email" />
                <label htmlFor="text">Senha:</label>
                <input type="text" name="senha" id="senha" />
                <p>Não tem cadastro? Então <Link href='/healthsolu'>cadastre-se</Link></p>
            </div>
            <div className="img-text">
                <h1>APRESENTAÇÃO</h1>
                <p>Nossa empresa é lider do mercado e seriamente capacitada para cuidar da sua saúde e bem está no seu dia a dia. Proporcionamos sempre o melhor para o nosso cliente!</p>
            </div>
        </div>
    )
}