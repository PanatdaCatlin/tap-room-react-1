import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
import Keg from '../models/Keg';
import KegComponent from './KegComponent';
import HappyHour from './HappyHour';
import $ from '../../node_modules/jquery/dist/jquery';

class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.handleSetEdit = this.handleSetEdit.bind(this);
    this.handleNewKeg = this.handleNewKeg.bind(this);
    this.handleAddNewKeg = this.handleAddNewKeg.bind(this);
    this.listKegs = props.currentKegs.map((keg) => 
      <KegComponent currentKeg={keg} role="employee" happyHour={props.happyHour} render={true} key={keg.id} />
    );
    this.sortKegs = this.sortKegs.bind(this);
    this.state = { orderColumn: 'name', order: 'ascending' };
    this.handleEndHappyHour = this.handleEndHappyHour.bind(this);
    this.handleStartHappyHour = this.handleStartHappyHour.bind(this);
  }
  
  handleSetEdit() {
    $('#editKeg').addClass('fadeOutUp');
    setTimeout(() => {
      $('#editKeg').addClass('hide');
      $('#kegBtns').removeClass('hide');
      $('#editKeg').removeClass('fadeOutUp');
    }, 600);
    this.props.setEdit($('#editKeg .selectedKegId').val(), $('#editKeg .name').val(), $('#editKeg .brand').val(), parseFloat($('#editKeg .price').val()),  parseFloat($('#editKeg .alcoholContent').val()), parseFloat($('#editKeg .onSale option:selected').val()));
  }

  handleNewKeg() {
    $('#newKeg').removeClass('hide');
    $('#kegBtns').addClass('hide');
  }
  
  handleAddNewKeg() {
    let name = $('#newKeg .name').val();
    let brand = $('#newKeg .brand').val();
    let price = parseFloat($('#newKeg .price').val());
    let alcoholContent = parseFloat($('#newKeg .alcoholContent').val());
    this.props.addNewKeg(name, brand, price, alcoholContent);
    $('#newKeg').addClass('fadeOutUp');
    setTimeout(() => {
      $('#newKeg').addClass('hide');
      $('#kegBtns').removeClass('hide');
      $('#newKeg').removeClass('fadeOutUp');
    }, 600);
  }

  sortKegs(order, orderColumn) {
    this.props.sortKegs(order, orderColumn);
    if (this.state.orderColumn === orderColumn) {
      this.setState({ orderColumn: orderColumn, order: (this.state.order === 'ascending') ? 'descending': 'ascending'});
    }
    else {
      this.setState({ orderColumn: orderColumn, order: 'ascending' });
    }
  }

  handleEndHappyHour() {
    this.props.endHappyHour();
  }

  handleStartHappyHour() {
    this.props.startHappyHour();
  }

  render() {
    return (
      <div className="container">
        <style jsx>{`
          .content {
            padding: 0 10px 10px 10px;
            color: rgb(196, 179, 179);
            background-color: rgba(0, 0, 0, .7);
            border: 1px solid rgb(196, 179, 179);
            border-radius: 5px;
            box-shadow: 2px 2px 5px rgb(58, 58, 58);
          }
          
          th {
            font-family: 'Lora', sans-serif;
            font-weight: 700;
          }

          .table thead th {
            border-bottom: none;
            border-top: none;
          }

          .hide {
            display: none;
          }

          .show {
            display: block;
          }
        `}</style>
        <Header happyHour={this.props.happyHour} />
        <HappyHour happyHour={this.props.happyHour} />
        <div className="content">
          <table className="table">
            <thead className="thead">
              <tr className="table-headers">
                <th scope="col" onClick={() => this.sortKegs(this.state.order, 'name')}>Name&nbsp;<span className={(this.state.orderColumn === 'name') ? '': 'hide'}>{(this.state.order === 'ascending') ? '▼': '▲'}</span></th>
                <th scope="col" onClick={() => this.sortKegs(this.state.order, 'brand')}>Brand&nbsp;<span className={(this.state.orderColumn === 'brand') ? '': 'hide'}>{(this.state.order === 'ascending') ? '▼':'▲'}</span></th>
                <th scope="col" onClick={() => this.sortKegs(this.state.order, 'price')}>Price&nbsp;<span className={(this.state.orderColumn === 'price') ? '': 'hide'}>{(this.state.order === 'ascending') ? '▼':'▲'}</span></th>
                <th scope="col" onClick={() => this.sortKegs(this.state.order, 'alcoholContent')}>Alcohol Content&nbsp;<span className={(this.state.orderColumn === 'alcoholContent') ? '': 'hide'}>{(this.state.order === 'ascending') ? '▼':'▲'}</span></th>
                <th scope="col" onClick={() => this.sortKegs(this.state.order, 'pints')}>Pints Remaining&nbsp;<span className={(this.state.orderColumn === 'pints') ? '': 'hide'}>{(this.state.order === 'ascending') ? '▼':'▲'}</span></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.props.currentKegs.map((keg) => 
                <KegComponent currentKeg={keg} role="employee" happyHour={this.props.happyHour} render={true} key={keg.id} />)}
            </tbody>
          </table>
          <div className="animated fadeInDown hide" id="editKeg">
            <input type="text" className="form-control mb-2 name" name="name"/>
            <input type="text" className="form-control mb-2 brand" name="brand" />
            <input type="number" className="form-control mb-2 price" name="price" />
            <input type="number" className="form-control mb-2 alcoholContent" name="alcoholContent" />
            <select name="onSale" className="form-control onSale">
              <option value="1">No discount</option>
              <option value="0.95">5% discount</option>
              <option value="0.9">10% discount</option>
              <option value="0.85">15% discount</option>
            </select>
            <input type="hidden" className="selectedKegId" />
            <button className="btn btn-dark btn-custom mt-2" onClick={this.handleSetEdit}>Done</button>
          </div>
          <div className="animated fadeInDown hide" id="newKeg">
            <input type="text" className="form-control mb-2 name" name="name" placeholder="Name" />
            <input type="text" className="form-control mb-2 brand" name="brand" placeholder="Brand" />
            <input type="number" className="form-control mb-2 price" name="price" placeholder="Price" />
            <input type="number" className="form-control mb-2 alcoholContent" name="alcoholContent" placeholder="Alcohol Content" />
            <button className="btn btn-dark btn-custom mt-2" onClick={this.handleAddNewKeg}>Done</button>
          </div>
          <div id="kegBtns">
            <button className="btn btn-dark btn-custom mr-1" onClick={this.handleNewKeg}>Add New Keg</button>
            {(this.props.happyHour) ? (<button id="endHappyHourBtn" className="btn btn-dark btn-custom" onClick={this.handleEndHappyHour}>End Happy Hour</button>) : (<button id='startHappyHourBtn' className="btn btn-dark btn-custom" onClick={this.handleStartHappyHour}>Start Happy Hour</button>) }
          </div>
        </div>
      </div>
    );
  }
}

Employee.propTypes = {
  currentKegs: PropTypes.arrayOf(Keg),
  addNewKeg: PropTypes.func,
  setEdit: PropTypes.func,
  startHappyHour: PropTypes.func,
  endHappyHour: PropTypes.func,
  happyHour: PropTypes.bool,
  sortKegs: PropTypes.func,
};

export default Employee;
