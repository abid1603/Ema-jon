import React, { useEffect, useState } from 'react';
import "./Shop.css"
import fakeData from '../../fakeData'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
    //console.log(fakeData);
    const first10 = fakeData.slice(0,10);
    const [product, setProduct] = useState(first10);
    const [cart, setCart] =useState([]);

    useEffect(()=> {
        const savedCart = getDatabaseCart();
        //console.log(savedCart);
        const productkyes = Object.keys(savedCart);
        const previouscart = productkyes.map(pdkey =>{
            const product = fakeData.find(pd => pd.key === pdkey);
            product.quantity = savedCart[pdkey];
            //console.log(pdkey, savedCart[pdkey]);
            return product;
        })
        setCart(previouscart);
    }, [])

    const handleAddProduct =(product) =>{
       const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity +1;
            sameProduct.quantity = count;
            const others =cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
            
        }else{
            product.quantity = 1;
            newCart =[...cart, product];
        }
        setCart(newCart); 
       // console.log(newCart);
        addToDatabaseCart(product.key,count);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    product.map(pd => <Product 
                        handleAddProduct={handleAddProduct} 
                        product={pd}
                        showbutton={true}
                        key={pd.key}
                        ></Product>) 
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}><Link to='/review'><button className='add-button'>Review Order</button></Link></Cart>
            </div>
        </div>
    );
};

export default Shop;