import React from 'react';
import PropTypes from 'prop-types';
import './watch.css'

const Watch = ({watch}) => {
    const {model,price,brand,color}=watch;
    return (
        <div className='watch'>
            <h2>{model}</h2>
            <h3>{brand}</h3>
            <h4>{price}</h4>
            <p>{color}</p>
        </div>
    );
};

Watch.propTypes = {
    
};

export default Watch;