// import React from 'react';
// import TopNavBar from '../../components/TopNavbar';
// import Footer from '../../components/Footer';
// import TeamMember from '../../components/TeamMember';

// import './TeamStyles.scss';
// import { team, departments, committees } from '../../_fixtures'

// const DepartmentDetail = ({ title, subtitle, email, committee, issues }) => {
//     return (
//         <div className='department-description-container'>
//             <strong>{title}</strong>
//             <span>{subtitle}</span>
//             {!committee && <span>Contact us <a href="javascript:void(0)">{email}</a></span>}
//             {committee && <span>{issues}</span>}
//         </div>
//     )
// }

// export default () => {
//     return (
//         <>
//         <TopNavBar />
        
//         {/* <div className='team-content-container'>
//             <div className='wrapper'>
//                 <div>
//                     <h1 className='title'>Meet our Team</h1>
//                     <p className='subtitle'>Our team is your team. When
//                         your mission is to be better, faster
//                         and smarter,you need thenest people driving
//                         yout vision forward. You need people who can
//                         create focussed marketing strategies that 
//                         align with business golas, who can infuse their
//                         creativity into groundbreaking campaigns and who
//                         can analyze data to optimise every tactic 
//                         along the way. Yon need walker sands. get to know 
//                         your team below.
//                     </p>
//                 </div>
//                 <div className='owners-container'>
//                     <h2 className='title'>Owners</h2>
//                     <div className='owners-row'>
//                         {team.map( item => {
//                             return (
//                                 item.owner && <TeamMember key={item.id} name={item.name} detail={item.detail} />
//                             )
//                         })}
//                     </div>
//                     <h2 className='title'>Directors</h2>
//                     <div className='owners-row directors'>
//                     {team.map( item => {
//                             return (
//                                 item.director && <TeamMember key={item.id} name={item.name} detail={item.detail} />
//                             )
//                         })}
//                     </div>
//                     <h2 className='title'>Departments</h2>
//                     <div className='owners-row departments'>
//                         {departments.map( item => {
//                             return (
//                                 <DepartmentDetail key={item.name} title={item.name} subtitle={item.description} email={item.emailAddress}/>
//                             )
//                         })}
                        
//                     </div>
//                     <h2 className='title'>Internal Committee</h2>
//                     <div className='owners-row departments'>
//                         {committees.map( item => {
//                             return (
//                                 <DepartmentDetail committee key={item.name} title={item.name} subtitle={item.description} issues={item.issues}/>
//                             )
//                         })}
                        
//                     </div>
//                 </div>
//             </div>
//         </div> */}
//         </>
//     )
// }
import React from 'react';
import TopNavBar from '../../components/TopNavbar';
import Footer from '../../components/Footer';
import StyledFooter from '../../components/StyledFooter';
import { MdCheckCircle,MdEmail, MdLocalPhone } from 'react-icons/md';
import { FaWhatsapp } from 'react-icons/fa'
import styled from 'styled-components'
import picture from '../../images/organogram.png'
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

export default () => {
    return (
        <>
            <TopNavBar/>
            <MainPartnerContainer>
                <LeftBox>
                    <div style={{ padding:'.75rem'}}>
                        <li>Organisational Structure</li>
                        {/* <div style={{ display: 'flex', flexWrap:'wrap', flexDirection:'row', 
                                    width: '80%', height: 'auto' }}>
                            <IconBox facebook/>
                            <IconBox twitter/>
                            <IconBox linkedin/>
                            <IconBox youtube/>
                        </div> */}
                    </div>
                </LeftBox>
                <RightBox>
                    <div style={{ position: 'relative', marginBottom:'2rem'}}>
                        <h3 className="title-bar-high">1. Team</h3>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <img src={picture} style={{}} />
                    </div>
                    <div>
                        <h3>2. Departments</h3>
                        <ListItemContainer />
                        <ListItemContainer />
                    </div>
                </RightBox>
            </MainPartnerContainer>
            <StyledFooter />
        </>
    )
}