import React from 'react';
import { LocationList } from "./locations/LocationList";
import { ProductList } from "./products/ProductList";
import "./KandyKorner.css";

export const KandyKorner = () => {
    return (
        <>
            <h2>Kandy Korner</h2>
            <LocationList />
            <ProductList />
        </>
    )
}