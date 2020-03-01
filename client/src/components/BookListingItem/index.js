import React from 'react';
import './BookListingItem.scss';
import { Link } from 'react-router-dom'
import { MdGrade } from "react-icons/md";
import styled from 'styled-components';
// import picture from '../../images/book1.jpg'
// import { ListItem } from '../StyledFooter';
import { fonts } from '../../_utils/devices'

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

const BookListingItem = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid green;
    width: auto;
    height: auto;
`;

const ItemContainer = styled.div`
    display: flex;
    border: 1px solid red;
    width: 12rem;
    height: 12rem;
    justify-content: center;
`;

const Image = styled.img`
    width: 100%;
    object-fit: contain;
`;

const ItemImageDetail = styled.span`
    display: flex;
    flex-direction: column;
`;

const Detail = styled.span`
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    font-size: ${fonts.mid};
    padding-left: ${fonts.large};

    &span {
        color: black;
    }
`;

const DetailText = ({label, answer}) => (
    <Detail>
        <span>{label}</span>
        <span>{answer}</span>
    </Detail>
)
export default ({ bookId, imgUrl , star = 0, order='', subtitle= '', title= 'Game Anim video games', 
                  author = 'Andrew Williams', price = 'UGX 30,000/=', year = '2019' }) => {
    return (
        // <div className='image-container'>
        //     <Link to={`book-description/${bookId}`}>
        //         {/* <img src={imgUrl} className='list-item-image' alt={imgUrl} /> */}
        //         <img src={picture} className='list-item-image' />
        //         <div className='banner'><strong>NEW</strong></div>
        //         <div className='home-image-details'>
        //             <span><strong>{`Title: ${title}`}</strong></span>
        //             <span><strong>{`Author: ${author}`}</strong></span>
        //             <span><strong>{`Price: ${price}`}</strong></span>
        //             {ratings(star)}
        //         </div>
        //     </Link>
        // </div>
        <BookListingItem>
           <ItemContainer>
               <Image src={imgUrl}/>
           </ItemContainer>
           <ItemImageDetail>
               {[
                { label: 'Title', answer: 'Your Mind'}, 
                { label: 'Author', answer: 'Andrew Williams'},
                { label: 'Price', answer: '2500'}
               ].map( item => {
                    return <DetailText label={item.label} answer={item.answer}/>
               })}
           </ItemImageDetail>
        </BookListingItem>
    )
}