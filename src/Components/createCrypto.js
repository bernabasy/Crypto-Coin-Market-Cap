import React from 'react';
import PropTypes from 'prop-types';

const Crypto = ({ crypto }) => {
  const {
    Name, img,
  } = crypto;

  return (
    <div className="rounded-4 w-100 h-100 border border-dark d-flex justify-content-center">
      <div className="w-100">
        <p className=" p-2 font text-light">
          {' '}
          <span>Name:</span>
          {Name}
        </p>
        <div className="d-flex m-3 justify-content-center">
          <img className="images w-75" src={`https://www.cryptocompare.com${img} `} alt="symbol" />
        </div>
        <p />
      </div>
    </div>
  );
};

Crypto.propTypes = {
  crypto: PropTypes.shape({
    Name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
};
export default Crypto;
