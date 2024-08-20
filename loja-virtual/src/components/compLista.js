import { useState, useMemo } from "react"

import ImgCelular from "./imgSmartPhone"
import ImgPc from "./imgPcGamer"
import ImgTeclado from "./imgTeclado"
import ImgMouse from "./imgMouse"
import ImgMonitor from "./imgMonitor"
import ImgHeadset from "./imgHeadset"

function ListaDeProdutos() {
    const [items, setItems] = useState([
        { id: 1, nome: 'SmartPhone', preco: 1500 },
        { id: 2, nome: 'Pc Gamer', preco: 5000 },
        { id: 3, nome: 'Teclado', preco: 250 },
        { id: 4, nome: 'Mouse', preco: 180 },
        { id: 5, nome: 'Headset', preco: 130 },
        { id: 6, nome: 'Monitor', preco: 1200 },
    ])
    const exibirSmartPhone = useMemo(() => { return items.filter(item => item.preco === 1500) }, [items])
    const exibirPcGamer = useMemo(() => { return items.filter(item => item.preco === 5000) }, [items])
    const exibirTeclado = useMemo(() => { return items.filter(item => item.preco === 250) }, [items])
    const exibirMouse = useMemo(() => { return items.filter(item => item.preco === 180) }, [items])
    const exibirHeadset = useMemo(() => { return items.filter(item => item.preco === 130) }, [items])
    const exibirMonitor = useMemo(() => { return items.filter(item => item.preco === 1200) }, [items])
    return (
        <div>
            <h2 className="textP">Principais produtos</h2>
            <div className="listaProdutosP">
                <div className='boxP'>
                    <div className="listaItensP">
                        <ImgCelular />
                        {exibirSmartPhone.map(item => (<span key={item.id}>{item.nome}</span>))}
                        <button className="buttonP">Comprar</button>
                    </div>
                </div>
                <div className='boxP'>
                    <div className="listaItensP">
                        <ImgPc />
                        {exibirPcGamer.map(item => (<span key={item.id}>{item.nome}</span>))}
                        <button className="buttonP">Comprar</button>
                    </div>
                </div>
                <div className='boxP'>
                    <div className="listaItensP">
                        <ImgTeclado />
                        {exibirTeclado.map(item => (<span key={item.id}>{item.nome}</span>))}
                        <button className="buttonP">Comprar</button>
                    </div>
                </div>
                <div className='boxP'>
                    <div className="listaItensP">
                        <ImgMouse />
                        {exibirMouse.map(item => (<span key={item.id}>{item.nome}</span>))}
                        <button className="buttonP">Comprar</button>
                    </div>
                </div>
                <div className='boxP'>
                    <div className="listaItensP">
                        <ImgHeadset />
                        {exibirHeadset.map(item => (<span key={item.id}>{item.nome}</span>))}
                        <button className="buttonP">Comprar</button>
                    </div>
                </div>
                <div className='boxP'>
                    <div className="listaItensP">
                        <ImgMonitor />
                        {exibirMonitor.map(item => (<span key={item.id}>{item.nome}</span>))}
                        <button className="buttonP">Comprar</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListaDeProdutos