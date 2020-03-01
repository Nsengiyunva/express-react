import React from 'react';
import { connect } from 'react-redux'

import TopNavBar from '../../components/TopNavbar';
import BookListingItem from '../../components/BookListingItem';
import styled from 'styled-components';
import StyledFooter from '../../components/StyledFooter';
import './HomeStyle.scss';
import Slider from './Slider';
import Rodal from 'rodal';
import 'rodal/lib/rodal.css'



const ContentItemContainer = styled.div`
  display: flex;
  flexDirection: row;
  flex-wrap: wrap;
  padding: 2rem 2rem;
`;


export const SlideSection = styled.div`
  position: relative;
  display: flex;
  padding: 0 2rem;
  
  ::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top:0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
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
      loading: false,
      visible: false
    }
    show = () => this.setState({ visible: true });
    hide = () => this.setState({ visible: false });
    render(){
      return (
        <>
        <TopNavBar />
          <ContentItemContainer>
            <Slider />
            <a onClick={() => this.show()}>Show case</a>
            <Rodal customStyles={{ backgroundColor:'green', width: '80%', height: '70vh'}} visible={this.state.visible} onClose={() => this.hide()} animation='zoom'>
              <div>Content</div>
            </Rodal> 
          </ContentItemContainer>
          {/* <button onClick={() => this.show()}>Show</button>
          <Rodal visible={this.state.visible} onClose={() => this.hide()} animation='zoom'>
            <div>Content</div>
          </Rodal> */}
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