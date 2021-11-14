import React from 'react';
import { useParams } from 'react-router';
import fakeData from '../../fakeData';
import Product from '../Product/Product';


const ProductDetailse = () => {
    const {productkey} = useParams();
    const product = fakeData.find(pd => pd.key === productkey);
    console.log(product);
    return (
        <div> 
            <h1>Product Name {productkey}</h1>
            <Product showbutton={false} product={product}></Product>
        </div>
    );
};

export default ProductDetailse;