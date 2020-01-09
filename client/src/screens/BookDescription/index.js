import React from 'react';
import TopNavBar from '../../components/TopNavbar';
import ProductDetailsItem from '../../components/ProductDetailsItem';
import ProfileThumbnail from '../../components/ProfileThumbnail';
import FormField from '../../components/FormField'

import './BookDescriptionStyles.css'
import mind from '../../images/your_mind.PNG'


const ReviewItem = () => {
    return (
        <div className='review-container'>
            <ProfileThumbnail />
            <div className='review-container-description'>
                <div className='top-text-labels'>
                    <h6>Samuel Smith</h6>
                    <div className='ratings-container'>
                        ratings
                    </div>
                </div>
                <p>Wonderful jean, perfect gift for my girl for our anniversary</p>
            </div>
        </div>
    )
}
export default () => {
    return (
        <>
            <TopNavBar />
            <div className='book-description-container'>
                <div className='book-details'>
                    <div className='book-details-info'>
                        <div className='book-details-image'>
                            <img src={mind} />
                        </div>
                        <div className='text-details-container'>
                            <h2>Dont Make Me,Think</h2>
                            <strong>By Steven Lubwama</strong>
                            <strong>$ 3.782</strong>
                            <div className='cart-btns'>
                                <FormField type='button' color='green' value='Add to Cart'/>
                                <FormField type='button' color='green' value='Order Now' transparent/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='product-details-container'>
                    <h2>Product Details</h2>
                    <ProductDetailsItem title='Paperback' value='278 pages' />
                    <ProductDetailsItem title='Publisher' value='A.K Peters/CRC Press; 1 edition( January 27, 2019)' />
                    <ProductDetailsItem title='Language' value='English' />
                    <ProductDetailsItem title='ISBN-10' value='xxxxxx' />
                    <ProductDetailsItem title='ISBN-13' value='xxxxx' />
                    <ProductDetailsItem title='Product Dimensions' value='7 x 0.8 x 10 inches' />
                    <ProductDetailsItem title='Shipping Weight' value='1.7 pounds' />
                </div>
                <div className='editor-container'>
                    <p>About the Author</p>
                    <p>
                        Jonathan Cooper is an award-winning video game animator that
                        has been bringing virtual characters to life since 2000.
                    </p>
                </div>
                <div className='readers-container'>
                    <h2>Reviews</h2>
                    <a href='#' onClick={() => alert('review')}>Write your review</a>
                    {ReviewItem()}
                    {ReviewItem()}
                    {ReviewItem()}
                </div>
            </div>
        </>
    )
}