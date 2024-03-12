import React from 'react';
import '../styles/bottleStyle.css'

const Bottle = ({bottle,handleAddToCart}) => {
    const {name,price,img,ratings}=bottle;
    return (
        <div className='singleBottle'>
            <div style={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center'
            }}>
                <h2>{name}</h2>
                <h3>{ratings}★</h3>
            </div>
            <img src={img} alt=""/>
            <div style={{
                display:'flex',
                justifyContent:'space-between',
                alignItems:'center'
            }}>
                <h3>price: ${price}</h3>
                <button onClick={()=> handleAddToCart(bottle)}>add to cart</button>
            </div>
        </div>
    );
};

export default Bottle;