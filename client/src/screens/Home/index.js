import React from 'react';
import './HomeStyle.css';
import TopNavBar from '../../components/TopNavbar';
import BookListingItem from '../../components/BookListingItem'

import confession from '../../images/confession.PNG'
import jesus from '../../images/jesus.PNG'
import marriage from '../../images/marriage.PNG'
import sin from '../../images/sin.PNG'
import growth from '../../images/growth.PNG'
import laws_kingdom from '../../images/sin.PNG'
import confidence from '../../images/confidence.PNG' 
import strong_courageous from '../../images/strong_courageous.PNG'
import devil from '../../images/devil.PNG'
import leaders from '../../images/leaders.PNG'
import worship from '../../images/worship.PNG'
import business_ideas from '../../images/business_ideas.PNG'
import dating from '../../images/dating.PNG'
import evil_spirits from '../../images/evil_spirits.PNG'
import managing_people from '../../images/managing_people.PNG'
import relationships from '../../images/relationships.PNG'
import think from '../../images/think.PNG'
import employer from '../../images/employer.PNG'
import godly_home from '../../images/godly_home.PNG'
import miracles from '../../images/miracles.PNG'
import money from '../../images/money.PNG'
import purpose from '../../images/purpose.PNG'
import praise from '../../images/praise.PNG'
import nation from '../../images/nation.PNG'
import without from '../../images/without.PNG'
import wealth from '../../images/wealth.PNG'
import voice from '../../images/voice.PNG'
import god_head from '../../images/god_head.PNG'
import four_gifts from '../../images/four_gifts.PNG'
import favor from '../../images/favor.PNG'
import human_nature from '../../images/human_nature.PNG'
import grace from '../../images/grace.PNG'
import giving from '../../images/giving.PNG'
import husband_wife from '../../images/husband_wife.PNG'
import exodus from '../../images/exodus.PNG'
import kind_love from '../../images/kind_love.PNG'
import prayer from '../../images/prayer.PNG'
import boss from '../../images/boss.PNG'


export default () => {
    return (
      <div className="main-container">
      <TopNavBar />
      <div style={{ display: 'flex',justifyContent: 'center', alignItems: 'center', 
                    paddingTop: '50px'}}>
        <strong style={{ fontSize: '20px', textAlign: 'center'}}>Top Trending</strong>
      </div>
      <div className='content-container'>              
        <BookListingItem />
        <BookListingItem imgUrl={confession}/>
        <BookListingItem imgUrl={confidence}/>
        <BookListingItem imgUrl={growth}/>
        <BookListingItem imgUrl={jesus}/>
        <BookListingItem imgUrl={laws_kingdom}/>
        <BookListingItem imgUrl={marriage}/>
        <BookListingItem imgUrl={sin}/>
        <BookListingItem imgUrl={strong_courageous}/>
        <BookListingItem imgUrl={devil}/>
        <BookListingItem imgUrl={leaders}/>
        <BookListingItem imgUrl={worship}/>
        <BookListingItem imgUrl={business_ideas}/>
        <BookListingItem imgUrl={dating}/>
        <BookListingItem imgUrl={employer}/>
        <BookListingItem imgUrl={evil_spirits}/>
        <BookListingItem imgUrl={godly_home}/>
        <BookListingItem imgUrl={managing_people}/>
        <BookListingItem imgUrl={relationships}/>
        <BookListingItem imgUrl={think}/>
        <BookListingItem imgUrl={worship}/>
        <BookListingItem imgUrl={god_head}/>
        <BookListingItem imgUrl={four_gifts}/>
        <BookListingItem imgUrl={favor}/>
        <BookListingItem imgUrl={human_nature}/>
        <BookListingItem imgUrl={husband_wife}/>
        <BookListingItem imgUrl={grace}/>
        <BookListingItem imgUrl={giving}/>
        <BookListingItem imgUrl={exodus}/>
        <BookListingItem imgUrl={kind_love}/>
        <BookListingItem imgUrl={dating}/>
        <BookListingItem imgUrl={boss}/>
        <BookListingItem imgUrl={evil_spirits}/>
        <BookListingItem imgUrl={miracles}/>
        <BookListingItem imgUrl={money}/>
        <BookListingItem imgUrl={praise}/>
        <BookListingItem imgUrl={purpose}/>
        <BookListingItem imgUrl={relationships}/>
        <BookListingItem imgUrl={nation}/>
        <BookListingItem imgUrl={prayer}/>
        <BookListingItem imgUrl={voice}/>
        <BookListingItem imgUrl={without}/>
        <BookListingItem imgUrl={wealth}/>
      </div>
      <div className='footer-container'>
        <div className='footer-section section-1'>
            <p>William books</p>
            <p>William is a book initiative working in areas of access to information,
              accontability and collating what works in generating evidence
            </p>
            <p>2020 all rights reserved</p>
        </div>
        <div className='footer-section section-2'>
          <strong>About Us</strong>
          <ul>
            <li>
              <a href='#'>Gallery</a>
            </li>
            <li>
              <a href='#'>Categories</a>
            </li>
            <li>
              <a href='#'>Patterns</a>
            </li>
            <li>
              <a href='#'>Help &</a>
            </li>
            <li>
              <a href='#'>Available on</a>
            </li>
          </ul>
        </div>
        <div className='footer-section section-3'>
          <strong>Contact</strong>
          <p>+256 200995993/4/5</p>
          <p>willibookslimited@gmail.com</p>
          <p>Plot 21, Yusuf Lule Road,<br/>
            Kampala, Uganda<br/>
            P.O. Box 11513
          </p>
        </div>
        <div className='footer-section section-4'>
          <strong>Subscribe</strong>
          <p>Subscribe today and get Latest Updates</p>
        </div>
      </div>
    </div>
    )
}