import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
import Keg from '../models/Keg';
import KegComponent from './Keg';

function Patron(props){
  var styles = {
  };
  const listKegs = props.currentKegs.map((keg) =>
    <KegComponent currentKeg={keg} />
  );
  return (
    <div style={styles} className="container">
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
            {listKegs}
          </tbody>
        </table>
      </div>
    </div>
  );
}

Patron.propTypes = {
  currentKegs: PropTypes.arrayOf(Keg),
};

export default Patron;
