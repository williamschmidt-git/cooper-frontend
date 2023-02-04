import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export default function Cards({ text, src }) {
  return (
    <>
      <img src={src} alt="" className="background-img" />
      <span>function</span>
      <p className="text">{text}</p>
      {/* <img src="./svgs/Fill 1.svg" alt="less than symbol" className="logo-slider" /> */}

      <a href="link" className="link-slider">read more</a>
    </>
  );
}

Cards.propTypes = {
  text: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
};
