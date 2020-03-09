import React from 'react';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import TopNavBar from '../../components/TopNavbar';
import FormField from '../../components/FormField';
import { Loader } from '../../_utils'
import { MdAutorenew } from 'react-icons/md';

import { sendLogin } from '../../_actions'

import './LoginStyles.css';

class Login extends React.Component {
    state = {
        loading: false,
        emailAddress:'',
        password: ''
    }
    componentDidMount(){

    }
    componentDidUpdate(){
        if(this.props.result && this.props.result.emailAddress !== 'undefined'){
            //console.log('command')
            //this.setState({ loading: false })
        }
    }
    handleInput = (field, val) => {
        let fieldValue = val.target.value;
        this.setState({ [field]: fieldValue })
    }
    handleSubmit = () => {
        this.setState({ loading: true })

        this.props.login( { emailAddress: this.state.emailAddress, password: this.state.password}, () => {
            if(localStorage.getItem('userLogged')){
                // console.log(localStorage.getItem('userLogged'))
                this.setState({ loading: false })
                this.props.history.push('/cart')
            }
        }, () => {
            this.setState({ loading: false })
            alert('An error occured while logging in')
        })
    }
    render(){
        if(this.state.loading){
            return (
                <div className='login-main-container'>
                    <div className="login-form-wrapper">
                        {Loader()}
                    </div>
                </div>
            )
        }
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
        result: state.user.result
    }
}
const mapDispatchToProps = dispatch => {
    return {
        login: (payload, success, error) => dispatch( sendLogin(payload, success, error) )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)
