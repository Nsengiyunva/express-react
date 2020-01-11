import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import TopNavBar from '../../components/TopNavbar';
import FormField from '../../components/FormField';
import { MdAutorenew } from 'react-icons/md';

import { sendLogin } from '../../_actions'

import './LoginStyles.css';

class Login extends React.Component {
    state = {
        emailAddress:'',
        password: ''
    }
    handleInput = (field, val) => {
        let fieldValue = val.target.value;
        this.setState({ [field]: fieldValue })
    }
    handleSubmit = () => {
        this.props.login( this.state, () => {
            localStorage.setItem('userLogged', this.state.emailAddress )
            this.props.history.push('/')
        }, () => {
            console.log('success')
        })
    }
    render(){
        console.log(this.state)
        return(
            <>
                <TopNavBar />
                <div className='login-main-container'>
                    <div className="login-form-wrapper">
                        <h1>Login</h1>
                        <form>
                            <FormField placeholder='Enter email address' valueField={this.state.emailAddress} onChange={input => this.handleInput('emailAddress',input)}/>
                            <FormField placeholder='Enter account password' valueField={this.state.password} type='password' onChange={input => this.handleInput('password',input)}/>
                            <div className='form-buttons-container' style={{ marginTop: '2px'}}>
                                {/* {!this.props.loading ? ( */}
                                    <>
                                        <FormField type='button' nameValue='submit' color='green' value='Login' submit onPress={this.handleSubmit}/>
                                        <FormField type='button' nameValue='reset' color='#666' value='Reset' onPress={this.clearForm}/>
                                    </>
                                {/* ) : <div><MdAutorenew style={{ marginLeft: '25px'}} size={30} color='green'/></div>} */}
                            </div>
                        </form>
                        <div>Dont have an account yet? <Link to='/register'>Sign Up for an Account</Link></div>
                    </div>
                </div>
            </>
        )
    }
}
const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return {
        login: (payload, success, error) => dispatch( sendLogin(payload, success, error) )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)