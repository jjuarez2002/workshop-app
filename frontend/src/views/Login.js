import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = React.useState();
  const [password, setPassword] = React.useState();

  const handleLogin = () => {
    // placeholder
    console.log("collected email", email);
    console.log("collected password", password);
    console.log("navigating to main page - dashboard view");
    navigate("/main/dashboard");
  };

  React.useEffect(
    () => console.log("detected change to email/password fields"),
    [email, password]
  );

  return (
    <Container>
      <h3>Login</h3>
      <Form>
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text>Your email won't be shared with anyone else</Form.Text>
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button variant="primary" onClick={handleLogin}>
          Log in
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
