import React from 'react';
import { connect } from 'react-redux';

import TopNavBar from '../../components/TopNavbar';
import Footer from '../../components/Footer'
import ProductDetailsItem from '../../components/ProductDetailsItem';
import ProfileThumbnail from '../../components/ProfileThumbnail';
import FormField from '../../components/FormField'

import './BookDescriptionStyles.css'
import mind from '../../images/your_mind.PNG'
import { booklistings } from '../../_fixtures'

import { addToCart, sendOrderRequest,addReview, getAllReviews } from '../../_actions'


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
    state = {
        loading: true,
        selectedBook: [],
        showCommentBox: false,
        comment:''
    }
    componentDidMount(){
        const { match: { params } } = this.props;
        let book = booklistings.filter( value => {
         return parseInt(value.id) === parseInt(params.bookId)
        });
        this.setState({
            loading: false,
            selectedBook: book
        })
    }
    sendToCart = (payload) => {
        this.props.addToCart( payload, () => {}, ()=> {})
    }
    placeOrder = () => {
        if(this.props.books && this.props.books.length > 0){
            // const emailAddress = localStorage.getItem('userLogged');
            this.props.history.push('/cart')
        }
        else {
            alert('No items in the cart yet')
        }
    }
    handleSubmit = () => {
       console.log(this.state.comment)
    //    if(this.state.comment.length === 0 ){
    //        alert('no value is provided')
    //    }
    //   else {
           let user = localStorage.getItem('userLogged');
        //    if(!user){
        //       alert('you must be logged in to comment')
        //       this.props.history.push('/login')
        //    }
        //    else {
               this.props.addReview({
                   emailAddress: user,
                   comment: this.state.comment,
                   bookReviewed: this.state.selectedBook[0].id,                                                                                                                                              bookReviewed: this.state.selectedBook[0].id,
                   completed: true
               })
               this.showCommentBox();
        //   }
       //}
    }
    showCommentBox = () => this.setState({ showCommentBox: !this.state.showCommentBox })
    render() {
            const { imgUrl,currency = '$' ,price ='3,500', author = 'Steven Lubwama', 
                    title = 'Dont Make Me, Think', isbn = 'xxx', 
                    publisher = 'willi books', year =  2020,
                    chapters = 12, pages = 257 } = this.props;
            const { selectedBook }= this.state;
            

            if(this.state.loading){
                return <div>This is loading...</div>
            }
            return (
                <>
                    <TopNavBar />
                    <div className='book-description-container'>
                       <div className='book-details'>
                            <div className='book-details-info'>
                                <div className='book-details-image'>
                                    <img src={selectedBook[0].imageUrl} />
                                </div>
                                <div className='text-details-container'>
                                    <h2>{selectedBook[0].title}</h2>
                                    <ProductDetailsItem title='Author' value={selectedBook[0].author} />
                                    <ProductDetailsItem title='ISBN' value={selectedBook[0].isbn} />
                                    <ProductDetailsItem title='Publisher' value={selectedBook[0].publisher} />
                                    <ProductDetailsItem title='Release Year' value={selectedBook[0].releaseYear} />
                                    <ProductDetailsItem title='Number of chapters' value={selectedBook[0].numberOfChapters} />
                                    <ProductDetailsItem title='Number of pages' value={selectedBook[0].numberOfPages} />
                                    <div className='cart-btns'>
                                        <FormField type='button' color='green' value='Add to Cart' onPress={() => this.sendToCart({ 
                                            id: selectedBook[0].id, 
                                            title: selectedBook[0].title, 
                                            price: selectedBook[0].price, 
                                            author: selectedBook[0].author })}/>
                                        <FormField type='button' color='green' value='Order Now' transparent onPress={() => this.placeOrder()}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='product-details-container'>
                            <h2>Book Details</h2>
                            <ProductDetailsItem title='Description' value={selectedBook[0].description} />
                        </div>
                        <div className='editor-container'>
                            <p>About the Author</p>
                            <p>
                                Andrew Williams is an award-winning video game animator that
                                has been bringing virtual characters to life since 2000.
                            </p>
                        </div>
                        <div className='readers-container'>
                            <h2>Reviews</h2>
                            <a className='link-review' href='javascript:void(0)' onClick={this.showCommentBox}>Write your review</a>
                            {this.state.showCommentBox ? (<div className='review-comment-container'>
                                <form>
                                    <FormField type="textarea" placeholder='Add your review' onChange={ (e) => this.setState({ comment: e.target.value }) }/>
                                    <div className='top'>
                                        <FormField type='button' nameValue='submit' color='green' value='Post Review' submit onPress={this.handleSubmit}/>
                                    </div>
                                </form>
                            </div>) : null}
                            {ReviewItem()}
                            {ReviewItem()}
                            {ReviewItem()}
                        </div>
                    </div>
                    <Footer />
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
        postOrder: (payload, success, error) => dispatch( sendOrderRequest(payload, success, error) ),
        reviews: () => dispatch( getAllReviews() ),
        addReview: (payload) => dispatch( addReview(payload) )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookDescription)