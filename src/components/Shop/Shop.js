import React, { useEffect, useState } from 'react';
import './Shop.css'

const Shop = () => {

    // To load the data
    const [products, setProducts] = useState([])

    // To set the data
    useEffect( () => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    return (
        <div className='shop-container'>
            <div className="products-container">
                <h3>This is products: {products.length}</h3>
            </div>

           <div className="cart-container">
                <h3>Order Summary</h3>
            </div>
        </div>
    );
};

export default Shop;