import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import TopNavBar from '../../components/TopNavbar';
import StyledFooter from '../../components/StyledFooter';
import CartListItem from '../../components/CartListItem';
import FormField from '../../components/FormField'

import { countItemsinArray, Loader } from '../../_utils';
import { booklistings } from '../../_fixtures';
import picture from '../../images/your_mind.PNG';

import { sendOrderRequest } from '../../_actions'

import './CartStyles.scss';


const ContentContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
`;
const CartSideBar = styled.div`
    position: relative;
    flex: 1;
    border-right: 1px solid #ddd;
    padding: 1rem 2rem;
    display: flex;
    flex-direction: row;
    outline: none;
`;
const CartContentContainer = styled.div`
    flex: 3;
    height: auto;
    padding: 1rem 0rem;
`;
const ItemList = styled.span`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const CartItemImage = styled.div`
    display:flex;
    flex-direction: column;
    flex: 3;
    justify-content: center;
    align-items: center;

`;
const CartQuantity = styled.div`
    flex: 1;  
    display:flex;
    flex-direction: column;
`;
const CartPrice = styled.div`
    flex: 1; 
    display:flex;
    flex-direction: column;
`;
const CartTotal = styled.div`
    flex: 1;
    display:flex;
    flex-direction: column;
    height: auto;
`;

const CartContainerInner = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid;
`;

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
       if( emailAddress === null ){
           this.props.history.push('/login')
       }
       let filteredItems = [];
       orderedBooks.map( item => {
            quantity.map( value => {
                if(value.book === item.id){
                    filteredItems.push({ ...item, size: value.size, totalPrice: parseFloat(value.size*item.price) })
                }
            })
        })
        this.props.sendOrderRequest(filteredItems,()=> {
            this.setState({ loading: false })
            //window.location.reload()

        }, ()=> {
            this.setState({ loading: false })
            //window.location.reload()
        });
    }
    render(){
        const { books } = this.props;
        const distinctBooks = [ ...new Set( books.map( book => book.id )) ];
        let quantity = (countItemsinArray(books));
        let composedItems = this.calculateQuantity(quantity);

        const displayBooks = [];
        distinctBooks.forEach( ( id, index )=> {
            let itemBook = booklistings.filter( value => {
                return value.id === id
            })[0]
            displayBooks.push( itemBook )
        })


        // if( this.state.loading){
        //     return (
        //         <div className='cart-items-container'>
        //          {Loader()}
        //         </div>
        //     )
        // }

        // if( books.length == 0 ){
        //     return (
        //         <>
        //             <TopNavBar />
        //                 <div className='cart-items-container'>
        //                     <strong>No Items in the cart yet!</strong>
        //                 </div>
        //             <StyledFooter />
        //         </>
        //     )
        // }
        let totalCurrency = 450000;
        return (
            <>
                <TopNavBar />
                    <ContentContainer>
                        <CartSideBar>
                            <h4 style={{ color:'green'}}>Summary</h4>
                            <ItemList>
                                <strong>Total</strong>
                                <strong>{totalCurrency.toLocaleString()}</strong>
                            </ItemList>
                            <span>
                                <FormField type='button' color='green' value='Place Order' transparent onPress={() => this.placeOrder()}/>
                            </span>
                        </CartSideBar>
                        <CartContentContainer>
                            <h4>Cart<span>(4 Items)</span></h4>
                            <CartContainerInner>
                                <div style={{ display: 'flex', flexDirection: 'row'}}>
                                <CartItemImage>
                                    <h5>Item Info</h5>
                                    <img src={picture} style={{ width: '40%', objectFit: 'contain'}} />
                                </CartItemImage>
                                <CartQuantity>
                                    <h5>Quantity</h5>
                                    <span>250</span>
                                </CartQuantity>
                                <CartPrice>
                                    <h5>Price</h5>
                                    <span>100</span>
                                </CartPrice>
                                <CartTotal>
                                    <h5>Total</h5>
                                    <span>120</span>
                                </CartTotal>
                                </div>

                            </CartContainerInner>
                        </CartContentContainer>
                    </ContentContainer>
                {/* <div className='place-order-btn'>
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
                </div> */}
                <StyledFooter />
            </>
        )
    }
}
const mapStateToProps = state => ({
    books: state.cart.books_ordered
})

const mapDispatchToProps = dispatch => ({
    sendOrderRequest: (items, success, error) => dispatch( sendOrderRequest(items,success,error) )
})

export default connect(mapStateToProps, mapDispatchToProps)(Cart)