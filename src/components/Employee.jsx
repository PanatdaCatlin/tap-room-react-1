import React from 'react';
import Header from './Header';
import PropTypes from 'prop-types';
import Keg from '../models/Keg';
import KegComponent from './Keg';
import HappyHour from './HappyHour';
import $ from '../../node_modules/jquery/dist/jquery';

function Employee(props) {
  let kegsRefs = [];

  function setEdit() {
    $('#editKeg').addClass('fadeOutUp');
    setTimeout(() => {
      $('#editKeg').addClass('hide');
      $('#kegBtns').removeClass('hide');
      $('#editKeg').removeClass('fadeOutUp');
    }, 600);
    props.setEdit($('#editKeg .selectedKegId').val(), $('#editKeg .name').val(), $('#editKeg .brand').val(), parseFloat($('#editKeg .price').val()),  parseFloat($('#editKeg .alcoholContent').val()), parseFloat($('#editKeg .onSale option:selected').val()));
  }

  function newKeg() {
    $('#newKeg').removeClass('hide');
    $('#kegBtns').addClass('hide');
  }

  let listKegs = props.currentKegs.map((keg) => 
    <KegComponent currentKeg={keg} role="employee" happyHour={props.happyHour} render={true} key={keg.id} ref={(kegComponent) => kegsRefs.push(kegComponent)} />
  );

  function addNewKeg() {
    let name = $('#newKeg .name').val();
    let brand = $('#newKeg .brand').val();
    let price = parseFloat($('#newKeg .price').val());
    let alcoholContent = parseFloat($('#newKeg .alcoholContent').val());
    props.addNewKeg(name, brand, price, alcoholContent);
    $('#newKeg').addClass('fadeOutUp');
    setTimeout(() => {
      $('#newKeg').addClass('hide');
      $('#kegBtns').removeClass('hide');
      $('#newKeg').removeClass('fadeOutUp');
    }, 600);
  }

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
      <Header happyHour={props.happyHour} />
      <HappyHour happyHour={props.happyHour} />
      <div className="content">
        <table className="table">
          <thead className="thead">
            <tr className="table-headers">
              <th scope="col">Name</th>
              <th scope="col">Brand</th>
              <th scope="col">Price</th>
              <th scope="col">Alcohol Content</th>
              <th scope="col">Pints Remaining</th>
              <th scope="col"></th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {listKegs}
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
          <button className="btn btn-dark btn-custom mt-2" onClick={setEdit}>Done</button>
        </div>
        <div className="animated fadeInDown hide" id="newKeg">
          <input type="text" className="form-control mb-2 name" name="name" placeholder="Name" />
          <input type="text" className="form-control mb-2 brand" name="brand" placeholder="Brand" />
          <input type="number" className="form-control mb-2 price" name="price" placeholder="Price" />
          <input type="number" className="form-control mb-2 alcoholContent" name="alcoholContent" placeholder="Alcohol Content" />
          <button className="btn btn-dark btn-custom mt-2" onClick={addNewKeg}>Done</button>
        </div>
        <div id="kegBtns">
          <button className="btn btn-dark btn-custom mr-1" onClick={newKeg}>Add New Keg</button>
          <button id='startHappyHourBtn' className="btn btn-dark btn-custom" onClick={props.startHappyHour}>Start Happy Hour</button>
          <button id="endHappyHourBtn" className="btn btn-dark btn-custom hide" onClick={props.endHappyHour}>End Happy Hour</button>
        </div>
      </div>
    </div>
  );
}

Employee.propTypes = {
  currentKegs: PropTypes.arrayOf(Keg),
  addNewKeg: PropTypes.func,
  setEdit: PropTypes.func,
  startHappyHour: PropTypes.func,
  endHappyHour: PropTypes.func,
  happyHour: PropTypes.bool,
};

export default Employee;
