import { useState } from "react";

import '../css/cssLogin.css'

import Header from '../components/compHeader';

function Login() {
    const [nome, setNome] = useState('')
    const [senha, setSenha] = useState('')
    const [mensagem, setMensagem] = useState('')

    const definirNome = (event) => {
        setNome(event.target.value);
    }
    const definirSenha = (event) => {
        setSenha(event.target.value)
    }
    const submit = (event) => {
        event.preventDefault();
        setMensagem(`Você entrou com ${nome}`)
    }
    return (
        <div>
            <header className='header'>
                <Header />
            </header>
            <div className='divL'>
                <div className='containerL'>
                    <div className='campoLoginL'>
                        <h3 className='tituloL'>Login</h3>
                        <form onSubmit={submit} className='loginL'>
                            <p className='textL'>Nome de usuário</p>
                            <input
                                type="textL"
                                value={nome}
                                placeholder="Digite seu nome"
                                onChange={definirNome}
                            />
                            <p className='textL'>Senha</p>
                            <input
                                type="passWord"
                                value={senha}
                                placeholder="Digite sua senha"
                                onChange={definirSenha}
                            />
                            <button type="submit" className='buttonL'>Entrar</button>
                        </form>
                    </div>
                </div>
                <h2 className='mensagemL'>{mensagem}</h2>
            </div>
        </div>
    )
}


export default Login;