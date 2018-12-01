import React from 'react';
import { Link } from 'react-router-dom';

function Welcome(){
  var styles = {
    marginTop: 'calc(450px - 12px)',
  };
  return (
    <div style={styles} className="d-flex flex-row justify-content-center">
      <Link to="/employee" className="btn btn-dark btn-custom">Employee</Link> | <Link to="/patron" className="btn btn-dark btn-custom">Patron</Link>
    </div>
  );
}

export default Welcome;
