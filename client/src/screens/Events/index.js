import React from 'react';
import TopNavBar from '../../components/TopNavbar'
import OverlayContent from '../../components/OverlayContent';
import EventTopContent from '../../components/EventTopContent';
import EventDescription from '../../components/EventDescription';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdShoppingCart, MdAccountCircle } from 'react-icons/md'

import './EventStyles.scss'
import events from '../../images/events.png'

export default () => {
    return (
        <>
         <TopNavBar />
         {/* <OverlayContent event/> */}
         <div className='top-layer'>
            <span>
              <h1>Welcome to,</h1>
              <h2>Willibook Events</h2>
              <p>We are always at the<br />
              forefront of providing you with the best book events within the country</p>
            </span>
         </div>
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
                date="2011 - present"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<MdAccountCircle />}
            >
                <EventDescription />
                {/* <h3 className="vertical-timeline-element-title">Creative Director</h3>
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>
                Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p> */}
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2010 - 2011"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<MdAccountCircle />}
            >
                <EventDescription />
                {/* <h3 className="vertical-timeline-element-title">Art Director</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                </p> */}
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2008 - 2010"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<MdAccountCircle />}
            >
                <EventDescription />
                {/* <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                <p>
                User Experience, Visual Design
                </p> */}
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date="2006 - 2008"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<MdAccountCircle />}
            >
                <EventDescription />
                {/* <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                User Experience, Visual Design
                </p> */}
            </VerticalTimelineElement>
            <VerticalTimelineElement
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
                </p> */}
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="November 2012"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<MdAccountCircle />}
            >
                <EventDescription />
                {/* <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                <p>
                Creative Direction, User Experience, Visual Design
                </p> */}
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2002 - 2006"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<MdAccountCircle />}
            >
                <EventDescription />
                {/* <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                <p>
                Creative Direction, Visual Design
                </p> */}
            </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
        </>
    )
}