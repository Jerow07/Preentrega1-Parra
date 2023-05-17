import { Layout } from './Layout'
import { useParams } from 'react-router-dom'
import { ItemList } from './ItemList'
export const ItemListContainer = ({ items }) => {
    const { id } = useParams()

    let autos = items

    if (id) {
        autos = items.filter(item => item.category === id)
    }

    return (
        <Layout>
            <ItemList autos={autos}></ItemList>
        </Layout>

    )
}