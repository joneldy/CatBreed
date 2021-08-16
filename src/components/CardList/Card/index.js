import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import BstrapCard from 'react-bootstrap/Card';
import { Col } from 'react-bootstrap';
import './styles.scss';

const Card = ({ image, id }) => {
  return (
    <Col md={3} sm={6} col={12}>
      <BstrapCard>
        <BstrapCard.Img variant="top" src={image} />
        <BstrapCard.Body>
          <Link className="btn-block btn btn-primary" to={`/${id}`}>
            View details
          </Link>
        </BstrapCard.Body>
      </BstrapCard>
    </Col>
  );
};

Card.propTypes = {
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Card;
