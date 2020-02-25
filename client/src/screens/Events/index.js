import React from 'react';
import { connect } from 'react-redux';

import TopNavBar from '../../components/TopNavbar'
import StyledFooter from'../../components/StyledFooter';
import EventTopContent from '../../components/EventTopContent';
import EventDescription from '../../components/EventDescription';
import FormField from '../../components/FormField'


import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdShoppingCart, MdAccountCircle } from 'react-icons/md'

import './EventStyles.scss'
import events from '../../images/events.png'

import { eventsData } from '../../_fixtures'

class Events extends React.Component {
    state = {
        name: '',
        emailAddress: '',
        phone: '',
        message: ''
    }
    handleInput = (field,input)=> {
        let val =  input.target.value;
        this.setState({[field]: val })
    }
    handleSubmit = () => {
        alert('register for an event')
    }
    render(){
        return (
            <>
             <TopNavBar />
             <div className='image-header-container'>
                 <img src={events} alt='header-image' className='events-top-image'/>
                 <div className='events-top-container'>
                    <strong className='event-header'>Welcome to</strong>
                    <span className='event-subheader'>willibooks Events,</span>
                    <span className="event-light-header">We are always at the</span>
                    <span className="event-light-header">forefront of providing you with the best</span>
                    <span className="event-light-header">book events within the country</span>
                 </div>
             </div>
             <div className='events-listing-container'>
                 <EventTopContent color='green'/>
                 <EventTopContent color='blue'/>
                 <EventTopContent color='red'/>
                 <EventTopContent color='orange'/>
             </div>
             <div className='events-timeline-container'>
                <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date=""
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<MdAccountCircle />}
                >
                    <EventDescription title={eventsData[0].title} description={eventsData[0].description} />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date=""
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<MdAccountCircle />}
                >
                    <EventDescription title={eventsData[1].title} description={eventsData[1].description} />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date=""
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<MdAccountCircle />}
                >
                    <EventDescription title={eventsData[2].title} description={eventsData[2].description} />
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date=""
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<MdAccountCircle />}
                >
                    <EventDescription title={eventsData[3].title} description={eventsData[3].description} />
                </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
            <div className="register-event-form">
                <div className='re-form-container'>
                   <div className="left-events-form-part">
                       <h2>Register</h2>
                       <p>
                           By filling in your name, email address and phone number means you are applying to
                           join our events
                       </p>
                   </div>
                   <form className="fill-register-form">
                        <FormField placeholder='Full name' valueField={this.state.name}  onChange={input => this.handleInput('name',input)}/>
                        <FormField placeholder='Email Address' valueField={this.state.emailAddress}  onChange={input => this.handleInput('emailAddress',input)}/>
                        <FormField placeholder='Phone' valueField={this.state.phone} onChange={input => this.handleInput('phone',input)}/>
                        <FormField type="textarea" placeholder='Additional message' valueField={this.state.message} onChange={input => this.handleInput('message',input)}/>
                        <div style={{ marginTop: '3em'}}>
                            <FormField type='button' nameValue='submit' color='green' value='Register' submit onPress={this.handleSubmit}/>
                        </div>
                   </form>
                </div>
            </div>
            <StyledFooter />
            </>
        )
    }
}
const mapDispatchToProps = dispatch => {
    return {
        
    }
}
export default connect(null, mapDispatchToProps)(Events);