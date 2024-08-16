import { Link } from "react-router-dom"

function Header() {
    return (
        <div>
        <Link to='/Login'> Login</Link>
        <Link to='/'> Pagina principal</Link>
        <Link> Produtos</Link>
        </div>
    )
}

export default Header