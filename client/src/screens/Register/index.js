import React from 'react';
import { connect } from 'react-redux'
import TopNavBar from '../../components/TopNavbar';
import FormField from '../../components/FormField';
import { MdAutorenew } from 'react-icons/md'
import './RegistrationStyles.css';

import { register } from '../../_actions'

class Register extends React.Component {
    state = {
        firstname: '',
        lastname: '',
        emailAddress: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
        country:'',
        city:''
    }
    sendPostRequest = async () => {
        await this.props.signUp(this.state, () => {
            this.clearForm();
            this.props.history.push('/login')
        }, () => {
           alert('An error occured while registering')
        })
    }
    handleInput = (field,input) => {
       let value = input.target.value;
       this.setState({[field]: value})
    }
    handleSubmit = async () => {
        let error = {};
        for(var i in this.state){
            if(this.state[i] === ''){
                error = { 'error':'there could some missing values in the form'}
            }
        }
        if(Object.values(error).length > 0){
            alert(error.error)
        }
        else {
            await this.sendPostRequest();
        }
    }
    clearForm = () =>  {
        Object.keys(this.state).forEach( field => {
            this.setState({ [field]: '' })
        })
    }
    render(){
        return (
            <div>
                <TopNavBar />
                <div className='registration-form-container'>
                    <div className='form-wrapper'>
                        <h1>Registration Form</h1>
                        <form method="POST" ref={ (el) => this.myRegisterForm = el }>
                            <FormField placeholder='Enter first name' valueField={this.state.firstname} onChange={input => this.handleInput('firstname',input)}/>
                            <FormField placeholder='Enter last name' valueField={this.state.lastname} onChange={input => this.handleInput('lastname',input)}/>
                            <FormField placeholder='Enter email address' valueField={this.state.emailAddress} onChange={input => this.handleInput('emailAddress',input)}/>
                            <FormField placeholder='Enter account password' valueField={this.state.password} type='password' onChange={input => this.handleInput('password',input)}/>
                            <FormField placeholder='Confirm password' valueField={this.state.confirmPassword} type='password' onChange={input => this.handleInput('confirmPassword',input)}/>
                            <FormField placeholder='Enter phone number' valueField={this.state.phoneNumber}  onChange={input => this.handleInput('phoneNumber',input)}/>
                            <FormField placeholder='Enter country' valueField={this.state.country} onChange={input => this.handleInput('country',input)}/>
                            <FormField placeholder='Enter city location' valueField={this.state.city} onChange={input => this.handleInput('city',input)}/>
                            <div className='form-buttons-container' style={{ marginTop: '2px'}}>
                                {!this.props.loading ? (
                                    <>
                                        <FormField type='button' nameValue='submit' color='green' value='Submit' submit onPress={this.handleSubmit}/>
                                        <FormField type='button' nameValue='reset' color='#666' value='Reset' onPress={this.clearForm}/>
                                    </>
                                ) : <div><MdAutorenew style={{ marginLeft: '25px'}} size={30} color='green'/></div>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
    
}
const mapStateToProps = state => {
    return {
        loading: state.user.loading
    }
}
const mapDispatchToProps = dispatch => {
    return {
        signUp: (payload, success, error) => dispatch( register(payload, success, error) )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);