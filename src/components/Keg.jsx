import React from 'react';
import Keg from '../models/Keg.js';
import PropTypes from 'prop-types';
import '../../node_modules/bootstrap/dist/js/bootstrap.bundle';

function KegComponent(props){
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
      <td>{props.currentKeg.name}</td>
      <td>{props.currentKeg.brand}</td>
      <td><span>{props.currentKeg.priceText}</span>&nbsp;{props.currentKeg.price*props.currentKeg.discount}</td> 
      <td><span>{props.currentKeg.alcoholContent}%</span></td> 
      <td>{props.currentKeg.pints}</td>
      <td><button className="btn btn-dark btn-custom">Edit</button></td>
      <td>
        <div className="dropdown">
          <button className="btn btn-dark btn-custom dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sell</button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item">Pint</a>
            <a className="dropdown-item">Growler</a>
            <a className="dropdown-item">Large Growler</a>
          </div>
        </div>
      </td>
      <td><button className="btn btn-dark btn-custom">Delete</button></td>
    </tr>
  );
}

KegComponent.propTypes = {
  currentKeg: PropTypes.instanceOf(Keg),
};

export default KegComponent;