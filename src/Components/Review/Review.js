import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
import Reviewitems from '../ReviewItems/Reviewitems';
import { removeFromDatabaseCart } from "../../utilities/databaseManager";
import  Cart  from "../Cart/Cart";
import './Review.css'
import image from '../../images/giphy.gif';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);

    const handelPlaceOrder = () =>{
        //console.log("order Placed");
        setCart([]);
        setOrderPlaced(true);
        processOrder();

    }

    const removeProduct = (productkey) => {
        const newCart = cart.filter(pd => pd.key !==productkey);
        setCart(newCart);
        removeFromDatabaseCart(productkey);
    }

    useEffect(()=> {
        const savedCart = getDatabaseCart();
        const productkeys = Object.keys(savedCart);
       //console.log(savedCart);
       const cartproducts = productkeys.map(key => {
        const product = fakeData.find(pd => pd.key === key);
        product.quantity = savedCart[key];
        return product;
       });
       setCart(cartproducts);
      // console.log(cartproducts);

    }, [])
    let thank;
    if(orderPlaced){
        thank = <img src={image} alt="" />
    }
    return (
        <div className='twin-container'>
            <div className="product-container">
            {
                cart.map(pd => <Reviewitems
                     key={pd.key} product = {pd}
                     removeProduct={removeProduct}
                     ></Reviewitems>)
            }
            {
                thank 
            }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button onClick={handelPlaceOrder} className='add-button'>Place Order</button>
                </Cart>
            </div>
        </div>
    );
};

export default Review;