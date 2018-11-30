import React from 'react';
import Keg from '../models/Keg';
import PropTypes from 'prop-types';
import 'bootstrap/dist/js/bootstrap.bundle';
import $ from 'jquery';

class KegComponent extends React.Component {
  constructor(props) {
    super(props);
    this.currentKeg = props.currentKeg;
    this.props = props;
    this.state = {currentKeg: this.props.currentKeg, render: this.props.render};
  }

  buy(amount) {
    if (amount === 'pint') {
      if (this.currentKeg.pints >= 1)
        this.currentKeg.pints -= 1;
    }
    else if (amount === 'growler') {
      if (this.currentKeg.pints >= 2)
        this.currentKeg.pints -= 2;
    }
    else {
      if (this.currentKeg.pints >= 4) 
        this.currentKeg.pints -= 4;
    }
    this.setState({currentKeg: this.currentKeg, render: this.state.render});
  }

  edit() {
    $('#editKeg').removeClass('hide');
    $('#kegBtns').addClass('hide');
    $('#editKeg .name').val(this.state.currentKeg.name);
    $('#editKeg .brand').val(this.state.currentKeg.brand);
    $('#editKeg .price').val(this.state.currentKeg.price);
    $('#editKeg .alcoholContent').val(this.state.currentKeg.alcoholContent);
    if (this.state.currentKeg.discount === 1) {
      $('#editKeg option:nth-child(1)').prop('selected', true);
    }
    else if (this.state.currentKeg.discount === 0.95) {
      $('#editKeg option:nth-child(2)').prop('selected', true);
    }
    else if (this.state.currentKeg.discount === 0.9) {
      $('#editKeg option:nth-child(3)').prop('selected', true);
    }
    else if (this.state.currentKeg.discount === 0.85) {
      $('#editKeg option:nth-child(4)').prop('selected', true);
    }
    $('#editKeg .selectedKegId').val(`${this.state.currentKeg.id}`);
  }

  sell(amount) {
    if (amount === 'pint') {
      if (this.currentKeg.pints >= 1)
        this.currentKeg.pints -= 1;
    }
    else if (amount === 'growler') {
      if (this.currentKeg.pints >= 2)
        this.currentKeg.pints -= 2;
    }
    else {
      if (this.currentKeg.pints >= 4) 
        this.currentKeg.pints -= 4;
    }
    this.setState({currentKeg: this.currentKeg, render: this.state.render});
  }

  delete() {
    this.setState({currentKeg: this.currentKeg, render: false});
  }

  render() {
    let happyHourRate = (this.props.happyHour) ? 0.5:1;
    let priceText;
    if (Math.round(this.state.currentKeg.price*this.state.currentKeg.discount*happyHourRate*100)/100 <= 6) {
      priceText = (<span className="badge badge-info">$</span>);
    }
    else if (Math.round(this.state.currentKeg.price*this.state.currentKeg.discount*happyHourRate*100)/100 <= 9)
      priceText = (<span className="badge badge-warning">$$</span>);
    else {
      priceText = (<span className="badge badge-danger">$$$</span>);
    }
    let alcoholContentClass;
    if (this.state.currentKeg.alcoholContent > 10) {
      alcoholContentClass = 'text-danger';
    }
    else if (this.state.currentKeg.alcoholContent >  5) {
      alcoholContentClass = 'text-default';
    }
    else {
      alcoholContentClass = 'text-secondary';
    }
    let discountClass = '';
    if (this.state.currentKeg.discount !== 1) {
      discountClass = 'background-sale';
    }
    if (this.props.role === 'employee' && this.state.render === true) {
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
          <td className={discountClass}>{this.state.currentKeg.name}</td>
          <td className={discountClass}>{this.state.currentKeg.brand}</td>
          <td className={discountClass}>{priceText}&nbsp;{Math.round(this.state.currentKeg.price*this.state.currentKeg.discount*happyHourRate*100)/100}</td> 
          <td className={discountClass}><span className={alcoholContentClass}>{this.state.currentKeg.alcoholContent}%</span></td> 
          <td className={discountClass}>{this.state.currentKeg.pints}</td>
          <td className={discountClass}><button className="btn btn-dark btn-custom" onClick={this.edit.bind(this)}>Edit</button></td>
          <td className={discountClass}>
            <div className="dropdown">
              <button className="btn btn-dark btn-custom dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sell</button>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a className="dropdown-item" onClick={this.sell.bind(this, 'pint')}>Pint</a>
                <a className="dropdown-item" onClick={this.sell.bind(this, 'growler')}>Growler</a>
                <a className="dropdown-item" onClick={this.sell.bind(this, 'largeGrowler')}>Large Growler</a>
              </div>
            </div>
          </td>
          <td className={discountClass}><button className="btn btn-dark btn-custom" onClick={this.delete.bind(this)}>Delete</button></td>
        </tr>
      );
    }
    else if (this.props.role === 'patron' && this.state.render === true) {
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
          <td><span>{this.state.currentKeg.priceText}</span>&nbsp;{Math.round(this.state.currentKeg.price*this.state.currentKeg.discount*happyHourRate*100)/100}</td> 
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
    else {
      return (<tr></tr>);
    }
  }
}

KegComponent.propTypes = {
  currentKeg: PropTypes.instanceOf(Keg),
  role: PropTypes.string,
  buy: PropTypes.func,
  render: PropTypes.bool,
  happyHour: PropTypes.bool,
};

export default KegComponent;