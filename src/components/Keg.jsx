import React from 'react';
import Keg from '../models/Keg.js';
import PropTypes from 'prop-types';

function KegComponent(props){
  return (
    <tr>
      <style jsx>{`
      `}</style>
      <td>{props.currentKeg.name}</td>
      <td>{props.currentKeg.brand}</td>
      <td><span>{props.currentKeg.priceText}</span>&nbsp;{props.currentKeg.price*props.currentKeg.discount}</td> 
      <td><span>{props.currentKeg.alcoholContent}%</span></td> 
      <td>{props.currentKeg.pints}</td>
      <td><button class="btn btn-secondary">Edit</button></td>
      <td>
        <div class="dropdown">
          <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Sell</button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item">Pint</a>
            <a class="dropdown-item">Growler</a>
            <a class="dropdown-item">Large Growler</a>
          </div>
        </div>
      </td>
      <td><button class="btn btn-danger">Delete</button></td>
    </tr>
  );
}

KegComponent.propTypes = {
  currentKeg: PropTypes.instanceOf(Keg),
};

export default KegComponent;