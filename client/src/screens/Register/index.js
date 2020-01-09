import React from 'react';
import TopNavBar from '../../components/TopNavbar';
import FormField from '../../components/FormField';
import './RegistrationStyles.css'

export default () => {
    return (
        <div>
            <TopNavBar/>
            <div className='registration-form-container'>
                <div className='form-wrapper'>
                    <h1>Registration Form</h1>
                    <form method="POST" action="#">
                        <FormField placeholder='Enter first name'/>
                        <FormField placeholder='Enter last name'/>
                        <FormField placeholder='Enter email'/>
                        <FormField placeholder='Enter account password' type='password'/>
                        <FormField placeholder='Confirm password' type='password'/>
                        <FormField placeholder='Enter phone number'/>
                        <FormField placeholder='Enter country'/>
                        <FormField placeholder='Enter city location'/>
                        <div className='form-buttons-container' style={{ marginTop: '2px'}}>
                            <FormField type='button' nameValue='submit' color='green' value='Submit' submit/>
                            <FormField type='button' nameValue='reset' color='#666' value='Reset'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}