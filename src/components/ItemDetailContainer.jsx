import { Layout } from "./Layout"
import { useParams } from "react-router-dom"

export const ItemDetailContainer = ({ items }) => {
    const { id } = useParams()

    const item = items.find(item => item.id === id)

    return (
        <Layout>
            <article>
                <h1>{item.name}</h1>
                <img src={item.image} alt="autito" />
            </article>
        </Layout>
    )
}