import React from 'react';
import TopNavBar from '../../components/TopNavbar';
import StyledFooter from '../../components/StyledFooter';
import { MdCheckCircle,MdEmail, MdLocalPhone } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa'
import styled from 'styled-components';
import { ListItem } from '../../components/StyledFooter';
import { departments} from '../../_fixtures'
import picture from '../../images/chart.png';
import bgImage from '../../images/13.jpg';
import { device } from '../../_utils/devices'
import { Title } from '../AboutUs';

export const MainPartnerContainer = styled.div`
    display: flex;
    flex-direction: ${props => props.column ? `column` : `row`};
    background-color: #ddd;
    justify-content: ${props => props.notJustified ? `flex-start` : `center`};
    padding: 1rem 2rem;

    @media ${device.mobileS}, @media ${device.mobileM}, @media ${device.mobileL} {
        flex-direction: column;
    }
    @media ${device.tablet}, @media ${device.laptop}, @media ${device.desktop}{
        flex-direction: row;
    }
`;
export const LeftBox = styled.div`
    flex: 0.8;
    height: 4rem;
    background-color: white;
    display: flex;
    flex-direction:column;
    padding: 2rem;

    @media ${device.mobileS}, @media ${device.mobileM}, @media ${device.mobileL} {
        margin-bottom: 1rem;
    }
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

export const ImageContainer = styled.div`
    display: flex;
    color: white;
    align-items: center;
    padding-left: 3rem;
    width: auto;
    height: 20rem;
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('${bgImage}');

    & h1 {
        color: white;
        font-size: 2.5rem;
    }
`;

const ListDetail = ({ icon, label }) => (
    <span style={{ height:'1.5rem',paddingLeft: '1.5rem',display: 'flex', flexDirection: 'row', width: 'auto'}}>
        <p>{icon}</p>
        <p style={{ marginLeft: '1rem', color: 'red'}}>{label}</p>
    </span>
)


const RowItemDetail = ({ email, phone, whatsapp, title, value = 'parental' }) => (
    <div style={{ display: 'flex', flexDirection: 'row',justifyContent: 'flex-start',alignItems: 'center'}}>
        {email && <MdEmail size={15} /> }
        {phone && <MdLocalPhone size={15} /> }
        {whatsapp && <FaWhatsapp size={15} /> }
        {title && <MdCheckCircle size={25} color='red'/>}
        {title ? <strong style={{ fontSize: '.85rem',marginLeft: '.75rem'}}>{value}</strong> : <p style={{ lineHeight:'.25rem',fontSize: '.85rem',marginLeft: '.5rem', color: email ? 'red': 'black', fontWeight: email ? 'bold': 'light'}}>{value}</p>}
    </div>
)
const ListItemContainer = ( {} ) => (
    <div>
        <div style={{display: 'flex', flexDirection: 'column',alignItems: 'flex-start',margin:'.75rem 0'}}>
            <RowItemDetail title value='Accounting Department'/>
            <p style={{ fontSize: '.85rem', margin:'0 2rem', lineHeight: '1.5rem'}}>At parental Africa’s accounting department, we take care of all accounting duties in the company. Our job includes but not limited to; Internal Financial Management, Reporting, Analysis, and Auditing</p>
            <div style={{ display: 'flex', flexDirection:'column', margin:'1rem 2rem'}}>
                <strong>Contact Us</strong>
                <RowItemDetail email value='parentalafricafinace@gmail.com'/>
                <RowItemDetail whatsapp value='+256780116681'/>
                <RowItemDetail phone value='+256750116681'/>
            </div>
        </div>
    </div>
)



const DeptListItem = ({ phone, whatsapp, email, title, content }) => (
    <div style={{ margin: '2rem'}}>
        <ListItem department value={title}/>
        <span>
            <p style={{ paddingLeft: '2rem', fontSize:'.85rem', lineHeight: '1.5rem'}}>
                {content}
            </p>
        </span>
        <div style={{ lineHeight: '0.025rem',display: 'flex', flexDirection: 'column',paddingLeft: '2rem', }}>
            <h4>Contact Us</h4>
            <ListItem email value={email} color={`green`}/>
            {whatsapp && <ListItem whatsapp value={whatsapp}/>}
            {phone && <ListItem phone value={phone} />}
        </div>
    </div>
)
export default () => {
    return (
        <>
            <TopNavBar/>
            <ImageContainer>
                <Title size={4} color='white'>Organisation Structure</Title>
            </ImageContainer>
            <MainPartnerContainer>
                <LeftBox>
                    <div style={{ padding:'.75rem'}}>
                        <li style={{ fontSize: '.75rem'}}>
                            <strong>Organizational Structure</strong>
                        </li>
                    </div>
                </LeftBox>
                <RightBox>
                    <div style={{ position: 'relative', marginBottom:'2rem'}}>
                        <h3 className="title-bar-high">1. Team</h3>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img src={picture}  />
                    </div>
                    <div>
                        <h3>2. Departments</h3>
                        {departments.map( item => {
                            return <DeptListItem
                                        key={item.name}
                                        title={item.name}
                                        email={item.emailAddress}
                                        whatsapp={item.whatsappNo}
                                        phone={item.phone}
                                        content={item.description}
                                    />
                        })}
                    </div>
                </RightBox>
            </MainPartnerContainer>
            <StyledFooter />
        </>
    )
}
