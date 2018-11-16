import React from 'react';
import Welcome from './Welcome';
//import PropTypes from 'prop-types';
import { Switch, Route } from 'react-router-dom';
import Patron from './Patron';
import Keg from '../models/Keg';

/*
  import { Link } from 'react-router-dom';
  <Link to="/">Home</Link> | <Link to="/newticket">Create Ticket</Link>
*/

function App(){
  var styles = {
  };
  var currentKegs = [
    new Keg("Big Wave", "Kona Brewing Company", 9, 5.5),
    new Keg("Fat Tire Belgian White", "New Belgium", 7, 5.2),
    new Keg("Crisp Apple", "Angry Orchard", 6, 5.0),
    new Keg("Irish Creme", "Bailey's", 10, 17),
    new Keg("Belgian White", "Shock Top", 5, 5.2)
  ];
  return (
    <div style={styles}>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/patron' render={(props) => <Patron {...props} currentKegs={currentKegs} />}/>
      </Switch>
    </div>
  );
}

//App.propTypes = {
//};

export default App;
