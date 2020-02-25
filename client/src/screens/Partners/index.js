import React from 'react';
import TopNavBar from '../../components/TopNavbar';
import Footer from '../../components/Footer';
import StyledFooter from '../../components/StyledFooter';
import { MdCheckCircle,MdEmail, MdLocalPhone } from 'react-icons/md';
import { FaFacebookF, FaTwitter, FaMapPin, FaLinkedinIn, FaYoutube } from 'react-icons/fa'
import styled from 'styled-components'


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

const ListDetail = ({ icon, label, web, mail }) => (
    <span style={{height:'1.5rem',paddingLeft: '1.5rem',display: 'flex', flexDirection: 'row', alignItems:'center', width: 'auto'}}>
        {web && <FaMapPin size={15} color='green' />}
        {mail && <MdEmail size={15} color='green' />}
        <strong style={{ marginLeft: '1rem', color: 'green'}}>{label}</strong>
    </span>
)

const PartnerDetailComponent = ({ name = 'Willidocument Limited'}) => (
    <div style={{ display: 'flex', flexDirection: 'column', margin: '2rem 0', fontSize: '0.85rem'}}>
        <span style={{ padding:12,display: 'flex', flexDirection: 'row', width: 'auto', justifyContent: 'flex-start', alignItems: 'center'}}>
            <MdCheckCircle size={24} color='green'/>
            <strong style={{ alignSelf: 'flex-end',marginLeft: '.5rem'}}>{name}</strong>
        </span>
        <ListDetail web label='www.willidocument-ug.com'/>
        <ListDetail mail label='willidocument@gmail.com'/>
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
                        <h5>Partners</h5>
                    </div>
                </LeftBox>
                <RightBox>
                    <div style={{ position: 'relative', marginBottom:'2rem'}}>
                        <h2 className="title-bar-high">Partners</h2>
                    </div>
                    <div style={{ border:'1px solid red'}}>
                        <PartnerDetailComponent />
                        {/*<PartnerDetailComponent />
                        <PartnerDetailComponent />
                        <PartnerDetailComponent />
                        <PartnerDetailComponent />
                        <PartnerDetailComponent />
                        <PartnerDetailComponent /> */}
                    </div>
                </RightBox>
            </MainPartnerContainer>
            <StyledFooter />
        </>
    )
}