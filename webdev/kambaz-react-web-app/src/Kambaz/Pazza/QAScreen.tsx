import { useState } from "react";
import { Badge, Button, Card, Col, Form, Row } from "react-bootstrap";
import pazzaData from "./pazzaData.json";
import "./styles.css";

export default function QAScreen() {
  const [selectedPostId, setSelectedPostId] = useState<string | null>(null);

  const posts = pazzaData.posts;
  const selectedPost = posts.find((post) => post._id === selectedPostId);

  return (
    <Row>
      {/* Sidebar: List of Posts */}
      <Col md={4} className="border-end">
        <h5 className="mt-3">Class at a Glance</h5>
        <ul className="list-group">
          {posts.map((post) => (
            <li
              key={post._id}
              className={`list-group-item ${
                selectedPostId === post._id ? "active" : ""
              }`}
              onClick={() => setSelectedPostId(post._id)}
              role="button"
            >
              <div className="fw-bold">{post.title}</div>
              <div className="text-muted small">{post.summary}</div>
            </li>
          ))}
        </ul>
      </Col>

      {/* Post Screen */}
      <Col md={8} className="pt-3">
        {!selectedPost && (
          <div className="text-muted">Click a post to view its details</div>
        )}

        {selectedPost && (
          <>
            <h5>{selectedPost.title}</h5>
            <div className="mb-2">
              <Badge bg="info">{selectedPost.folder}</Badge>{" "}
              <Badge bg="secondary">{selectedPost.views} views</Badge>
            </div>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>{selectedPost.author}</Card.Title>
                <Card.Text>{selectedPost.details}</Card.Text>
              </Card.Body>
            </Card>

            <h6>Instructor’s Answer</h6>
            <Card>
              <Card.Body>
                <Form.Control as="textarea" rows={3} defaultValue="Thanks, we’ll get back to you soon." />
                <div className="d-flex justify-content-end mt-2">
                  <Button variant="primary" size="sm">Submit</Button>
                </div>
              </Card.Body>
            </Card>
          </>
        )}
      </Col>
    </Row>
  );
}
