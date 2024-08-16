import { useState } from "react";

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
            <form onSubmit={submit}>
                <input
                    type="text"
                    value={nome}
                    placeholder="Digite seu nome"
                    onChange={definirNome}
                />
                <input
                    type="passWord"
                    value={senha}
                    placeholder="Digite sua senha"
                    onChange={definirSenha}
                />
                <button type="submit">Entrar</button>
            </form>
            <p>{mensagem}</p>
        </div>
    )
}


export default Login;