import { useState, useMemo } from "react"

function CarrinhoDeCompras() {
    const [items, setItems] = useState([
        { id: 1, nome: 'SmartPhone', preco: 20 },
        { id: 1, nome: 'Pc Gamer', preco: 30 },
        { id: 1, nome: 'Teclado', preco: 10 },
    ])
    const exibirSmartPhone = useMemo(() => { return items.filter(item => item.preco === 20) }, [items])
    const exibirPcGamer = useMemo(() => { return items.filter(item => item.preco === 30) }, [items])
    return (
        <div className="Carrinho de compras">
            <div className="itens carrinho">
                {exibirSmartPhone.map(item => (<span key={item.id}>{item.nome}</span>))}
                <button>Comprar</button>
            </div>
            <div className="itens carrinho">
                {exibirPcGamer.map(item => (<span key={item.id}>{item.nome}</span>))}
                <button>Comprar</button>
            </div>
            <p>Total: R${items[0].preco+items[1].preco} </p>
        </div>
    )
}

export default CarrinhoDeCompras