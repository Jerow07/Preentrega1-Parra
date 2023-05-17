import { Layout } from "./Layout"
import { useParams } from "react-router-dom"
import { ItemDetail } from "./ItemDetail"   

export const ItemDetailContainer = ({ items }) => {
    const { id } = useParams()

    const item = items.find(item => item.id === id)

    return (
        <Layout>
            <ItemDetail item={item}></ItemDetail>
        </Layout>
    )
}