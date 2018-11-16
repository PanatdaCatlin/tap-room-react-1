import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
import Keg from '../models/Keg';
import KegComponent from './Keg';

class Employee extends React.Component {
  constructor(props) {
    super(props);
    this.listKegs = props.currentKegs.map((keg, key) => 
      <KegComponent currentKeg={keg} role="employee" sell={this.sell} render={true} key={key}/>
    );
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
        `}</style>
        <Header />
        <div className="content">
          <table className="table">
            <thead className="thead">
              <tr className="table-headers">
                <th scope="col">Name <span>▼</span></th>
                <th scope="col">Brand <span>▼</span></th>
                <th scope="col">Price <span>▼</span></th>
                <th scope="col">Alcohol Content <span>▼</span></th>
                <th scope="col">Pints Remaining <span>▼</span></th>
                <th scope="col"></th>
                <th scope="col"></th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.listKegs}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

Employee.propTypes = {
  currentKegs: PropTypes.arrayOf(Keg),
};

export default Employee;
