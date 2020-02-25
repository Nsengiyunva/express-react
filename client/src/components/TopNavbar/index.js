import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import FormField from '../FormField'
import { MdShoppingCart, MdAccountCircle } from 'react-icons/md';
import { FaSearch } from 'react-icons/fa';
import { categories, booklistings } from '../../_fixtures'
import styled from 'styled-components';
import { device, colors } from '../../_utils/devices';

import './TopNavbar.css';

import { sendFilterCategory } from '../../_actions'


const TopBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: ${colors.green};
    opacity: .7;
    width: auto;
    height: 2rem;
    padding: .5rem;
`;

const MenuList = styled.div`
    display: flex;
    flex: 2.8;

    & ul {
        display: none;
        list-style-type: none;

        & li {
            padding-left: 1rem;
            
            & a {
                font-size: .85rem;
                font-weight: bold;
                color: white;
                text-decoration: none;
            }
        }

        @media ${device.laptop} and ${device.tablet} {
            display: block;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: space-between;
        }
        @media ${device.mobileL} {
        }
       
    }
`;

const HamburgerMenu = styled.div`
    color: black;

    @media ${device.laptop} {
        display: none;
    }
    @media ${device.desktop}{
        display: none;
    }
    @media ${device.tablet}{
        display:none;
        background-color: green;
    }
`;


const SearchField = styled.div`
    display: flex;
    flex: 1;
    justify-content: flex-start;
    align-items: center;
    padding-top: .75rem;

    @media ${device.mobileS} and ${device.mobileM} and ${device.mobileL}{
        display: none;
    }
    @media ${device.tablet} {
        display: block;
    }
    @media ${device.laptop} {
        display: block;
    }
   
`;

const CartContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    padding-top: .70rem;
`;

const logout =() => {
    localStorage.removeItem('userLogged')
}

class TopNavbar extends React.Component {
    state = {
        isVisible: false
    }
    showDropDown = () => {
        this.setState({ isVisible: !this.state.isVisible })
    }
    showCategoryBooks = (id) => {
        let newBooks = booklistings.filter( book => {
            return book.category === id
        });
        this.props.addFilter(id, newBooks)
        this.setState({ isVisible: false })
    }
    bookBox = (label, id) => {
        return (
                <div key={id} className='book-menu-container'>
                     <a href="javascript:void(0)" onClick={() => this.showCategoryBooks(id)}>
                        <h5>{label}</h5>
                    </a>
                </div>
        )
    }
    render(){
        return (
            <TopBarContainer>
                <MenuList>
                    <HamburgerMenu>
                        we got a hamburger 
                    </HamburgerMenu>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link>Books</Link>
                        </li>
                        <li>
                            <Link to="/organisation">Organisation</Link>
                        </li>
                        <li>
                            <Link to="/partners">Partners</Link>
                        </li>
                        <li>
                            <Link to="/bookstore">Bookstore</Link>
                        </li>
                        <li>
                             <Link to="/events">Events</Link>
                        </li>
                        <li>
                            <Link to="/gallery">Gallery</Link>
                        </li>
                        <li>
                         <Link to="/contact">Contact Us</Link>
                        </li>
                    </ul>
                </MenuList>
                <SearchField>
                    <input type='text' style={{ paddingLeft: '2rem',width: '90%',border:'none' ,outline: 'none',backgroundColor: `${colors.lightGreen}`,borderTopLeftRadius:'1rem', borderBottomLeftRadius:'1rem',borderBottomRightRadius:'1rem', borderTopRightRadius:'1rem',padding: '.25rem', fontFamily: 'inherit'}} />
                </SearchField>
                <CartContainer>
                    <MdAccountCircle size={25} color='white' />
                    <MdShoppingCart style={{ paddingLeft: '5rem'}} size={25} color='white' />
                </CartContainer>
            </TopBarContainer>
        )
        // console.log( 'becks', localStorage.getItem('userLogged') )
        // return (
        //     <div className='container' style={this.props.style}>
        //          {this.state.isVisible ? (<div className='modal-container'>
        //              {categories.map( (item) => {
        //                  return this.bookBox(item.name, item.id)
        //              })}
        //          </div>) : null }
        //          <div className='links'>
        //              <ul>
        //                  <li>
        //                      <Link to="/">Home</Link>
        //                  </li>
        //                  <li>
        //                      <a href="javascript:void(0)" onClick={this.showDropDown}>Books</a>
        //                  </li>
        //                  <li>
        //                      <Link to="/organisation">Organisation</Link>
        //                  </li>
        //                  <li>
        //                      <Link to="/partners">Partners</Link>
        //                  </li>
        //                  <li>
        //                      <Link to="/bookstores">BookStore</Link>
        //                  </li>
        //                  <li>
        //                      <Link to="/events">Events</Link>
        //                  </li>
        //                  <li>
        //                      <Link to="/gallery">Gallery</Link>
        //                  </li>
        //                  <li>
        //                      <Link to="/contact">Contact</Link>
        //                  </li>
        //                  <li>
        //                      <Link to="/about">About Us</Link>
        //                  </li>
        //              </ul>

        //          </div>
        //          <div className='searchContainer'>
        //              <input type='text' name='search' className='search-field' placeholder='search' />
        //          </div>
        //          <div>
        //             {/* {localStorage.getItem('userLogged')} */}
        //             {/* {localStorage.getItem('userLogged') ? <div><a href='javascript:void(0)' onClick={logout()}>Logout</a></div>: <Link to='/login'><MdAccountCircle size={30} color='white'/></Link> } */}
        //          </div>
        //          <div className='cart-top-icon-container'>
        //              <Link to='/cart'><MdShoppingCart size={24} color='white'/></Link>
        //              <div className='cart-number-items'>
        //                 <strong>{this.props.books ? this.props.books.length : 0}</strong>
        //              </div>
        //          </div>
        //      </div>
        // )
    }
}
const mapStateToProps = state => {
    return {
        books: state.cart.books_ordered,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addFilter: (term, books) => dispatch( sendFilterCategory(term, books) )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopNavbar);