import React from 'react';
import FormField from '../../components/FormField'

import './CartListItem.css';
import picture1 from '../../images/dating.PNG'

class CartListItem extends React.Component {
    render(){
        const { currency = '$', imageUrl, title, subtitle, price } = this.props;
        return (
            <>
            <div className='place-order-btn'>
                <FormField type='button' nameValue='placeOrder' color='green' value='Place Books Order' onPress={this.handleSubmit}/>
            </div>
            <div className='cart-item-container'>
                <div className='cart-image-container'>
                    <img src={picture1} alt='cart-item-image'/>
                </div>
                <div className='cart-image-content-container'>
                    <h4>Apple Iphone 7, 32 GB, Black - fully unlocked(Renewed)</h4>
                    <span>This is the one od the product in the store and it is so cool. This is the
                        greatest feeling in the world
                    </span>
                </div>
                <div className='cart-item-price-container'>
                    <strong>{`${currency} 5,400`}</strong>
                </div>
            </div>
            </>
        )
    }
}

export default CartListItem;