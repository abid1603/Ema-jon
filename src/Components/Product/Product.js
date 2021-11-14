import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const Product = (props) => {
    // console.log(props);
    const {img, name,seller,price,stock,key} = props.product;
    return (
        <div className='product'>
            <div className='product-img'>
                <img src={img} alt="" />
            </div>
            <div>
            <h4 className='product-name'><Link to={'/product/'+key}>{name}</Link></h4>
            <p><small>By: {seller}</small></p>
            <p>${price}</p>
            <p><small>Only {stock} left in Stock - Order Now</small></p>
            { props.showbutton ===true && <button onClick={() => props.handleAddProduct(props.product)} className='add-button'> 
            <FontAwesomeIcon icon={faShoppingCart } /> add to cart</button>}
            </div>
        </div>
    );
};

export default Product;