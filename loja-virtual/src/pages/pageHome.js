import BarraDeBusca from "../components/compBarraDeBusca";
import Header from "../components/compHeader";
import ListaDeProdutos from "../components/compLista";

function HomePage() {
    return (
        <div>
            <Header />
            <BarraDeBusca />
            <ListaDeProdutos />
        </div>
    )
}

export default HomePage