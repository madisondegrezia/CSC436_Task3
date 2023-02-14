import products from "../utils/products";

const ArrayFilter = () => {
    return <ul className="text-center">
        {
            products.filter(( {onSale} ) => onSale === true).map(({id, name, price}) => 
            <li key={id}>{name}: ${price}</li>)
        }
    </ul>

}

export default ArrayFilter;