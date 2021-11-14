import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const cart = props.cart;
   //const total = cart.reduce((total, prd) => total + prd.price,0);
   let total=0;
   for(let i=0;i<cart.length;i++){
       const product = cart[i];
       total = (total + product.price)*product.quantity;
      
   }
   let shiping = 0;
   if(total>35){
       shiping = 0;
   }else if(total > 30){
       shiping = 4.99;
   }else if(total > 0){
       shiping= 12.99;
   }

   const tex =( total/10);
   const grandtotal = (total + shiping + tex);

   const formateNumber = num =>{
       const precision = num.toFixed(2);
       return Number(precision);
   }

    return (
        <div>
            <h3>Order Summery</h3>
            <p>Item Order : {cart.length}</p>
            <p>Shiping Price : {shiping}</p>
            <p>Product Price : {formateNumber(total)}</p>
            <p>Tex : {formateNumber(tex)}</p>
            <p>Total Price : {formateNumber(grandtotal)}</p>
            <br />
            {
                props.children
            }
        </div>
    );
};

export default Cart;