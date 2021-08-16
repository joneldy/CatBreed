import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import Card from './Card';

const CardList = ({ data }) => {
  const hasData = data && data.length > 0;
  return (
    <Row>
      {hasData &&
        data.map(({ id, url }) => {
          return <Card key={id} image={url} id={id} />;
        })}
    </Row>
  );
};

CardList.defaultProps = {
  data: [],
};

CardList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      breeds: PropTypes.array,
      url: PropTypes.string,
      width: PropTypes.number,
      height: PropTypes.number,
    })
  ),
};

export default CardList;
