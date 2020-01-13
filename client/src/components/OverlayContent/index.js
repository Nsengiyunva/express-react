import React from 'react';
import './OverlayContent.css'

export default ({ store, event }) => {
    return (
        <>
            <div className='body-content'>xx</div>
                <div className='body-overlay-content'>
                <div className="overlay-content">
                        {store && (
                        <>
                            <div>
                                <div className='left-text'>
                                    <h1>Willibooks Store</h1>
                                    <strong>is available</strong>
                                    <strong>in these countries</strong>
                                </div>
                                <div>
                                    <ul className='countries'>
                                        <li><h3>Uganda</h3></li>
                                        <li><h3>Kenya</h3></li>
                                        <li><h3>Ghana</h3></li>
                                        <li><h3>Botswana</h3></li>
                                        <li><h3>Zambia</h3></li>
                                        <li><h3>Malawi</h3></li>
                                        <li><h3>Nigeria</h3></li>
                                        <li><h3>Sierra Leone</h3></li>
                                    </ul>
                                </div>
                            </div>
                            <div className='right-content'> africa picture </div>
                        </>
                        )}
                        {event && (
                            <>
                                <div className='event-container'>
                                    <div className='left-empty'/>
                                    <div className='event-description'>
                                        <h1>Welcome to Williobooks events</h1>
                                        <p>
                                            We are at the fore front of providing
                                            you the best book events in the country
                                        </p>
                                    </div>
                                </div>
                            </>
                        )}
                </div>
                </div>
            </>
    )
}