import { useEffect, useState } from "react";
import Product from './product'

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/")
            .then((res) => res.json())
            .then((items) => setProducts(items));
    }, []);

    return (
        <>
            {
                products.map(product =>
                    <Product
                        key={product.id}
                        title={product.title}
                        category={product.category}
                        image={product.image}
                        description={product.description}
                        price={product.price}
                        rating={product.rating}
                    />
                )
            }
        </>
    );
};

export default Products;