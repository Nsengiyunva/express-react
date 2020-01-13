import React from 'react';
import './Styles.css'

export default ({ country, locations }) => {
    return (
        <div className='list-card-container'>
            <h3>{country}</h3>
            <ul>
                {locations.map( district => (
                    <li key={district}>{district}</li>
                ))}
            </ul>
        </div>
    )
}
