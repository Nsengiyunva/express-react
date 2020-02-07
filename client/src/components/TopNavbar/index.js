import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import FormField from '../FormField'
import { MdShoppingCart, MdAccountCircle } from 'react-icons/md';
import { categories, booklistings } from '../../_fixtures'

import './TopNavbar.css';

import { sendFilterCategory } from '../../_actions'



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
        console.log( 'becks', localStorage.getItem('userLogged') )
        return (
            <div className='container' style={this.props.style}>
                 {this.state.isVisible ? (<div className='modal-container'>
                     {categories.map( (item) => {
                         return this.bookBox(item.name, item.id)
                     })}
                 </div>) : null }
                 <div className='links'>
                     <ul>
                         <li>
                             <Link to="/">Home</Link>
                         </li>
                         <li>
                             <a href="javascript:void(0)" onClick={this.showDropDown}>Books</a>
                         </li>
                         <li>
                             <Link to="/organisation">Organisation</Link>
                         </li>
                         <li>
                             <Link to="/partners">Partners</Link>
                         </li>
                         <li>
                             <Link to="/bookstores">BookStore</Link>
                         </li>
                         <li>
                             <Link to="/events">Events</Link>
                         </li>
                         <li>
                             <Link to="/gallery">Gallery</Link>
                         </li>
                         <li>
                             <Link to="/contact">Contact</Link>
                         </li>
                     </ul>

                 </div>
                 <div className='searchContainer'>
                     <input type='text' name='search' className='search-field' placeholder='search' />
                 </div>
                 <div>
                    {localStorage.getItem('userLogged')}
                    {/* {localStorage.getItem('userLogged') ? <div><a href='javascript:void(0)' onClick={logout()}>Logout</a></div>: <Link to='/login'><MdAccountCircle size={30} color='white'/></Link> } */}
                 </div>
                 <div className='cart-top-icon-container'>
                     <Link to='/cart'><MdShoppingCart size={30} color='white'/></Link>
                     <div className='cart-number-items'>
                        <strong>{this.props.books ? this.props.books.length : 0}</strong>
                     </div>
                 </div>
             </div>
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
        addFilter: (term, books) => dispatch( sendFilterCategory(term, books) )
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TopNavbar);