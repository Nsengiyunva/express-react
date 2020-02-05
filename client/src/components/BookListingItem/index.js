import React from 'react';
import './BookListingItem.scss';
import { Link } from 'react-router-dom'
import { MdGrade } from "react-icons/md";


const ratings = ( rate ) => {
    return (<div className='rating-container'>
                <MdGrade size={15} />
                <MdGrade size={15} />
                <MdGrade size={15} />
                <MdGrade size={15} />
                <MdGrade size={15} />
                <span className='rating-number-figure'>
                    <strong>{rate}</strong>
                </span>
            </div>          
            )
}


export default ({ bookId, imgUrl , star = 0, order='', subtitle= '', title= 'Game Anim video games', 
                  author = 'Andrew Williams', price = '$ 8', year = '2019' }) => {
    return (
        <div className='image-container'>
            <Link to={`book-description/${bookId}`}>
                <img src={imgUrl} className='list-item-image' alt={imgUrl} />
                <div className='banner'><strong>NEW</strong></div>
                <div className='home-image-details'>
                    <span><strong>{`Title: ${title}`}</strong></span>
                    {/* <span><strong>{`Subtitle: ${subtitle}`}</strong></span> */}
                    <span><strong>{`Year of release: ${year}`}</strong></span>
                    <span><strong>{`Price: ${price}`}</strong></span>
                    {/* <span><strong>{`Order: ${order}`}</strong></span> */}
                    {ratings(star)}
                </div>
            </Link>
        </div>
    )
}