import React from 'react';
import TopNavBar from '../../components/TopNavbar';
import FormField from '../../components/FormField';
import './ContactStyles.css'

const socialIcon = () => {
    return (
        <div className='icon-container'>
            <span>f</span>
        </div>
    )
}
export default () => {
    return (
        <>
            <TopNavBar />
            <div className='contact-container'>
                <div className='contact-title-container'>
                    <h1>Contact Us</h1>
                    <h2>Contact Us</h2>
                </div> 
                <div className='contact-content-wrapper'>
                    <div className='contact-details'>
                        <div className='detail'>
                            <h2>Address</h2>
                            <p>Plot 21, Yusuf Lule Road</p>
                            <p>Kampala-Uganda</p>
                            <p>P.O.Box 11513</p>
                        </div>
                        <div className='detail'>
                            <h2>Business Hours</h2>
                            <p>Monday-Friday: 8am to 6pm</p>
                            <p>Saturday: closed</p>
                            <p>Sunday: closed</p>
                        </div>
                        <div className='detail'>
                            <h2>Email</h2>
                            <p className='subtitle'>willibooks@gmail.com</p>
                        </div>
                        <div className='detail'>
                            <h2>Phone</h2>
                            <p className='subtitle'>+256 7088343983</p>
                        </div>
                    </div>
                    <div className='contact-form'>
                        <form method='post'>
                            <FormField nameValue='name' placeholder='Enter Name'/>
                            <FormField nameValue='emailAddress' placeholder='Enter Email'/>
                            <FormField nameValue='subject' placeholder='Enter Subject'/>
                            <FormField type='textarea' nameValue='message' placeholder='Enter Message'/>
                            <div className='form-buttons-container'>
                                <FormField type='button' nameValue='submit' color='green' value='Submit' submit/>
                                <FormField type='button' nameValue='reset' color='#666' value='Reset'/>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='social-links-container'>
                    {socialIcon()}
                    {socialIcon()}
                    {socialIcon()}
                    {socialIcon()}
                    {socialIcon()}
                    {socialIcon()}
                </div>   
            </div>
        </>
    )
}