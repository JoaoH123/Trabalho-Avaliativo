import { Link } from "react-router-dom"

function Header() {
    return (
        <div className="flex">
            <div className="item">
                <Link to='/Login'> Login</Link>
            </div>
            <div className="item">
                <Link to='/'> Pagina principal</Link>
            </div>
            <div className="item">
                <Link to='/Produtos'> Produtos</Link>
            </div>
        </div>
    )
}

export default Header