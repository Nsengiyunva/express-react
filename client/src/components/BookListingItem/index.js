import React from 'react';
import './BookListingItem.scss';
import { Link } from 'react-router-dom'
import { MdGrade } from "react-icons/md";
import styled from 'styled-components';
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
    width: auto;
    height: auto;
    margin: ${fonts.large};
`;

const ItemContainer = styled.div`
    display: flex;
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
    justify-content: space-between;
    font-size: ${fonts.mid};
    padding-left: ${fonts.large};

    &span {
        color: black;
    }
`;

const DetailText = ({label, answer}) => (
    <Detail>
        <span>{`${label}:`}</span>
        <strong>{answer}</strong>
    </Detail>
)
export default ({ bookId, imgUrl , star = 0, order='', subtitle= '', title= 'Game Anim video games', 
                  author = 'Andrew Williams', price = 'UGX 30,000/=', year = '2019' }) => {
    return (
          <BookListingItem>
                <Link to={`book-description/${bookId}`} style={{ cursor: 'pointer', textDecoration: 'none', color: 'black'}}>
                    <ItemContainer>
                        <Image src={imgUrl}/>
                    </ItemContainer>
                    <ItemImageDetail>
                        {[
                            { label: 'Title', answer: title }, 
                            { label: 'Author', answer: author },
                            { label: 'Price', answer: price }
                        ].map( ({ label, answer }) => {
                                return <DetailText label={label} answer={answer} />
                        })}
                    </ItemImageDetail>
                </Link>
          </BookListingItem>
    )
}