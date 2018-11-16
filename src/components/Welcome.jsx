import React from 'react';
import { Link } from 'react-router-dom';
//import PropTypes from 'prop-types';

function Welcome(){
  var styles = {
    height: '100vh',
    width: '100vw',
  };
  return (
    <div style={styles} className="d-flex flex-row justify-content-center align-items-center">
      <style jsx>{`
        select {
          width: 200px;
        }
      `}</style>
      <Link to="/employee" className="btn btn-dark btn-custom">Employee</Link> | <Link to="/patron" className="btn btn-dark btn-custom">Patron</Link>
    </div>
  );
}

//App.propTypes = {
//};

export default Welcome;
