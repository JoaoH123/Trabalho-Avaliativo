import { useState, useMemo } from "react"

function ListaDeProdutos() {
    const [items, setItems] = useState([
        { id: 1, nome: 'SmartPhone', preco: 20 },
        { id: 1, nome: 'Pc Gamer', preco: 30 },
        { id: 1, nome: 'Teclado', preco: 10 },
    ])
    const exibirSmartPhone = useMemo(() => { return items.filter(item => item.preco === 20) }, [items])
    const exibirPcGamer = useMemo(() => { return items.filter(item => item.preco === 30) }, [items])
    const exibirTeclado = useMemo(() => { return items.filter(item => item.preco === 10) }, [items])
    return (
        <div className="lista de produtos">
            <div className="lista itens">
                {exibirSmartPhone.map(item => (<span key={item.id}>{item.nome}</span>))}
                <button>Comprar</button>
            </div>
            <div className="lista itens">
                {exibirPcGamer.map(item => (<span key={item.id}>{item.nome}</span>))}
                <button>Comprar</button>
            </div>
            <div className="lista itens">
                {exibirTeclado.map(item => (<span key={item.id}>{item.nome}</span>))}
                <button>Comprar</button>
            </div>
        </div>
    )
}

export default ListaDeProdutos