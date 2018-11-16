import React from 'react';
import Welcome from './Welcome';
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Patron from './Patron';

/*
  import { Link } from 'react-router-dom';
  <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
*/

function App(){
  var styles = {
  };
  return (
    <div style={styles}>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/patron' component={Patron} />
      </Switch>
    </div>
  );
}

//App.propTypes = {
//};

export default App;
