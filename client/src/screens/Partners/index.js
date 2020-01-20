import React from 'react';
import TopNavBar from '../../components/TopNavbar';
import Footer from '../../components/Footer';

import './PartnerStyles.css';
import logo from '../../images/parental.png';

const showLogo = () => {
    return (
        <div className='logo-wrapper'>
            <img src={logo} alt='logo' />
        </div>
    )
}
export default () => {
    return (
        <>
            <TopNavBar/>
            <div className='partners-container-wrapper'>
                <div className='partners-content'>
                    <h1 style={{ color:'gray'}}>Our Partners</h1>
                    <div className='logos'>
                        {showLogo()}
                        {showLogo()}
                        {showLogo()}
                        {showLogo()}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}