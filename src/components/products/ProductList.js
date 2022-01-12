import { React, useEffect, useState } from "react";

export const ProductList = () => {
    const [ products, setProducts ] = useState([]);

    useEffect(
        () => {
            fetch("http://localhost:8088/products?_expand=productType")
            .then(res => res.json())
            .then((data) => {
                setProducts(data)
            })
        }, []
    )

    return (
        <>
            <div className="container__productList">
                <h3>Product List</h3>
                {
                    products.map((product) => {
                        return (
                            <div key = {`product--${product.id}`}>
                                <p>Product: {product.name}</p>
                                <p>Price: ${product.price}</p>
                                <p>Type: {product.productType.type}</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}