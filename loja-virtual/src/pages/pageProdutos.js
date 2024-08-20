import '../css/cssCarrinho.css'
import '../css/cssHeader.css'

import Header from "../components/compHeader";
import CarrinhoDeCompras from "../components/compCarrinho"

function Produtos() {
    return (
        <div>
            <header className="header">
                <Header />
            </header>
            <CarrinhoDeCompras />
        </div>
    )
}

export default Produtos;