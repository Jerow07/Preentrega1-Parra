import { Layout } from './Layout'
import { useParams, Link } from 'react-router-dom'

export const ItemListContainer = ({ items }) => {
    const { id } = useParams()

    let autos = items

    if (id) {
        autos = items.filter(item => item.category === id)
    }

    return (
        <Layout>
            <ul className="p-8 flex flex-wrap">
                {autos.map(item =>
                    <Link to={`/item/${item.id}`}>
                        <li key={item.id}>
                            {item.make} {item.model}
                            <img src={item.image} alt="autito" class="h-64" />
                        </li>
                    </Link>
                )}
            </ul>
        </Layout>

    )
}