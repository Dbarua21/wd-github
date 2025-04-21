import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";

export default function TOC() {
  return (
    <Nav variant="pills">
      <Nav.Item>
        <Nav.Link to="/labs" as={Link}>Labs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/labs/Lab1" as={Link}>Lab 1</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/labs/Lab2" as={Link} active>Lab 2</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/labs/Lab3" as={Link}>Lab 3</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link to="/Kambaz" as={Link}>Kambaz</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="https://github.com/jannunzi">My GitHub</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
