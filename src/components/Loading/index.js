import React from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'react-bootstrap';

const Loading = ({ className }) => (
  <div className={`app_loader ${className}`}>
    <Spinner animation="border" />
  </div>
);

Loading.defaultProps = {
  className: '',
};

Loading.propTypes = {
  className: PropTypes.string,
};

export default Loading;
