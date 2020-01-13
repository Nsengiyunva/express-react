import React from 'react';
import TopNavBar from '../../components/TopNavbar';
import CartListItem from '../../components/CartListItem'

export default () => {
    return (
        <>
            <TopNavBar />
            <div className='cart-items-container'>
                <CartListItem />
            </div>
        </>
    )
}