import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
import Keg from '../models/Keg';
import KegComponent from './KegComponent';
import HappyHour from './HappyHour';

class Patron extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.listKegs = props.currentKegs.map((keg) =>
      <KegComponent currentKeg={keg} role="patron" render={true} happyHour={props.happyHour} key={keg.id} />);
    this.sortKegs = this.sortKegs.bind(this);
    this.state = { orderColumn: 'name', order: 'ascending' };
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
                <KegComponent currentKeg={keg} role="patron" happyHour={this.props.happyHour} render={true} key={keg.id} />)}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

Patron.propTypes = {
  currentKegs: PropTypes.arrayOf(Keg), 
  happyHour: PropTypes.bool,
  sortKegs: PropTypes.func,
};

export default Patron;
