import React from 'react';
import { connect } from 'react-redux'

import TopNavBar from '../../components/TopNavbar';
import Footer from '../../components/Footer';
import BookListingItem from '../../components/BookListingItem';
import styled from 'styled-components';
import StyledFooter from '../../components/StyledFooter';
import './HomeStyle.scss';
// import { booklistings } from '../../_fixtures'
import Slider from './Slider'


const ContentItemContainer = styled.div`
  display: flex;
  flexDirection: row;
  flex-wrap: wrap;
  padding: 2rem 2rem;
`;


export const SlideSection = styled.div`
  position: relative;
  display: flex;
  justify-content:center;
  align-items: center;
  height: auto
  width: 100%;
  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: transparent;
  }
`;

export const Pagination = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: ${props => props.bgColor};
  margin: 2px;
  cursor: pointer;
`;

export const Button = styled.button`
  padding: 15px 20px;
  background-color: orange;
  color: black;
  outline: none;
  margin: 5px;
  cursor: pointer;
  border: none;
`;

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => ( props.background ? '#1e1e1e': '')}
`;




class Home extends React.Component {
    state = {
      loading: false
    }
    render(){
      // console.log( 'items',booklistings )
      
      return (
        <>
        <TopNavBar />
        <ContentItemContainer>
          <Slider />
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