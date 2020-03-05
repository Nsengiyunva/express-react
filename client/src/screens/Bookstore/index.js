import React from 'react';
import TopNavBar from '../../components/TopNavbar'
import StyledFooter from '../../components/StyledFooter'

import CountryLocationsCard from '../../components/CountryLocationsCard'
import OverlayContent from '../../components/OverlayContent';
import { Title } from '../AboutUs'

import { stores } from '../../_fixtures';
import map from '../../images/africa_map.png';
import './Bookstore.scss'

export default () => {
    return (
        <>
            <TopNavBar />
            <div>
                <div className='image-header-container'>
                <img src={map} alt='header-image' className='map-top-image'/>
                <div className="left-content-container">
                    <Title size={4} color='white'>WilliBook Stores</Title>
                    <div className='tag'>
                        <span>are available</span>
                        <span>in these countries</span>
                    </div>
                    <div className="lists-locations">
                        <ul className="first-column">
                            <li>Uganda</li>
                            <li>Zambia</li>
                        </ul>
                        <ul className="second-column">
                            <li>Kenya</li>
                            <li>Malawi</li>
                        </ul>
                        <ul className="second-column">
                            <li>Ghana</li>
                            <li>Nigeria</li>
                        </ul>
                        <ul className="first-column">
                            <li>Bostwana</li>
                            <li>Sierra Leone</li>
                        </ul>
                    </div>
                </div>
                </div>
                <div className='vertical-cards-container'>
                    {stores.map(({ country, locations }) => {
                        return <CountryLocationsCard country={country} locations={locations} current="Uganda"/>
                    })}
                </div>
            </div>
            <StyledFooter />
        </>
    )
}
