import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Service = (props) => {
  const info = props.info;

  return (
    <Container>
      <h5>{info.title}</h5>
      <p>{info.description}</p>
    </Container>
  );
};

export default Service;
