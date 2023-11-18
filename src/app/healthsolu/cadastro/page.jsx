import Image from "next/image"
import Link from "next/link"
import './cadastro.scss'

export default function Login() {
    return(
        <div className="container-box">
            <div className="geral">
                <div className="interação">
                    <h1>CADASTRO</h1>
                    <div className="inputs">
                        <label htmlFor="text">Nome completo</label>
                        <input type="text" name="nome" id="nome"  placeholder="João Silva"/>
                        <label htmlFor="text">Data de nascimento</label>
                        <input type="date" name="nascimento" id="nascimento" placeholder="09/04/1963"/>
                        <label htmlFor="text">Email</label>
                        <input type="text" name="email" id="email"  placeholder="@gmail.com"/>
                        <label htmlFor="text">Senha</label>
                        <input type="password" name="senha" id="senha" placeholder="Senha"/>
                        <label htmlFor="text">Confirme sua senha</label>
                        <input type="password" name="confirmação" id="confirmação" placeholder="Confirmação"/>
                        <label htmlFor="text">Sexo</label>
                        <input type="text" name="sexo" id="sexo" placeholder="Sexo"/>
                    </div>
                    <button>Cadastrar-me</button>
                    <p>Já possui cadastro? Então faça o <Link href='/healthsolu/login'>login.</Link></p>
                </div>
                <div className="img-text">
                    <Image src='/img/imgLogin.png' alt="" width={900} height={800}/>
                </div>
            </div>
        </div>
    )
}