import React from 'react';
import './TeamMember.scss';
import profile from '../../images/man.jpg';


export default ({ name= 'Andrew Williams', detail='President and Partner'}) => {
    return (
        <div className='team-container'>
           <div className='box'>
               <img src={profile} />
               <div className='image-text-description'>
                <strong>{name}</strong>
                <span>{detail}</span>
               </div>
           </div>
        </div>
    )
}