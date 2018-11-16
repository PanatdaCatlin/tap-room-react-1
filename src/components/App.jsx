import React from 'react';
import Welcome from './Welcome';
import { Switch, Route } from 'react-router-dom';
import Patron from './Patron';
import Keg from '../models/Keg';
import Employee from './Employee';

function App(){
  var styles = {
  };
  var currentKegs = [
    new Keg('Big Wave', 'Kona Brewing Company', 9, 5.5),
    new Keg('Fat Tire Belgian White', 'New Belgium', 7, 5.2),
    new Keg('Crisp Apple', 'Angry Orchard', 6, 5.0),
    new Keg('Irish Creme', 'Bailey\'s', 10, 17),
    new Keg('Belgian White', 'Shock Top', 5, 5.2)
  ];
  return (
    <div style={styles}>
      <Switch>
        <Route exact path='/' component={Welcome} />
        <Route exact path='/patron' render={(props) => <Patron {...props} currentKegs={currentKegs} />}/>
        <Route exact path='/employee' render={(props) => <Employee {...props} currentKegs={currentKegs} />}/>
      </Switch>
    </div>
  );
}
export default App;
