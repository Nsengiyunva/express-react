import React from 'react';
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

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/contact' component={Contact} />
        <Route path='/bookstores' component={BookStore} />
        <Route path='/events' component={Events} />
        <Route path='/gallery' component={Gallery} />
        <Route path='/organisation' component={Organisation} />
        <Route path='/partners' component={Partners} />
        <Route path='/register' component={Register} />
        <Route path='/cart' component={Cart} />
        <Route path='/book-description' component={BookDescription} />
      </Switch>
    </Router>
  );
}

export default App;
