import React from 'react';

const Reviewitems = (props) => {
    //console.log(props);
    const{name,quantity,key,price} = props.product;
    const reviewItemStyle={
        borderBottom: '1px solid lightgray',
        padding: '10px',
        marginLeft: '40px'
    };

    return (
        <div style={reviewItemStyle} className='review-item'>
            <h4 className='product-name'>{name}</h4>
            <p>Quantity: {quantity}</p>
            <p>Price : {price}</p>
            <button onClick={() =>props.removeProduct(key)} className='add-button'>Remove</button>
        </div>
    );
};

export default Reviewitems;