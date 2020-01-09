import React from 'react';
import ProfileDetail from '../ProfileDetail';
import './EventDescriptionStyles.css'

export default () => {
    return (
        <div className='event-description-wrapper'>
            <ProfileDetail />
            <div>
                <h3>Authors hour</h3>
                <span>
                    <p>
                        Attend our authors' day event. 
                        This event is held once in a year
                        Attend our authors' day event. 
                        This event is held once in a year
                        Attend our authors' day event. 
                        This event is held once in a year
                    </p>
                </span>
            </div>
        </div>
    )
}