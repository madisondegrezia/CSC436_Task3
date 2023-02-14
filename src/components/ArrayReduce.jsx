import products from "../utils/products";

const ArrayReduce = () => {

    const totalCost = products.reduce((accumulator, product) => {
        return accumulator + product.price;
    }, 0);

    return  <div>
                <p className="text-center">Total cost of products: ${totalCost}</p>
            </div>

}

export default ArrayReduce;