import '../css/cssLogin.css'
import { useState } from "react";
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
            <div className='div'>
                <div className='container'>
                    <div className='campoLogin'>
                        <h3 className='titulo'>Login</h3>
                        <form onSubmit={submit} className='login'>
                            <p className='text'>Nome de usuário</p>
                            <input
                                type="text"
                                value={nome}
                                placeholder="Digite seu nome"
                                onChange={definirNome}
                            />
                            <p className='text'>Senha</p>
                            <input
                                type="passWord"
                                value={senha}
                                placeholder="Digite sua senha"
                                onChange={definirSenha}
                            />
                            <button type="submit" className='button'>Entrar</button>
                        </form>
                    </div>
                </div>
                <h2 className='mensagem'>{mensagem}</h2>
            </div>
        </div>
    )
}


export default Login;