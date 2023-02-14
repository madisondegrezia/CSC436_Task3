import products from "../utils/products";

const ArrayMap = () => {

    return <ul>
        {products.map((product, index) => {
            return <li className="text-center" key={index}>{index+1}. {product.name}</li>
        })}
    </ul>;
}

export default ArrayMap;