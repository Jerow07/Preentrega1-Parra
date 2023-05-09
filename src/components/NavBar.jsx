import { CartWidget } from "./CartWidget"
import { Link } from "react-router-dom"

export const NavBar = () => {
    return (
        <header className="flex justify-between items-center bg-blue-900 text-gray-200 p-4">
            <h1><Link to="/">AutoVisión</Link></h1>

            <ul className="flex">
                <li><Link to="/category/car" className="bg-transparent border-none px-8 py-4 hover:opacity-50">Autos</Link></li>
                <li><Link to="/category/suv" className="bg-transparent border-none px-8 py-4 hover:opacity-50">Camionetas</Link></li>
                <li><Link to="/category/electric" className="bg-transparent border-none px-8 py-4 hover:opacity-50">Electricos</Link></li>
            </ul>

            <CartWidget />
        </header>
    )
}