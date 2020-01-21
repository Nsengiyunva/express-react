import React from 'react';
import { connect } from 'react-redux'

import TopNavBar from '../../components/TopNavbar';
import Footer from '../../components/Footer';
import CartListItem from '../../components/CartListItem';
import FormField from '../../components/FormField'

import { countItemsinArray, Loader } from '../../_utils';
import { booklistings } from '../../_fixtures';

import { sendOrderRequest } from '../../_actions'

import './CartStyles.scss'

class Cart extends React.Component {
    state = {
        loading: false
    }
    calculateQuantity = (qty) => {
        let results = [];
        for( var key in qty){
            results.push( { book: parseInt(key), size: qty[key].length } )
        }
        return results;
    }
    handleSubmit = (orderedBooks, quantity) => {
      this.setState({ loading: true })
       const emailAddress = localStorage.getItem('userLogged');
    
       let filteredItems = [];
       orderedBooks.map( item => {
            quantity.map( value => {
                if(value.book === item.id){
                    filteredItems.push({ ...item, size: value.size, totalPrice: parseFloat(value.size*item.price) })
                }
            })
        })
        this.props.sendOrderRequest(filteredItems);
    }
    render(){
        const { books } = this.props;
        const distinctBooks = [ ...new Set( books.map( book => book.id )) ]
        let quantity = (countItemsinArray(books));

        let composedItems = this.calculateQuantity(quantity);

        const displayBooks = [];
        distinctBooks.forEach( ( id, index )=> {
            let itemBook = booklistings.filter( value => {
                return value.id === id
            })[0]
            displayBooks.push( itemBook )
        })


        if( this.state.loading){
            return (
                <div className='cart-items-container'>
                 {Loader()}
                </div>
            )
        }

        if( books.length == 0 ){
            return (
                <>
                    <TopNavBar />
                        <div className='cart-items-container'>
                            <strong>No Items in the cart yet!</strong>
                        </div>
                    <Footer />
                </>
            )
        }
        return (
            <>
                <TopNavBar />
                <div className='place-order-btn'>
                    <FormField type='button' nameValue='placeOrder' color='green' value='Place Books Order' onPress={() => this.handleSubmit(displayBooks, composedItems)}/>
                </div>
                <div className='cart-items-container'>
                    {displayBooks.map( ({ id, title, imageUrl, description, price }) => {
                        let details = composedItems.filter( value => {
                            return value.book === id
                        })[0]
                        return (
                            <CartListItem key={id} 
                                title={title} imageUrl={imageUrl}  
                                subtitle={description} size={parseInt(details.size)}
                                price={parseInt(price)}
                            />
                        )
                    })}
                </div>
                <Footer />
            </>
        )
    }
}
const mapStateToProps = state => ({
    books: state.cart.books_ordered
})

const mapDispatchToProps = dispatch => ({
    sendOrderRequest: (items) => dispatch( sendOrderRequest(items) )
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)