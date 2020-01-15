import React from 'react';
import TopNavBar from '../../components/TopNavbar'
import CountryLocationsCard from '../../components/CountryLocationsCard'
import OverlayContent from '../../components/OverlayContent';

import { stores } from '../../_fixtures';
import map from '../../images/africa_map.png';
import './Bookstore.scss'

export default () => {
    return (
        <div>
            <TopNavBar />
            {/* <OverlayContent /> */}
            <div className='image-header-container'>
             <img src={map} alt='header-image' className='map-top-image'/>
            </div>
            <div className='vertical-cards-container'>
                {stores.map(({ country, locations }) => {
                    return <CountryLocationsCard country={country} locations={locations}/>
                })}
            </div>
        </div>
    )
}