import React from 'react';
import './BookListingItem.css';
import { Link } from 'react-router-dom'
import mind from '../../images/your_mind.PNG'

export default ({ imgUrl }) => {
    return (
        <div className='image-container'>
            <Link to='/book-description'>
                <img src={imgUrl || mind} className='list-item-image' alt='your mind' />
                <p>Great Animations</p>
                <span>Jonathan</span>
                <span>2020-01-01</span>
                <span>Stars</span>
            </Link>
        </div>
    )
}