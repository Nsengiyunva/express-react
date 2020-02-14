import React from 'react';
import { connect } from 'react-redux'

import TopNavBar from '../../components/TopNavbar';
import Footer from '../../components/Footer';
import BookListingItem from '../../components/BookListingItem';
import styled from 'styled-components';
import StyledFooter from '../../components/StyledFooter';
import './HomeStyle.scss';
import { booklistings } from '../../_fixtures'


const ContentItemContainer = styled.div`
  display: flex;
  flexDirection: row;
  flex-wrap: wrap;
  border: 1px solid red;
  padding: 2rem 2rem;
`;

class Home extends React.Component {
    state = {
      loading: false
    }
    render(){
      return (
        <>
        <TopNavBar />
        <ContentItemContainer>
          Home
          {/* {this.props.bookItems && this.props.bookItems.map( ({ id, title, imageUrl}) => {
            return ( <BookListingItem key={title} bookId={id} imgUrl={imageUrl} title={title} />)
          })} */}
        </ContentItemContainer>
        {/* <div className='items-wrapper-container'>
         <h2>{this.props.headingTitle || `Top Trending`}</h2>
          <div className='items-content'>
            {this.props.bookItems && this.props.bookItems.length > 0 ? 
              this.props.bookItems.map( (item) => {
                return (
                  <BookListingItem  bookId={item.id} key={item.title} imgUrl={item.imageUrl} title={item.title}/>
                )
              }) :  
              booklistings.map( (item) => {
                return (
                  <BookListingItem  bookId={item.id} key={item.title} imgUrl={item.imageUrl} title={item.title}/>
                )
              })}
          </div>
        </div> */}
        <StyledFooter />
      </>
      )
    }
}
const mapStateToProps = state => {
  return {
    term: state.cart.dropdownTerm,
    bookItems: state.cart.bookItems,
    headingTitle: state.cart.headingTitle
  }
}
export default connect(mapStateToProps, null)(Home)