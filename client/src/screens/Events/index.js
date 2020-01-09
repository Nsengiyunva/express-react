import React from 'react';
import TopNavBar from '../../components/TopNavbar'
import OverlayContent from '../../components/OverlayContent';
import EventTopContent from '../../components/EventTopContent';
import EventDescription from '../../components/EventDescription';

import './EventStyles.css'

export default () => {
    return (
        <>
         <TopNavBar />
         <OverlayContent event/>
         <div className='events-listing-container'>
             <EventTopContent color='green'/>
             <EventTopContent color='blue'/>
             <EventTopContent color='red'/>
             <EventTopContent color='orange'/>
         </div>
         <div className='events-timeline-container'>
           <EventDescription />
         </div>
        </>
    )
}