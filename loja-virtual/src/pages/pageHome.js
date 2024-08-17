import '../css/cssBarraDeBusca.css'
import '../css/cssLista.css'

import BarraDeBusca from "../components/compBarraDeBusca";
import Header from "../components/compHeader";
import ListaDeProdutos from "../components/compLista";

function HomePage() {
    return (
        <div>
            <header className="header">
                <Header />
            </header>
            <BarraDeBusca />
            <ListaDeProdutos />
        </div>
    )
}

export default HomePage