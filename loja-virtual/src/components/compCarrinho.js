import { useState, useMemo } from "react"

import ImgCelular from "./imgSmartPhone"
import ImgPc from "./imgPcGamer"
import ImgTeclado from "./imgTeclado"
import ImgMouse from "./imgMouse"
import ImgMonitor from "./imgMonitor"
import ImgHeadset from "./imgHeadset"

function CarrinhoDeCompras() {
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
            <div className="listaProdutosC">
                <h2 className="textC">Carrinho De Compras</h2>
                <div className='boxC'>
                    <div className="listaItensC">
                        <ImgCelular />
                        <div className='nomeC'>
                            {exibirSmartPhone.map(item => (<span key={item.id}>{item.nome}</span>))}
                            <button className="buttonC">Remover</button>
                        </div>
                    </div>
                </div>
                <div className='boxC'>
                    <div className="listaItensC">
                        <ImgPc />
                        <div className='nomeC'>
                            {exibirPcGamer.map(item => (<span key={item.id}>{item.nome}</span>))}
                            <button className="buttonC">Remover</button>
                        </div>
                    </div>
                </div>
                <div className='boxC'>
                    <div className="listaItensC">
                        <ImgMonitor />
                        <div className='nomeC'>
                            {exibirMonitor.map(item => (<span key={item.id}>{item.nome}</span>))}
                            <button className="buttonC">Remover</button>
                        </div>
                    </div>
                </div>
                <div className='boxC'>
                    <div className="listaItensC">
                        <ImgTeclado />
                        <div className='nomeC'>
                            {exibirTeclado.map(item => (<span key={item.id}>{item.nome}</span>))}
                            <button className="buttonC">Remover</button>
                        </div>
                    </div>
                </div>
                <div className='boxC'>
                    <div className="listaItensC">
                        <ImgMouse />
                        <div className='nomeC'>
                            {exibirMouse.map(item => (<span key={item.id}>{item.nome}</span>))}
                            <button className="buttonC">Remover</button>
                        </div>
                    </div>
                </div>
                <div className='boxC'>
                    <div className="listaItensC">
                        <ImgHeadset />
                        <div className='nomeC'>
                            {exibirHeadset.map(item => (<span key={item.id}>{item.nome}</span>))}
                            <button className="buttonC" onSubmit={alertar}>Remover</button>
                        </div>
                    </div>
                </div>
                <div className="finalCompra">
                    <h2>Preço total: R$8.260</h2>
                    <input
                        className="compra"
                        type="button"
                        value="FinalizarCompra"
                    />
                </div>
            </div>
        </div>
    )
}


export default CarrinhoDeCompras