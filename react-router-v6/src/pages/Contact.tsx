import React, { useState } from "react";
import {
  Container,
  Card,
  Row,
  Col,
  Image,
  Button,
  Form,
  FormGroup,
  FormLabel,
  FormControl,
  Alert,
} from "react-bootstrap";
export const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [show, setShow] = useState<boolean>(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "name") {
      setName(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "message") {
      setMessage(value);
    }
  };
  return (
    <Container>
      <Card className="my-5 p-4">
        <Form.Floating>
          <h1>Contact Me</h1>
          <FormGroup>
            <FormLabel className=" mt-3">Name</FormLabel>
            <FormControl
              type="text"
              name="name"
              placeholder="Enter your name"
              value={name}
              onChange={handleChange}
            ></FormControl>
          </FormGroup>
          <FormGroup>
            <FormLabel className=" mt-3">Email</FormLabel>
            <FormControl
              type="text"
              name="email"
              placeholder="Enter your email"
              value={name}
              onChange={handleChange}
            ></FormControl>
          </FormGroup>
          <FormGroup>
            <FormLabel className=" mt-3">Message</FormLabel>
            <FormControl
              as="textarea"
              name="message"
              placeholder="Enter your message"
              value={name}
              onChange={handleChange}
            ></FormControl>
          </FormGroup>
          <Button
            variant="primary"
            className="mt-3"
            type="submit"
            onClick={() => setShow(true)}
          >Submit</Button>
        </Form.Floating>
        <Alert show={show} className="mt-3" variant="success">
            Your message has been sent!
        </Alert>
      </Card>
    </Container>
  );
};
