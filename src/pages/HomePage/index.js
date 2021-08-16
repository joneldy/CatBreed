import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardContainer from '../../containers/CardContainer';
import './styles.scss';

const HomePage = () => (
  <div className="homepage">
    <Container>
      <Row>
        <Col>
          <CardContainer />
        </Col>
      </Row>
    </Container>
  </div>
);

export default HomePage;
