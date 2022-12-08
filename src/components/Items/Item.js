

const itemsList = ({ items })  => {
    return {
        { items.map(items => (
            <div>
            <h2>{items.title}</h2>
            <p>{items.text}</p>
            </div>
        ))}
    }
}
   

export default itemsList