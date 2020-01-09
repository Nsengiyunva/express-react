import React from 'react';
import profile from '../../images/profile.jpg'
import './ProfileThumbnailStyles.css';

export default () => {
    return (
        <div className='picture-content-container'>
            <div className='profile-detail-image-container'>
                <img src={profile}  alt='profile' 
                    className='image' />
            </div>
        </div>
    )
}