import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdShoppingCart } from 'react-icons/md';
import {  } from 'react-icons/fa'
import logo from '../../images/williLogo.jpg'
import { FaFacebookF, FaTwitter, FaWhatsapp, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

const Footer = styled.div`
   display: flex;
   justify-content: center;
   align-items: flex-start;
   width: 100%;
   background-color: black;
   flex-direction: row;
   font-family: 'Montserrat', sans-serif;

   @media(max-width: 768px){
    flex-wrap: wrap;
   }
`;

const ItemContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 20rem;
    height: auto;
    margin: 0 2rem;
    color: white;
    padding: 4rem 0;

    @media(max-width: 768px){
        margin-top: 1.5rem;
        width: 25rem;
        heighy: 30rem;
        height: auto;
    }
`;


const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 2rem;
    width: 3rem;
    height: 3rem;
    border: 1px solid red;
    background-color: white;
    margin-right: 0.75rem;
    margin-top: 2rem;
`;

const ListItem = ({ value, facebook, twitter, whatsapp, linkedin, email, phone, location, youtube }) => (
    <div style={{ display:'flex',flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
        {facebook && <FaFacebookF size={30} color={`green`}/> }
        {twitter && <FaTwitter size={30} color={`green`}/> }
        {whatsapp && <FaWhatsapp size={15} color={`green`}/> }
        {phone && <FaWhatsapp size={15} color={`green`}/> }
        {linkedin && <FaLinkedinIn size={30} color={`green`}/> }
        {email && <FaLinkedinIn size={15} color={`green`}/> }
        {location && <FaFacebookF size={15} color={`green`}/> }
        {youtube && <FaYoutube size={30} color={`green`}/> }
        <p style={{ marginLeft: '.75rem'}}>{value}</p>
    </div>
)
class StyledFooter extends Component {
    render(){
        return(
            <Footer>
                <ItemContainer>
                    <div>
                        <img src={logo} style={{ width: '10rem'}}/>
                        <p>Course View Tower</p>
                        <p>Plot 21, Yusuf Lule Road</p>
                        <p>P.O. Box 11513</p>
                        <p>Kampala, Uganda </p>
                        <div style={{ lineHeight: '.5rem', marginTop: '3rem'}}>
                            <ListItem phone value={`+256 200995993/4/5`} />
                            <ListItem whatsapp value={`+256780116681`} />
                            <ListItem email value={`willibookslimited@gmail.com`} />
                            <ListItem location value={`www.willibookslimited.com`} />
                        </div>   
                    </div>
                </ItemContainer>
                <ItemContainer>
                    <div style={{ display: 'flex',flexDirection: 'column'}}>
                        <h3>Partners</h3>
                        <div>
                            <ul style={{ lineHeight: '2rem', paddingLeft: '.75rem'}}>
                                <li style={{ paddingBottom: '.75rem'}}>Parental Africa Limited</li>
                                <li style={{ paddingBottom: '.75rem'}}>Williolum Limited</li>
                                <li style={{ paddingBottom: '.75rem'}}>Willifarm Limited</li>
                                <li style={{ paddingBottom: '.75rem'}}>Willihead Limited</li>
                                <li style={{ paddingBottom: '.75rem'}}>Willidocument Limited</li>
                                <li style={{ paddingBottom: '.75rem'}}>Sir Williams law firm</li>
                                <li style={{ paddingBottom: '.75rem'}}>Sir Williams Accounting firm</li>
                                <li style={{ paddingBottom: '.75rem'}}>Sir Williams IT firm</li>
                                <li style={{ paddingBottom: '.75rem'}}>Sir Williams business consultancy firm</li>
                            </ul>
                        </div>
                    </div>
                </ItemContainer>
                <ItemContainer>
                <div style={{ display: 'flex',flexDirection: 'column'}}>
                        <h3>About Us</h3>
                        <div>
                            <ul style={{ lineHeight: '2rem', paddingLeft: 0, listStyleType: 'none' }}>
                                <li style={{ paddingBottom: '.75rem'}}>
                                    <Link style={{ color: 'white', textDecoration: 'none'}} to='/gallery'>Gallery</Link>
                                </li>
                                <li style={{ paddingBottom: '.75rem'}}>
                                    <Link style={{ color: 'white', textDecoration: 'none' }} to='/categories'>Categories</Link>
                                </li>
                                <li style={{ paddingBottom: '.75rem'}}>
                                    <Link style={{ color: 'white', textDecoration: 'none' }} to='/partners'>Partners</Link>
                                </li>
                                <li style={{ paddingBottom: '.75rem'}}>
                                    <Link style={{ color: 'white', textDecoration: 'none' }} to='/organisation'>Organisation</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </ItemContainer>
                <ItemContainer>
                <div style={{ display: 'flex',flexDirection: 'column'}}>
                        <h3>Connect With Us</h3>
                            <div>
                                <ListItem facebook value={`Follow Us On Facebook`} />
                                <ListItem linkedin value={`Follow Us On Instagram`}/>
                                <ListItem twitter value={`Follow Us on Twitter`} />
                                <ListItem linkedin value={`Connect With Us On Linkedin`} />
                                <ListItem linkedin value={`Contact Us on Skype`} />
                            </div>
                            <div style={{ marginTop: '2rem' }}>
                                <h5>Subscribe today and get latest updates</h5>
                                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: '' }}>
                                    <input type='text' style={{ borderTopLeftRadius:'.25rem', borderBottomLeftRadius:'.25rem',padding: '.5rem', fontFamily: 'inherit', border: 'none', outline:'none'}} placeholder={`Your Email Address`} />
                                    <button onClick={() => alert('test')} style={{ borderTopRightRadius:'.25rem', borderBottomRightRadius:'.25rem', backgroundColor: 'green',color: 'white', border: 'none', outline:'none', fontFamily: 'inherit', cursor:'pointer' }}>Subscribe</button>
                                </div>
                            </div>
                            {/* <div style={{ display: 'flex', flexDirection: 'row' }}>
                                <IconContainer />
                                <IconContainer />
                                <IconContainer />
                                <IconContainer />
                            </div> */}
                        <div>
                </div>
                    </div>
                </ItemContainer>
            </Footer>
        )
    }
}

export default StyledFooter;
