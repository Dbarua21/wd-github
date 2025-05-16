import { ListGroup } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

export default function PazzaNavigation() {
  const location = useLocation();

  const links = [
    { label: "Q & A", path: "QAScreen" },
    { label: "New Post", path: "NewPost" },
    { label: "Manage Class", path: "ManageClass" },
  ];

  return (
    <ListGroup
      style={{ width: 200 }}
      className="position-fixed top-0 bottom-0 bg-light rounded-0"
    >
      <ListGroup.Item className="fw-bold text-center bg-dark text-white border-0">
        pazza
      </ListGroup.Item>

      {links.map((link, i) => (
        <ListGroup.Item
          key={i}
          as={Link}
          to={link.path}
          className={`text-center border-0 ${
            location.pathname.includes(link.path) ? "fw-bold bg-secondary text-white" : ""
          }`}
        >
          {link.label}
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}
