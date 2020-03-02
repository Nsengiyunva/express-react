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



export const ContentItemContainer = styled.div`
  display: flex;
  flexDirection: row;
  flex-wrap: wrap;
  padding: 2rem 2rem;
`;


export const SlideSection = styled.div`
  position: relative;
  display: flex;
  padding: 0 2rem;
`;

export const Pagination = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50px;
  background-color: ${props => props.bgColor};
  margin: 2px;
  cursor: pointer;
`;

export const RightButton = styled.button`
  position: absolute;
  top: 20rem;
  right: 1rem;
  cursor: pointer;
  outline: none;
  border: none;
`;

export const LeftButton = styled.button`
  position: absolute;
  top: 20rem;
  left: .5rem;
  cursor: pointer;
  outline: none;
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
            {/* <a onClick={() => this.show()}>Show case</a> */}
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