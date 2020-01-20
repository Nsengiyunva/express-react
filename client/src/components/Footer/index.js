import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { socialMediaListing } from '../../screens/Contact'

import { FaLocationArrow } from 'react-icons/fa'
import './FooterStyles.scss'

class Footer extends React.Component {
      state = {
        emailAddress: ''
      }
      subscribeUser = () => {
          
      }
      render(){
        return (
            <div className='footer-container'>
                <div className='footer-section section-1'>
                    <p>William books</p>
                    <p>William is a book initiative working in areas of access to information,
                      accontability and collating what works in generating evidence
                    </p>
                    <p>2020 all rights reserved</p>
                </div>
                <div className='footer-section section-2'>
                    <ul>
                        <strong>About Us</strong>
                        <li>
                            <Link to='/gallery'>Gallery</Link>
                        </li>
                        <li>
                            <Link to='/'>Categories</Link>
                        </li>
                        <li>
                            <Link to='/partners'>Partners</Link>
                        </li>
                        <li>
                            <Link to='/'>Help</Link>
                        </li>
                        <strong>Available on</strong>
                    </ul>
                </div>
                <div className='footer-section section-3'>
                    <strong>Contact</strong>
                    <p>+256 200995993/4/5</p>
                    <p>willibookslimited@gmail.com</p>
                    <p>Plot 21, Yusuf Lule Road,<br/>
                        Kampala, Uganda<br/>
                        P.O. Box 11513
                    </p>
                </div>
                <div className='footer-section section-4'>
                    <strong>Subscribe</strong>
                    <p>Subscribe today and get latest Updates</p>
                    <form style={{ position:'relative', width: '100%'}}>
                        <input type="text" placeholder='' value={this.state.emailAddress}  
                            onChange={ input => this.setState({ emailAddress: input.target.value })} 
                            style={{ fontFamily:'inherit',paddingLeft: '10px',borderRadius:  '10px', lineHeight:  '25px', width: '90%'}}/>
                        <a style={{ position: 'absolute', top: '0.8em',right: '3em'}} 
                            href='javascript:void(0)'
                            onClick={ () => alert('submit')}
                            >
                            <FaLocationArrow color={`#666`} size={15} />
                        </a>
                    </form>
                    <div>
                        {socialMediaListing('small')}
                    </div>
                </div>
              </div>
          )
      }
};
const mapStateToProps = state => {
    return {

    }
}
const mapDispatchToProps = dispatch => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer)