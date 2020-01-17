import React from 'react';
import ProfileThumbnail from '../ProfileThumbnail'
import './ProfileDetailStyle.css'

export default () => {
    return (
        <div className='profile-wrapper'>
           <ProfileThumbnail />
            <div className='profile-details'>
                <strong>Sir Andrew Williams</strong>
                <strong>Founder and CEO</strong>
            </div>
        </div>
    )
}