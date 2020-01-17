import React from 'react';
import ProfileDetail from '../ProfileDetail';
import './EventDescriptionStyles.css'

export default ({ title = 'Authors hour', description = "Attend our authors' day event. This event is held once in a year" }) => {
    return (
        <div className='event-description-wrapper'>
            <ProfileDetail />
            <div>
                <h3>{title}</h3>
                <span>
                    <p>
                        {description}
                    </p>
                </span>
            </div>
        </div>
    )
}