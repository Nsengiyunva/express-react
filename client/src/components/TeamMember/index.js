import React from 'react';
import './TeamMember.css';
import profile from '../../images/profile.jpg';


export default () => {
    return (
        <div className='team-container'>
           <div className='image-container'>
                <img src={profile}  alt='team-member'/>
           </div>
           <div className='caption-container'>
                <h3>Joseph Ssebunya</h3>
                <h4>President and Partner</h4>
           </div>
        </div>
    )
}