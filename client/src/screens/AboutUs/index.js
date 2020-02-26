import React from 'react';
import TopNavBar from '../../components/TopNavbar';
import StyledFooter, { ListItem } from '../../components/StyledFooter';
import styled from 'styled-components';
import { device } from '../../_utils/devices';
import { ImageContainer, MainPartnerContainer, LeftBox } from '../Team';


export default () => {
    return (
        <>
            <TopNavBar/>
            <ImageContainer>
                <h1>About Us</h1>
            </ImageContainer>
            <MainPartnerContainer>
                <div style={{ display: 'flex', flexDirection: 'row'}}>
                    <div style={{ width: '50%' }}> details </div>
                    <div style={{ width: '50%' }}> image </div>
                </div>
            </MainPartnerContainer>
            <StyledFooter />
        </>
    )
}