import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './screens/Home';
import BookStore from './screens/Bookstore';
import Contact from './screens/Contact';
import Events from './screens/Events';
import Partners from './screens/Partners';
import Organisation from './screens/Team';
import Gallery from './screens/Gallery';
import Register from './screens/Register';
import Cart from './screens/Cart';
import BookDescription from './screens/BookDescription';
import Login from './screens/Login';
import AboutUs from './screens/AboutUs';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/contact' component={Contact} />
          <Route path='/aboutUs' component={AboutUs} />
          <Route path='/bookstore' component={BookStore} />
          <Route path='/events' component={Events} />
          <Route path='/gallery' component={Gallery} />
          <Route path='/organisation' component={Organisation} />
          <Route path='/partners' component={Partners} />
          <Route path='/register' component={Register} />
          <Route path='/cart' component={Cart} />
          <Route path='/book-description/:bookId' component={BookDescription} />
          <Route path='/login' component={Login} />
        </Switch>
      </Router>
    )
  }
}
// import React from 'react';
// import styled from 'styled-components';
// import { device } from './_utils/devices'

// const Page = styled.div`
//   margin: auto;
//   font-family: 'sans-serif',
//   text-align: center;

//   @media ${device.laptop} {
//     max-width: 800px;
//     border: 1px solid red;
//   }

//   @media ${device.desktop} {
//     max-width: 1400px;
//     border: 1px solid teal;
//   }
// `;

// const Card = styled.div`
//   display: flex;
//   flex-direction: column;
//   border: 1px solid gray;
//   box-shadow: 5px 5px #ccc;
//   padding: 10px;
//   margin: 10px;

//   @media ${device.laptop}{
//     flex-direction: row;
//   }

// `;

// const App =() => {
//   return(
//     <Page>
//       <Card withPictureOf='cats' />
//       <Card withPictureOf='coffee' />
//       <Card withPictureOf='oranges' />
//     </Page>
//   )
// }


//export default App;