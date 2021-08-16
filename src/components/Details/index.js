import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const Details = ({ image, breed, origin, temperament, description }) => {
  const history = useHistory();
  const gotoHome = () => {
    history.push({
      pathname: '/',
      search: `?${new URLSearchParams({ breed }).toString()}`,
    });
  };
  return (
    <Card>
      <Card.Header>
        <Button onClick={gotoHome} variant="primary">
          Back
        </Button>
      </Card.Header>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <h4>Aegean</h4>
        <h5>Origin: {origin}</h5>
        <h6>{temperament}</h6>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

Details.propTypes = {
  image: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  temperament: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
export default Details;
