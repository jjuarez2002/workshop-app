import React from "react";

import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import styles from "../styles/Service.module.css";

const url = "http://localhost:8000";

const Service = (props) => {
  const data = props.data;
  const serviceName = data.title;

  const [serviceTime, setServiceTime] = React.useState("");
  const [comments, setComments] = React.useState("");

  const handleSubmit = () => {
    // submit the form information to the backend
    // with serviceName, serviceTime, comments
    // const dataOut = {
    //   serviceName: serviceName,
    //   serviceTime: serviceTime,
    //   comments: comments,
    // };
    const dataOut = { serviceName, serviceTime, comments };

    axios.post(url + "/submit-request", dataOut).then((res) => {
      console.log(res);
    }).catch((err)=> console.log(err));

    // for now, console log the values
    console.log("current service time entered:", serviceTime);
    console.log("current comments:", comments);
  };

  React.useEffect(() => {}, [comments, serviceTime]);

  return (
    <Container className={styles.servContainer}>
      <Container className={styles.servHeader}>
        <h3>{data.title}</h3>
        <h3>${data.rate}/hour</h3>
      </Container>
      <Container className={styles.servBody}>
        <Container>
          <h4>{data.title}</h4>
          <p>{data.description}</p>
        </Container>
        <Container>
          <Form>
            <Form.Group>
              <Form.Label>Enter your requested service time:</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Requested service time..."
                onChange={(e) => setServiceTime(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group>
              <Form.Label>Enter any comments you have:</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="Describe the issue..."
                onChange={(e) => setComments(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button variant="primary" type="button" onClick={handleSubmit}>
              Submit form
            </Button>
          </Form>
        </Container>
      </Container>
    </Container>
  );
};

export default Service;
