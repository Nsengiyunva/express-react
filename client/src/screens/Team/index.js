import React from 'react';
import TopNavBar from '../../components/TopNavbar';
import Footer from '../../components/Footer';
import TeamMember from '../../components/TeamMember';

import './TeamStyles.scss';
import { team, departments, committees } from '../../_fixtures'

const DepartmentDetail = ({ title, subtitle, email, committee, issues }) => {
    return (
        <div className='department-description-container'>
            <strong>{title}</strong>
            <span>{subtitle}</span>
            {!committee && <span>Contact us <a href="javascript:void(0)">{email}</a></span>}
            {committee && <span>{issues}</span>}
        </div>
    )
}

export default () => {
    return (
        <>
        <TopNavBar />
        <div className='team-content-container'>
            <div className='wrapper'>
                <div>
                    <h1 className='title'>Meet our Team</h1>
                    <p className='subtitle'>Our team is your team. When
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
                    <div className='owners-row'>
                        {team.map( item => {
                            return (
                                item.owner && <TeamMember key={item.id} name={item.name} detail={item.detail} />
                            )
                        })}
                    </div>
                    <h2 className='title'>Directors</h2>
                    <div className='owners-row directors'>
                    {team.map( item => {
                            return (
                                item.director && <TeamMember key={item.id} name={item.name} detail={item.detail} />
                            )
                        })}
                    </div>
                    <h2 className='title'>Departments</h2>
                    <div className='owners-row departments'>
                        {departments.map( item => {
                            return (
                                <DepartmentDetail key={item.name} title={item.name} subtitle={item.description} email={item.emailAddress}/>
                            )
                        })}
                        
                    </div>
                    <h2 className='title'>Internal Committee</h2>
                    <div className='owners-row departments'>
                        {committees.map( item => {
                            return (
                                <DepartmentDetail committee key={item.name} title={item.name} subtitle={item.description} issues={item.issues}/>
                            )
                        })}
                        
                    </div>
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}