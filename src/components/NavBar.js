import { CartWidget } from "./CartWidget"

export const NavBar = () => {
    return (
        <header className="flex justify-between items-center bg-blue-900 text-gray-200 p-4">
            <h1>AutoVisión</h1>

            <ul className="flex">
                <li><button className="bg-transparent border-none px-8 py-4 hover:opacity-50">Autos</button></li>
                <li><button className="bg-transparent border-none px-8 py-4 hover:opacity-50">Camionetas</button></li>
                <li><button className="bg-transparent border-none px-8 py-4 hover:opacity-50">Motos</button></li>
            </ul>

            <CartWidget />
        </header>
    )
}