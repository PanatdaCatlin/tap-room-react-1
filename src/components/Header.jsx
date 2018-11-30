import React from 'react';
import $ from 'jquery';
import anime from 'animejs';
import PropTypes from 'prop-types';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.title='Guilty Pleasure';
  }

  componentDidMount() {
    $('.ml12').each(function(){
      $(this).html($(this).text().replace(/([^\x00-\x80]|\w)/g, '<span class=\'letter\'>$&</span>'));
    });
    
    anime.timeline({loop: false})
      .add({
        targets: '.ml12 .letter',
        translateX: [40,0],
        translateZ: 0,
        opacity: [0,1],
        easing: 'easeOutExpo',
        duration: 1200,
        delay: function(el, i) {
          return 500 + 30 * i;
        }
      });
  }

  render() {
    let classes = (this.props.happyHour) ? 'jumbotron': 'jumbotron happyHourMargin';
    return (
      <div>
        <style jsx>{`
          .jumbotron {
            margin-top: 20px;
            margin-bottom: 0px;
            text-transform: uppercase;
            font-size: 50px;
            text-shadow: 2px 2px 2px black;
            color: rgb(196, 179, 179);
            font-family: 'Syncopate', sans-serif;
            text-align: center;
            background-color: rgba(0, 0, 0, .5);
            border: 1px solid rgb(196, 179, 179);
            border-radius: 5px;
            box-shadow: 2px 2px 5px rgb(58, 58, 58);
          }

          .happyHourMargin {
            margin-bottom: 122px;
          }
        `}</style>
        <div id="header" className={classes}>
          <span className="ml12">{this.title}</span>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  happyHour: PropTypes.bool,
};


export default Header;
