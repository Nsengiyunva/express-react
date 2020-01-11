import React from 'react';
import { connect } from 'react-redux';

import TopNavBar from '../../components/TopNavbar';
import ProductDetailsItem from '../../components/ProductDetailsItem';
import ProfileThumbnail from '../../components/ProfileThumbnail';
import FormField from '../../components/FormField'

import './BookDescriptionStyles.css'
import mind from '../../images/your_mind.PNG'

import { addToCart, sendOrderRequest } from '../../_actions'


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
class BookDescription extends React.Component {
    sendToCart = (payload) => {
        this.props.addToCart( payload, () => {}, ()=> {})
    }
    placeOrder = () => {
        if(this.props.books && this.props.books.length > 0){
            const emailAddress = localStorage.getItem('userLogged');
            this.props.postOrder({ emailAddress, books: this.props.books }, () => {
                console.log('success')
            }, () => {
                console.log('failed')
            })
        }
        else {
            alert('No items in the cart yet')
        }
    }
    render() {
            const { currency = '$' ,price ='3,500', author = 'Steven Lubwama', title = 'Dont Make Me, Think'} = this.props;
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
                                    <h2>{title}</h2>
                                    <strong>{`By ${author}`}</strong>
                                    <strong>{`${currency} ${price}`}</strong>
                                    <div className='cart-btns'>
                                        <FormField type='button' color='green' value='Add to Cart' onPress={() => this.sendToCart({ id: 1, title, price, author})}/>
                                        <FormField type='button' color='green' value='Order Now' transparent onPress={() => this.placeOrder()}/>
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
}
const mapStateToProps = state => {
    return {
        books: state.cart.books_ordered
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addToCart: (payload, success, error ) => dispatch( addToCart( payload, success, error )),
        postOrder: (payload, success, error) => dispatch( sendOrderRequest(payload, success, error) )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookDescription)