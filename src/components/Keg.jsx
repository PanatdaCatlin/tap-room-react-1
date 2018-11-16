import React from 'react';
import Keg from '../models/Keg.js';
import PropTypes from 'prop-types';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';

class KegComponent extends React.Component {
  constructor(props) {
    super(props);
    this.currentKeg = props.currentKeg;
    this.props = props;
    this.state = { currentKeg: props.currentKeg };
  }

  buy(amount) {
    this.props.buy(amount);
    this.setState( {currentKeg: this.currentKeg} );
  }

  sell(amount) {
    this.props.sell(amount);
    this.setState( {currentKeg: this.currentKeg });
  }

  render() {
    if (this.props.role === 'employee') {
      return (
        <tr>
          <style jsx>{`
          .dropdown-menu {
            background-color:rgba(119, 70, 14, 0.95);
            color: rgb(196, 179, 179);
            border-radius: 1px;
            border: 1px solid rgb(196, 179, 179);
          }
          
          .dropdown-item:hover {
              background-color: rgba(0, 0, 0, .8);
              cursor: pointer;
          }
          `}</style>
          <td>{this.state.currentKeg.name}</td>
          <td>{this.state.currentKeg.brand}</td>
          <td><span>{this.state.currentKeg.priceText}</span>&nbsp;{this.state.currentKeg.price*this.state.currentKeg.discount}</td> 
          <td><span>{this.state.currentKeg.alcoholContent}%</span></td> 
          <td>{this.state.currentKeg.pints}</td>
          <td><button className="btn btn-dark btn-custom">Edit</button></td>
          <td>
            <div className="dropdown">
              <button className="btn btn-dark btn-custom dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sell</button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" onClick={this.sell.bind(this, 'pint')}>Pint</a>
                <a className="dropdown-item" onClick={this.sell.bind(this, 'growler')}>Growler</a>
                <a className="dropdown-item" onClick={this.sell.bind(this, 'largeGrowler')}>Large Growler</a>
              </div>
            </div>
          </td>
          <td><button className="btn btn-dark btn-custom">Delete</button></td>
        </tr>
      );
    }
    else {
      return (
        <tr>
          <style jsx>{`
          .dropdown-menu {
            background-color:rgba(119, 70, 14, 0.95);
            color: rgb(196, 179, 179);
            border-radius: 1px;
            border: 1px solid rgb(196, 179, 179);
          
          }
          
          .dropdown-item:hover {
              background-color: rgba(0, 0, 0, .8);
              cursor: pointer;
          }
          `}</style>
          <td>{this.state.currentKeg.name}</td>
          <td>{this.state.currentKeg.brand}</td>
          <td><span>{this.state.currentKeg.priceText}</span>&nbsp;{this.state.currentKeg.price*this.state.currentKeg.discount}</td> 
          <td><span>{this.state.currentKeg.alcoholContent}%</span></td>
          <td>{this.state.currentKeg.pints}</td>
          <td></td>
          <td>
            <div className="dropdown">
              <button className="btn btn-dark btn-custom dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Buy</button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" onClick={this.buy.bind(this, 'pint')}>Pint</a>
                <a className="dropdown-item" onClick={this.buy.bind(this, 'growler')}>Growler</a>
                <a className="dropdown-item" onClick={this.buy.bind(this, 'largeGrowler')}>Large Growler</a>
              </div>
            </div>
          </td>
          <td></td>
        </tr>
      );
    }
  }
}

KegComponent.propTypes = {
  currentKeg: PropTypes.instanceOf(Keg),
  role: PropTypes.string,
  buy: PropTypes.func,
  sell: PropTypes.func,
};

export default KegComponent;