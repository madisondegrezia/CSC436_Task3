import products from "../utils/products";
import { useState, useEffect } from "react";

const ArraySort = () => {
    const [sortedProducts, setSortedProducts] = useState([]);

    useEffect(() => {
       sortProducts(); 
    }, [])

    const sortProducts = () => {
        // sort prices in ascending order
        products.sort((a,b) => a.price - b.price);
        setSortedProducts(products.map(a => a.name));
    }

    return <div>
        <h3 className="text-center underline">Products from least to most expensive</h3>
        <p className="text-center">{sortedProducts.join(', ')} </p>
    </div> 

}

export default ArraySort;