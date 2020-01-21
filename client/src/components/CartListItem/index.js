import React from 'react';
import FormField from '../../components/FormField'

import './CartListItem.scss';
import picture1 from '../../images/dating.PNG'

class CartListItem extends React.Component {
    render(){
        const { currency = 'UGX', title, subtitle = '', price, imageUrl, size } = this.props;
        let totalPrice = parseFloat(size*price);
        let formattedPrice = Number(totalPrice).toLocaleString()
        return (
            <>
            <div className='cart-item-container'>
                <div className='cart-image-container'>
                    <img src={imageUrl} alt='cart-item-image'/>
                </div>
                <div className='cart-image-content-container'>
                    <strong>{title}</strong>
                    <span className='description'>{subtitle}</span>
                    <div className='quantity-container'>
                        <label>Quantity</label>
                        <select read-only="true">
                            <option>{size}</option>
                        </select>
                    </div>
                    
                </div>
                <div className='cart-item-price-container'>
                    <strong>{`${currency} ${formattedPrice}`}</strong>
                </div>
            </div>
            </>
        )
    }
}

export default CartListItem;