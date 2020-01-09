import React from 'react';
import TopNavBar from '../../components/TopNavbar';
import TeamMember from '../../components/TeamMember';

import './teamStyles.css'

export default () => {
    return (
        <>
        <TopNavBar />
        <div className='team-content-container'>
            <div className='wrapper'>
                <div>
                    <h1 className='title'>Meet our Team</h1>
                    <p>Our team is your team. When
                        your mission is to be better, faster
                        and smarter,you need thenest people driving
                        yout vision forward. You need people who can
                        create focussed marketing strategies that 
                        align with business golas, who can infuse their
                        creativity into groundbreaking campaigns and who
                        can analyze data to optimise every tactic 
                        along the way. Yon need walker sands. get to know 
                        your team below.
                    </p>
                </div>
                <div className='owners-container'>
                    <h2 className='title'>Owners</h2>
                    <div className='owners-row-1'>
                        <TeamMember />
                        <TeamMember />
                        <TeamMember />
                        <TeamMember />
                    </div>
                    <h2 className='title'>Directors</h2>
                    <div className='owners-row-1'>
                        <TeamMember />
                        <TeamMember />
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}