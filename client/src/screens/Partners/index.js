import React from 'react';
import TopNavBar from '../../components/TopNavbar';
import Footer from '../../components/Footer';
import StyledFooter from '../../components/StyledFooter';
import { FaFacebookF, FaTwitter, FaWhatsapp, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import styled from 'styled-components'

// import './PartnerStyles.css';
// import logo from '../../images/parental.png';

const MainPartnerContainer = styled.div`
    display: flex;
    flex-direction: row;
    background-color: #ddd;
    justify-content: center;
    padding: 1rem 2rem;
`;
const LeftBox = styled.div`
    flex: 0.8;
    height: 12rem;
    background-color: white;
    display: flex;
    flex-direction:column;
    padding: 2rem;
`;

const RightBox = styled.div`
    flex: 3;
    background-color: white;
    padding: 1rem 2rem;
    margin-left: .85rem;
`;


const PartnerListItem = styled.div`
    display: flex;
    flex-direction: row;
    width: 25%;
`;

const ListDetail = ({ icon, label }) => (
    <span style={{ height:'1.5rem',paddingLeft: '1.5rem',display: 'flex', flexDirection: 'row', width: 'auto'}}>
        <p>{icon}</p>
        <p style={{ marginLeft: '1rem', color: 'red'}}>{label}</p>
    </span>
)

const PartnerDetailComponent = ({ name = 'Willidocuments'}) => (
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom:'.5rem'}}>
        <span style={{ height: '1.5rem',display: 'flex', flexDirection: 'row', width: 'auto'}}>
            <p>1</p>
            <p style={{ marginLeft: '1rem'}}>{name}</p>
        </span>
        <ListDetail icon='1' label='www.willidocument-ug.com'/>
        <ListDetail icon='2' label='willidocument@gmail.com'/>
    </div>
)

const IconBox = ({ facebook, twitter, linkedin, youtube }) => (
    <div style={{ display: 'flex',justifyContent: 'center', alignItems: 'center',
                border:'1px solid #1F1F1F', width: '2.5rem', height: '2.5rem', margin: '.25rem .75rem'}}>
        {facebook && <FaFacebookF size={25} color='#1F1F1F'/>}
        {twitter && <FaTwitter size={25} color='#1F1F1F'/>}
        {linkedin && <FaLinkedinIn size={25} color='#1F1F1F'/>}
        {youtube && <FaYoutube size={25} color='#1F1F1F'/>}
    </div>
)

export default () => {
    return (
        <>
            <TopNavBar/>
            <MainPartnerContainer>
                <LeftBox>
                    <div style={{ padding:'.75rem'}}>
                        <h3>Partners</h3>
                    </div>
                </LeftBox>
                <RightBox>
                    <div style={{ position: 'relative', marginBottom:'2rem'}}>
                        <h2 className="title-bar-high">Team</h2>
                    </div>
                    <PartnerDetailComponent />
                    <PartnerDetailComponent />
                    <PartnerDetailComponent />
                    <PartnerDetailComponent />
                    <PartnerDetailComponent />
                    <PartnerDetailComponent />
                    <PartnerDetailComponent />
                </RightBox>
            </MainPartnerContainer>
            <StyledFooter />
        </>
    )
}