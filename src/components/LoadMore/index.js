import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';

const LoadMore = ({ totalPage, page, onLoad }) => {
  return totalPage && page < totalPage - 1 ? (
    <Button variant="success" onClick={onLoad} type="button">
      Load more
    </Button>
  ) : null;
};

LoadMore.propTypes = {
  totalPage: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  onLoad: PropTypes.func.isRequired,
};
export default LoadMore;
