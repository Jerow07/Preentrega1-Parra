


export const ItemDetail = ({ item  }) => {
    return (
            <article>
                <h1>{item.name}</h1>
                <img src={item.image} alt="autito" />
            </article>
       
    )}