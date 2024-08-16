import { useState, useMemo } from "react"

function ListaDeProdutos() {
    const [items, setItems] = useState([
        { id: 1, nome: 'Produto A', preco: 20 },
        { id: 1, nome: 'Produto B', preco: 20 },
        { id: 1, nome: 'Produto C', preco: 20 },
    ])
    const filtroItem = useMemo(() => { return items.filter(item => item.preco > 0) }, [items])
    return (
        <div>
            {filtroItem.map(item => (<span key={item.id}>{item.nome}</span>))}
        </div>
    )

}

export default ListaDeProdutos