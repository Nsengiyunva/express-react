import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { MdShoppingCart, MdAccountCircle } from 'react-icons/md';
import { FaHamburger } from 'react-icons/fa';
import { categories, booklistings, addresses } from '../../_fixtures'
import styled from 'styled-components';
import { device, colors } from '../../_utils/devices';

import './TopNavbar.css';

import { sendFilterCategory, obtainCountry } from '../../_actions'


const TopBarContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: ${colors.green};
    width: auto;
    height: 2rem;
    padding: .5rem;
`;

const MenuList = styled.div`
    position: relative;
    display: flex;
    flex: 3;

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

        @media ${device.laptop} , @media ${device.tablet} {
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media ${device.tablet}, @media ${device.laptop},@media ${device.desktop}{
        display:none;
    }
`;


const SearchField = styled.div`
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-left: .5rem;

    @media ${device.mobileS}, @media ${device.mobileM}, @media ${device.mobileL}{
        display: none;
    }
    @media ${device.tablet}, @media ${device.laptop} {
        display: block;
    }
   
`;

const CartContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: row;
    padding-top: .70rem;

    @media ${device.mobileS}, @media ${device.mobileM}, @media ${device.mobileL}{
        justify-content: flex-end;
        align-items: center;
        padding: 1rem;
    }
    @media ${device.laptop}, @media ${device.desktop}{
        justify-content: flex-start;
    }
`;


const CountryDropdown = styled.div`
    display: flex;
    border: none;
    outline: none;
    
    & select {
        font-family: inherit;
        padding: .25rem;
        font-weight: bold;
    }
`;

const logout =() => {
    localStorage.removeItem('userLogged')
}

class TopNavbar extends React.Component {
    state = {
        isVisible: false,
        showMenu: false
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
            <>
            <div style={{ display: this.state.showMenu ? 'block' :'none',position: 'absolute',backgroundColor: '#666',top: '3rem', height: '100%', width:'100%', zIndex: '5'}}>
                <div style={{ width: '90%',display:'flex',flexDirection: 'row', justifyContent: 'space-between',alignItems: 'center'}}>
                    <a></a>
                    <a onClick={ () => this.setState({showMenu: false })} style={{ cursor:'pointer', color: `${colors.white}`, fontSize:'1.5rem'}}>X</a>
                </div>
                <div style={{ display: 'flex',flexDirection: 'column',justifyContent: 'center', alignItems: 'center'}}>
                    <ul style={{ listStyleType: 'none', padding: '2rem'}}>
                        {[ 
                            { name: 'Home', route: '/', }, 
                            { name: 'About', route: '/aboutUs'},
                            { name: 'Organisation', route: '/organisation'} ,
                            { name: 'Partners', route: '/partners'} ,
                            { name: 'Bookstore', route: '/bookstore'},
                            { name: 'Events', route: '/events'} ,
                            { name: 'Gallery', route: '/gallery'},
                            { name: 'Contact', route: '/contact'} 
                        ].map( item => (
                            <li style={{ marginBottom:'1rem'}}>
                             <Link style={{ textDecoration: 'none', color: 'white',fontSize: '1.5rem'}} to={item.route}>{item.name}</Link>
                            </li>
                            )
                        )}
                        
                        
                    </ul>
                </div>
            </div>
            <TopBarContainer>
                <MenuList>
                    <HamburgerMenu>
                        <a onClick={() => this.setState({showMenu: !this.state.showMenu })}>
                            <FaHamburger size={25} color={`white`} />
                        </a>
                    </HamburgerMenu>
                    <ul>
                        {[ 
                            { name: 'Home', route: '/', }, 
                            { name: 'About', route: '/aboutUs'},
                            { name: 'Books', route: '/'},
                            { name: 'Organisation', route: '/organisation'} ,
                            { name: 'Partners', route: '/partners'} ,
                            { name: 'Bookstore', route: '/bookstore'},
                            { name: 'Events', route: '/events'} ,
                            { name: 'Gallery', route: '/gallery'},
                            { name: 'Contact', route: '/contact'} 
                        ].map( item => (
                            <li>
                                <Link to={item.route}>{item.name}</Link>
                            </li>
                        ))}
                    </ul>
                </MenuList>
                <SearchField>
                    <input type='text' style={{ paddingLeft: '2rem',width: '90%',border:'none' ,outline: 'none',backgroundColor: `${colors.lightGreen}`,borderTopLeftRadius:'1rem', borderBottomLeftRadius:'1rem',borderBottomRightRadius:'1rem', borderTopRightRadius:'1rem',padding: '.25rem', fontFamily: 'inherit'}} />
                </SearchField>
                <CartContainer>
                    <MdAccountCircle size={25} color='white' />
                    <MdShoppingCart style={{ paddingLeft: '1rem'}} size={25} color='white' />
                </CartContainer>
                <CountryDropdown>
                    <select onChange={ val => this.props.obtainCountry(val.target.value)}>
                        {addresses.map( address => (
                            <option key={address.country} value={address.country}>{address.country}</option>
                        ))}
                    </select>
                </CountryDropdown>
            </TopBarContainer>
            </>
        )
    }
}
const mapStateToProps = state => {
    return {
        books: state.cart.books_ordered,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        addFilter: (term, books) => dispatch( sendFilterCategory(term, books) ),
        obtainCountry: country => dispatch( obtainCountry(country) )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopNavbar);