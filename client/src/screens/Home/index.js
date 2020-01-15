import React from 'react';

import TopNavBar from '../../components/TopNavbar';
import Footer from '../../components/Footer';
import BookListingItem from '../../components/BookListingItem'
import './HomeStyle.scss';

import { booklistings } from '../../_fixtures'

export default () => {
    return (
      <>
      <TopNavBar />
      <div className='items-wrapper-container'>
        <h2>Top Trending</h2>
        <div className='items-content'>
          {booklistings.map( (item) => {
            return (
              <BookListingItem  key={item.title} imgUrl={item.imageUrl} title={item.title}/>
            )
          })}
        </div>
      </div>
      <Footer />
    </>
    )
}