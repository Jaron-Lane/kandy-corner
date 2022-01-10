import { React, useEffect, useState } from "react";

export const ProductList = () => {
    const [ products, setProducts ] = useState([]);

    useEffect(
        () => {
            return fetch("http://localhost:8088/products")
            .then(res => res.json())
            .then(setProducts())
        }, []
    )

    return (
        <>
            <div className="constainer__productList">
                <h2>Product List</h2>
                {
                    products.map((product) => {
                        return <p key = {`product--${product.id}`}>
                                <div>{product.name}</div>
                                <div>{product.price}</div>
                                <div>{product.productTypeId}</div>
                        </p>
                    })
                }
            </div>
        </>
    )
}