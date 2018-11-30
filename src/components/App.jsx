import React from 'react';
import Welcome from './Welcome';
import { Switch, Route } from 'react-router-dom';
import Patron from './Patron';
import Keg from '../models/Keg';
import Employee from './Employee';

class App extends React.Component {
  constructor() {
    super();
    this.state = { currentKegs: [
      new Keg('Big Wave', 'Kona Brewing Company', 9, 5.5),
      new Keg('Fat Tire Belgian White', 'New Belgium', 7, 5.2),
      new Keg('Crisp Apple', 'Angry Orchard', 6, 5.0),
      new Keg('Irish Creme', 'Bailey\'s', 10, 17),
      new Keg('Belgian White', 'Shock Top', 5, 5.2)
    ]};
    this.addNewKeg = this.addNewKeg.bind(this);
  }

  addNewKeg(name, brand, price, alcoholContent) {
    let currentKegsCopy = this.state.currentKegs.slice();
    let newKeg = new Keg(name, brand, price, alcoholContent);
    currentKegsCopy.push(newKeg);
    this.setState({currentKegs: currentKegsCopy});
    
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/patron' render={(props) => <Patron {...props} currentKegs={this.state.currentKegs} />}/>
          <Route exact path='/employee' render={(props) => <Employee {...props} currentKegs={this.state.currentKegs} addNewKeg={this.addNewKeg}/>}/>
        </Switch>
      </div>
    );
  }
}
export default App;
