import React from 'react';
import { connect } from 'react-redux'

import TopNavBar from '../../components/TopNavbar';
import Footer from '../../components/Footer';
import BookListingItem from '../../components/BookListingItem'
import './HomeStyle.scss';

import { booklistings } from '../../_fixtures'

class Home extends React.Component {
    state = {
      loading: false
    }
    componentDidMount(){
      console.log('first time')
    }
    render(){
      return (
        <>
        <TopNavBar />
        <div className='items-wrapper-container'>
          <h2>Top Trending</h2>
          <div className='items-content'>
            {this.props.bookItems && this.props.bookItems.length > 0 ? 
              this.props.bookItems.map( (item) => {
                return (
                  <BookListingItem  key={item.title} imgUrl={item.imageUrl} title={item.title}/>
                )
              }) :  
              booklistings.map( (item) => {
                return (
                  <BookListingItem  key={item.title} imgUrl={item.imageUrl} title={item.title}/>
                )
              })}
            {/* {this.props.term.length > 0 ? booklistings.filter( 
                  value => { 
                    return value.category === this.props.term 
                  } ).map( item => {
              return (
                <BookListingItem  key={item.title} imgUrl={item.imageUrl} title={item.title}/>
              )
            }):
            booklistings.map( (item) => {
              return (
                <BookListingItem  key={item.title} imgUrl={item.imageUrl} title={item.title}/>
              )
            })} */}
          </div>
        </div>
        <Footer />
      </>
      )
    }
}
const mapStateToProps = state => {
  return {
    term: state.cart.dropdownTerm,
    bookItems: state.cart.bookItems
  }
}
export default connect(mapStateToProps, null)(Home)