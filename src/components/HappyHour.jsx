import React from 'react';
import PropTypes from 'prop-types';

function HappyHour(props) {
  let classes;
  if (props.happyHour) {
    classes = 'animated rollIn';
  }
  else {
    classes = 'animated rollIn hide';
  }
  return (
    <div id='happyHour' className={classes}>
      <style jsx>
        {`
          .happyHourTitle {
            font-family: 'Covered By Your Grace', sans-serif;
            color: rgb(196, 179, 179);
            text-shadow: -1px -1px 0 rgb(48, 48, 48),
              1px -1px 0 rgb(48, 48, 48),
              -1px 1px 0 rgb(48, 48, 48),
              1px 1px 0 rgb(48, 48, 48);  
            text-align: center;
            font-size: 60px;
            letter-spacing: 5px;
          }

          .hide {
            display: none;
          }
        `}
      </style>
      <p className="happyHourTitle my-3 animated infinite slow pulse">
        Happy Hour!
      </p>
    </div>
  );
}

HappyHour.propTypes = {
  happyHour: PropTypes.bool,
};

export default HappyHour;