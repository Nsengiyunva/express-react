import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css'
// import ReactZoomify from '"react-zoomify';

import TopNavBar from '../../components/TopNavbar';
import StyledFooter, { ListItem }  from '../../components/StyledFooter';
import ProductDetailsItem from '../../components/ProductDetailsItem';
import ProfileThumbnail from '../../components/ProfileThumbnail';
import FormField from '../../components/FormField';


import './BookDescriptionStyles.css'
import mind from '../../images/your_mind.PNG'
import playstore from '../../images/googleplay.png';
import apple from '../../images/appstore.png'
import { firstBatch, secondBatch, thirdBatch, fourBatch, fiveBatch } from '../../_fixtures'

import { addToCart, sendOrderRequest,addReview, getAllReviews } from '../../_actions';


const ContentItemContainer = styled.div`
    display: flex;
    width: auto;
    height: auto;
    justify-content: center;
    align-items: center;

`;
const BookContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    padding: 1rem 0rem;
    width: 50%;
`;

const ImageContainer = styled.span`
    display: flex;
    width: 50%;
    justify-content: flex-start;
    align-items: flex-start;
`;
const Image= styled.img`
    width: 100%;
    object-fit: contain;
`;

const BookDetails = styled.div`
    width: 45%;
    display: flex;
    padding: 0 2rem;
    flex-direction: column;
    line-height: .25rem;
`;

const CartButtonsContainer = styled.span`
    display: flex;
    flex-direction: row;
    padding: 0px;
`;


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
        visible: false,
        comment: '',
        email: '',
        review: ''
    }
    componentDidMount(){
        const { match: { params } } = this.props;
        const booklistings = [ ...[],firstBatch, secondBatch, thirdBatch, fourBatch, fiveBatch ];
        // console.log( booklistings.flat() );
        let book = booklistings.flat().filter( value => {
         return parseInt(value.id) === parseInt(params.bookId)
        })[0];
        this.setState({
            loading: false,
            selectedBook: book
        })
    }
    sendToCart = (payload) => {
        this.props.addToCart( payload, () => {
        }, ()=> {});
        this.props.history.push('/cart')

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
    // handleSubmit = () => {
    //    console.log(this.state.comment)
    // //    if(this.state.comment.length === 0 ){
    // //        alert('no value is provided')
    // //    }
    // //   else {
    //        let user = localStorage.getItem('userLogged');
    //     //    if(!user){
    //     //       alert('you must be logged in to comment')
    //     //       this.props.history.push('/login')
    //     //    }
    //     //    else {
    //            this.props.addReview({
    //                emailAddress: user,
    //                comment: this.state.comment,
    //                bookReviewed: this.state.selectedBook[0].id,                                                                                                                                              bookReviewed: this.state.selectedBook[0].id,
    //                completed: true
    //            })
    //            this.showCommentBox();
    //     //   }
    //    //}
    // }
    show = () => this.setState({ visible: true })
    hide = () => this.setState({ visible: false });
    updateValues = (input, prop) => this.setState({[prop]: input.target.value } )
    render() {
            // const { imgUrl,currency = '$' ,price ='3,500', author = 'Steven Lubwama',
            //         title = 'Dont Make Me, Think', isbn = 'xxx',
            //         publisher = 'willi books', year =  2020,
            //         chapters = 12, pages = 257 } = this.props;
            const { selectedBook: { id, imageUrl, rating, title,author, publisher,  marketer, language, numberOfChapters, numberOfPages, price } }= this.state;
            if(this.state.loading){
                return <div>Loading...</div>
            }
            return (
                <>
                  <TopNavBar />
                    <ContentItemContainer>
                      <Rodal visible={this.state.visible} onClose={() => this.hide()} animation='zoom'>
                        <div>
                          <h5>Write A Review about this Book</h5>
                          <form method='post' role='form'>
                            <FormField nameValue='emailAddress' placeholder='Email Address' onChange={input => this.updateValues(input, 'email')}/>
                            <FormField type='textarea' nameValue='comment' placeholder='Write a Review' onChange={input => this.updateValues(input, 'review')}/>
                            <div style={{ display: 'flex',alignSelf: 'flex-end',marginTop: '2rem'}}>
                              <FormField type='button'
                                color='green'
                                value='Post Review'
                                onPress={() => this.props.addReview({
                                  emailAddress: this.state.email,
                                  review: this.state.review,
                                  bookReviewed: id,
                                  completed: true
                                }, () => {
                                  this.hide()
                                }, () => {} ) }
                              />
                            </div>
                          </form>
                        </div>
                      </Rodal>
                        <BookContainer>
                            <ImageContainer>
                                <Image src={imageUrl}/>
                                {/* <ReactZoomify
                                    width={300}
                                    src={imageUrl}
                                    s={150}
                                    magnification={4}
                                    zoomedImgLeft={500}
                                    zoomedImgTop={100}
                                /> */}
                            </ImageContainer>
                            <BookDetails>
                                <div style={{ marginLeft: '0.4rem'}}>
                                <h3>{title}</h3>
                                {[ { key: 'Author', value: author },
                                   { key: 'ISBN', value: '123'},
                                   { key: 'Publisher', value: publisher },
                                   { key: 'Price', value: 'UGX 30,000'},
                                   { key: 'Marketer', value: marketer},
                                   { key: 'Language', value: language },
                                   { key: 'Chapters', value: numberOfChapters },
                                   { key: 'Pages', value: numberOfPages }
                                ].map( item => {
                                    return <ListItem key={item.key} bookDetail bookKey={item.key} value={item.value} color='#666'/>
                                })}
                                </div>
                                 <CartButtonsContainer>
                                     <button style={{ outline: 'none', border: 'none' }} onClick={() => alert('test')}>
                                         <img src={playstore} style={{ width: '8rem'}}/>
                                    </button>
                                    <button style={{ outline: 'none', border: 'none' }}>
                                        <img src={apple} style={{ width: '8rem'}} />
                                    </button>
                                 </CartButtonsContainer>
                                <CartButtonsContainer>
                                        <FormField type='button' color='green' value='Add to Cart' onPress={() => this.sendToCart({
                                        id,
                                        title,
                                        price,
                                        author })}/>
                                    <FormField type='button' color='green' value='Order Now' transparent onPress={() => this.placeOrder()}/>
                                </CartButtonsContainer>
                                <>
                                  <FormField
                                    type='button'
                                    color='orange'
                                    value='Write A Review'
                                    onPress={this.show}/>
                                </>
                            </BookDetails>
                        </BookContainer>
                    </ContentItemContainer>
                  <StyledFooter />
                </>
            )
            // return (
            //     <>
            //         <TopNavBar />
            //         <div className='book-description-container'>
            //            <div className='book-details'>
            //                 <div className='book-details-info'>
            //                     <div className='book-details-image'>
            //                         <img src={selectedBook[0].imageUrl} />
            //                     </div>
            //                     <div className='text-details-container'>
            //                         <h2>{selectedBook[0].title}</h2>
            //                         <ProductDetailsItem title='Author' value={selectedBook[0].author} />
            //                         <ProductDetailsItem title='ISBN' value={selectedBook[0].isbn} />
            //                         <ProductDetailsItem title='Publisher' value={selectedBook[0].publisher} />
            //                         <ProductDetailsItem title='Release Year' value={selectedBook[0].releaseYear} />
            //                         <ProductDetailsItem title='Number of chapters' value={selectedBook[0].numberOfChapters} />
            //                         <ProductDetailsItem title='Number of pages' value={selectedBook[0].numberOfPages} />
            //                         <div className='cart-btns'>
            //                             <FormField type='button' color='green' value='Add to Cart' onPress={() => this.sendToCart({
            //                                 id: selectedBook[0].id,
            //                                 title: selectedBook[0].title,
            //                                 price: selectedBook[0].price,
            //                                 author: selectedBook[0].author })}/>
            //                             <FormField type='button' color='green' value='Order Now' transparent onPress={() => this.placeOrder()}/>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //             <div className='product-details-container'>
            //                 <h2>Book Details</h2>
            //                 <ProductDetailsItem title='Description' value={selectedBook[0].description} />
            //             </div>
            //             <div className='editor-container'>
            //                 <p>About the Author</p>
            //                 <p>
            //                     Andrew Williams is an award-winning video game animator that
            //                     has been bringing virtual characters to life since 2000.
            //                 </p>
            //             </div>
            //             <div className='readers-container'>
            //                 <h2>Reviews</h2>
            //                 <a className='link-review' href='javascript:void(0)' onClick={this.showCommentBox}>Write your review</a>
            //                 {this.state.showCommentBox ? (<div className='review-comment-container'>
            //                     <form>
            //                         <FormField type="textarea" placeholder='Add your review' onChange={ (e) => this.setState({ comment: e.target.value }) }/>
            //                         <div className='top'>
            //                             <FormField type='button' nameValue='submit' color='green' value='Post Review' submit onPress={this.handleSubmit}/>
            //                         </div>
            //                     </form>
            //                 </div>) : null}
            //                 {ReviewItem()}
            //                 {ReviewItem()}
            //                 {ReviewItem()}
            //             </div>
            //         </div>
            //         <Footer />
            //     </>
            // )
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
        addReview: (payload, success, error ) => dispatch( addReview(payload, success, error ) )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookDescription)
