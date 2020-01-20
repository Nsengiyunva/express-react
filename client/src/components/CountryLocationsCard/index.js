import React from 'react';
import './Styles.scss'

export default ({ country, locations, current }) => {
    return (
        <div className='list-card-container' style={ { backgroundColor: country === current ? 'green': '#ddd',color: country === current ? 'white': 'black' } }>
            <h3>{country}</h3>
            <ul>
                {locations.map( district => (
                    <li key={district}>{district}</li>
                ))}
            </ul>
        </div>
    )
}
