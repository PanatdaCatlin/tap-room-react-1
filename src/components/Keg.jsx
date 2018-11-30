import React from 'react';
import Keg from '../models/Keg.js';
import PropTypes from 'prop-types';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';
import $ from '../../node_modules/jquery/dist/jquery';

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
      $('#editKeg .onSale option:nth-child(1)').attr('selected', 'selected');
    }
    else if (this.state.currentKeg.discount === 0.95) {
      $('#editKeg .onSale option:nth-child(2)').attr('selected', 'selected');
    }
    else if (this.state.currentKeg.discount === 0.9) {
      $('#editKeg .onSale option:nth-child(3)').attr('selected', 'selected');
    }
    else if (this.state.currentKeg.discount === 0.85) {
      $('#editKeg .onSale option:nth-child(4)').attr('selected', 'selected');
    }
    $('.selectedKegBrand').val(`${this.state.currentKeg.brand}`);
    $('.selectedKegName').val(`${this.state.currentKeg.name}`);
  }

  setEdit() {
    this.currentKeg.name = $('#editKeg .name').val();
    this.currentKeg.brand = $('#editKeg .brand').val();
    this.currentKeg.price = parseInt($('#editKeg .price').val());
    this.currentKeg.alcoholContent = parseFloat($('#editKeg .alcoholContent').val());
    this.currentKeg.discount = parseFloat($('#editKeg .onSale option:selected').val());
    this.setState({currentKeg: this.currentKeg, render: this.state.render});
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
          <td>{this.state.currentKeg.name}</td>
          <td>{this.state.currentKeg.brand}</td>
          <td><span>{this.state.currentKeg.priceText}</span>&nbsp;{Math.round(this.state.currentKeg.price*this.state.currentKeg.discount*100)/100}</td> 
          <td><span>{this.state.currentKeg.alcoholContent}%</span></td> 
          <td>{this.state.currentKeg.pints}</td>
          <td><button className="btn btn-dark btn-custom" onClick={this.edit.bind(this)}>Edit</button></td>
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
          <td><button className="btn btn-dark btn-custom" onClick={this.delete.bind(this)}>Delete</button></td>
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
};

export default KegComponent;