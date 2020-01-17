import React from 'react';
import TopNavBar from '../../components/TopNavbar'
import Footer from'../../components/Footer'
import OverlayContent from '../../components/OverlayContent';
import EventTopContent from '../../components/EventTopContent';
import EventDescription from '../../components/EventDescription';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdShoppingCart, MdAccountCircle } from 'react-icons/md'

import './EventStyles.scss'
import events from '../../images/events.png'

import { eventsData } from '../../_fixtures'

export default () => {
    return (
        <>
         <TopNavBar />
         {/* <div className='top-layer'>
            <span>
              <h1>Welcome to,</h1>
              <h2>Willibook Events</h2>
              <p>We are always at the<br />
              forefront of providing you with the best book events within the country</p>
            </span>
         </div> */}
         <div className='image-header-container'>
             <img src={events} alt='header-image' className='events-top-image'/>
         </div>
         <div className='events-listing-container'>
             <EventTopContent color='green'/>
             <EventTopContent color='blue'/>
             <EventTopContent color='red'/>
             <EventTopContent color='orange'/>
         </div>
         <div className='events-timeline-container'>
           {/* <EventDescription /> */}
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
            {/* <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="April 2013"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<MdAccountCircle />}
            >
                <EventDescription />
                {/* <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                <p>
                Strategy, Social Media
                </p> 
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="November 2012"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<MdAccountCircle />}
            >
                <EventDescription />
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2002 - 2006"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<MdAccountCircle />}
            >
                <EventDescription />
            </VerticalTimelineElement> */}
            </VerticalTimeline>
        </div>
        <Footer />
        </>
    )
}