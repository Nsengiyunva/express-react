import React from 'react';
import './EventTopContentStyles.css'

export default ({ color }) => {
    return (
        <div className='event-card-container' style={{ borderColor: color }}>
            <div className='date-event-banner' style={{ backgroundColor: color }}>
                <strong>Day 1</strong>
            </div>
            <div className='day-event-container'>
                <h1 style={{ color }}>25</h1>
                <div className='month-year-container'>
                    <strong style={{ color }}>JAN</strong>
                    <strong>2020</strong>
                </div>
            </div>
        </div>
    )
}