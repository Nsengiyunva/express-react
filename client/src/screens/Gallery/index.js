import React from 'react';
import TopNavBar from '../../components/TopNavbar';
import Footer from '../../components/Footer';

import './Styles.css'
import library from '../../images/library.jpg'

export default () => {
    return (
        <>
          <TopNavBar />
         <div className='gallery-body-container'>
            <h1>Gallery</h1>
            <p>
               Lorem ipsum, what makes a great story
               is the idea of the greatest inhibition 
               in the entire world Lorem ipsum, what makes a great story
               is the idea of the greatest inhibition 
               in the entire world Lorem ipsum, what makes a great story
               is the idea of the greatest inhibition 
               in the entire world 
            </p>
            <div className='gallery-image-row-1'>
                <div className='gallery-image-1'>
                    <img src={library} alt='gallery' className='gallery-image'/>
                </div>
                <div className='gallery-image-2'>
                    <img src={library} alt='gallery' className='gallery-image'/>
                </div>
            </div>

            <div className='gallery-image-row-2'>
                <div className='gallery-image-1'>
                    <img src={library} className='gallery-image'/>
                </div>
                <div className='gallery-image-section-2'>
                    <div className='decked-img-container'>
                        <div className='gallery-image-1'>
                            <img src={library} alt='gallery' className='gallery-image'/>
                        </div>
                        <div className='gallery-image-2'>
                            <img src={library} alt='gallery' className='gallery-image'/>
                        </div>
                    </div>
                    <div className='gallery-image-3'>
                        <img src={library} alt='gallery' className='gallery-image'/>
                    </div>
                </div>
            </div>
            <div className='gallery-image-row-3'>
                <div className='gallery-image-1'>
                    <img src={library} alt='gallery' className='gallery-image'/>
                </div>
                <div className='gallery-image-2'>
                    <img src={library} alt='gallery' className='gallery-image'/>
                </div>
                <div className='gallery-image-3'>
                    <img src={library} alt='gallery' className='gallery-image'/>
                </div>
            </div>
         </div>
         <Footer />
        </>
    )
}