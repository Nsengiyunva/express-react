import React from 'react';
import './ProductDetailsItemStyles.css'

export default ({ title, value }) => {
    return (
        <div className='product-details'>
            <strong>{title}:</strong>
            <span>{value}</span>
        </div>
    )
}