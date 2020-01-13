import React from 'react';
import TopNavBar from '../../components/TopNavbar'
import CountryLocationsCard from '../../components/CountryLocationsCard'
import OverlayContent from '../../components/OverlayContent';

import { stores } from '../../_fixtures';
import './Bookstore.css'

export default () => {
    console.log('test data', stores)
    return (
        <div>
            <TopNavBar />
            <OverlayContent />
            <div className='vertical-cards-container'>
                {stores.map(({ country, locations }) => {
                    return <CountryLocationsCard country={country} locations={locations}/>
                })}
            </div>
        </div>
    )
}