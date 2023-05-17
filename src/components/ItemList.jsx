
import { Link } from 'react-router-dom'

export const ItemList = ({autos}) => {
    return <ul className="p-8 flex flex-wrap">
        {autos.map(item =>
            <Link to={`/item/${item.id}`}>
                <li key={item.id}>
                    {item.make} {item.model}
                    <img src={item.image} alt="autito" class="h-64" />
                </li>
            </Link>
        )}
    </ul>
}