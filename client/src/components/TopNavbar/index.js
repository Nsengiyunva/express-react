import React from 'react';
import { Link } from 'react-router-dom'
import FormField from '../FormField'

import './TopNavbar.css';
import { MdShoppingCart, MdAccountCircle } from 'react-icons/md'

const showBookCategories = () => {
    console.log('test')
}

const logout =() => {
    console.log('to logout')
    // localStorage.removeItem('userLogged')
}

export default ({ style }) => {
    return (
            <div className='container' style={style}>
                {/* <div className='arrow-up'></div>
                <div className='arrow-down'></div>
                <div className='arrow-right'></div>
                <div className='arrow-left'></div> */}
                <div className='modal-box'>
                </div>
                <div className='links'>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <a href="#" onClick={() => showBookCategories()}>Books</a>
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
                    {localStorage.getItem('userLogged') ? <div><a href='javascript:void' onClick={logout()}>Logout</a></div>: <Link to='/login'><MdAccountCircle size={30} color='white'/></Link> }
                </div>
                <div style={{ margin: '0px 50px'}}>
                    <Link to='/cart'><MdShoppingCart size={30} color='white'/></Link>
                </div>
            </div>
    );
}