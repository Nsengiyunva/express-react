import React from 'react';
import TopNavBar from '../../components/TopNavbar'
import CountryLocationsCard from '../../components/CountryLocationsCard'
import OverlayContent from '../../components/OverlayContent'
import './Bookstore.css'

export default () => {
    return (
        <div>
            <TopNavBar />
            <OverlayContent />
            <div className='vertical-cards-container'>
                <CountryLocationsCard />
                <CountryLocationsCard />
                <CountryLocationsCard />
                <CountryLocationsCard />
                <CountryLocationsCard />
                <CountryLocationsCard />
                <CountryLocationsCard />
                <CountryLocationsCard />
                <CountryLocationsCard />
                <CountryLocationsCard />
            </div>
        </div>
    )
}