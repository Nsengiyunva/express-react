import React from 'react';
import { Link } from 'react-router-dom';
import './FooterStyles.scss'

export default () => {
      return (
        <div className='footer-container'>
            <div className='footer-section section-1'>
                <p>William books</p>
                <p>William is a book initiative working in areas of access to information,
                  accontability and collating what works in generating evidence
                </p>
                <p>2020 all rights reserved</p>
            </div>
            <div className='footer-section section-2'>
                <ul>
                    <strong>About Us</strong>
                    <li>
                        <Link to='/gallery'>Gallery</Link>
                    </li>
                    <li>
                        <Link to='/'>Categories</Link>
                    </li>
                    <li>
                        <Link to='/partners'>Partners</Link>
                    </li>
                    <li>
                        <Link to='/'>Help</Link>
                    </li>
                    <strong>Available on</strong>
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
                <p>Subscribe today and get latest Updates</p>
            </div>
          </div>
      )
};