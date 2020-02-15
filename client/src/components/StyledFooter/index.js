import React, { Component } from 'react';
import styled from 'styled-components';
import { MdShoppingCart } from 'react-icons/md';
import logo from '../../images/williLogo.jpg'

const Footer = styled.div`
   display: flex;
   width: 100%;
   background-color: black;
   flex-direction: row;
   font-family: 'Montserrat', sans-serif;

   @media(max-width: 768px){
    flex-wrap: wrap;
   }
`;

const ItemContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 20rem;
    height: auto;
    margin: 0 2rem;
    color: white;
    padding: 4rem 0;

    @media(max-width: 768px){
        margin-top: 1.5rem;
        width: 25rem;
        heighy: 30rem;
        height: auto;
    }
`;

const ListItem = (props) => (
    <div style={{ display:'flex',flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center'}}>
        <MdShoppingCart size={20} color='white'/>
        <p style={{ marginLeft: '.75rem'}}>{props.value}</p>
    </div>
)
class StyledFooter extends Component {
    render(){
        return(
            <Footer>
                <ItemContainer>
                    <div>
                        <img src={logo} style={{ width: '10rem'}}/>
                        <p>Course View Tower</p>
                        <p>Plot 21, Yusuf Lule Road</p>
                        <p>Kampala, Uganda</p>
                        <p>HQ</p>
                        <>
                            <ListItem value={`+256200995991/2/3/4/5`} />
                            <ListItem value={`+256780116681`}/>
                            <ListItem value={`parentalafrica@mail.com`} />
                            <ListItem value={`test`} />
                        </>   
                    </div>
                </ItemContainer>
                <ItemContainer>
                    <div style={{ display: 'flex',flexDirection: 'column'}}>
                        <h3>Partners</h3>
                        <div>
                            <ul style={{}}>
                                <li style={{ paddingBottom: '.75rem'}}>Willibooks Limited</li>
                                <li style={{ paddingBottom: '.75rem'}}>Willibooks Limited</li>
                                <li style={{ paddingBottom: '.75rem'}}>Willibooks Limited</li>
                                <li style={{ paddingBottom: '.75rem'}}>Willibooks Limited</li>
                            </ul>
                        </div>
                    </div>
                </ItemContainer>
                <ItemContainer>
                <div style={{ display: 'flex',flexDirection: 'column'}}>
                        <h3>Services</h3>
                        <div>
                            <ul style={{}}>
                                <li style={{ paddingBottom: '.75rem'}}>Willibooks Limited</li>
                                <li style={{ paddingBottom: '.75rem'}}>Willibooks Limited</li>
                                <li style={{ paddingBottom: '.75rem'}}>Willibooks Limited</li>
                                <li style={{ paddingBottom: '.75rem'}}>Willibooks Limited</li>
                            </ul>
                        </div>
                    </div>
                </ItemContainer>
                <ItemContainer>
                <div style={{ display: 'flex',flexDirection: 'column'}}>
                        <h3>Connect With Us</h3>
                        <div>
                            <ListItem value={`+256200995991/2/3/4/5`} />
                            <ListItem value={`+256780116681`}/>
                            <ListItem value={`parentalafrica@mail.com`} />
                            <ListItem value={`test`} />
                        </div>
                    </div>
                </ItemContainer>
            </Footer>
        )
    }
}

export default StyledFooter;
