import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export default function NewPostScreen() {
  const [postType, setPostType] = useState("question");
  const [summary, setSummary] = useState("");
  const [details, setDetails] = useState("");
  const [folder, setFolder] = useState("");
  const [audience, setAudience] = useState("class");

  const handleSubmit = () => {
    if (!summary || !details || !folder) {
      alert("All required fields must be filled.");
      return;
    }
    console.log({
      postType,
      summary,
      details,
      folder,
      audience,
    });
    alert("Post submitted!");
  };

  return (
    <Row className="p-3">
      <h4>New Post</h4>
      <Col md={8}>
        <Form>
          {/* Post Type Tabs */}
          <Form.Group className="mb-3">
            <Form.Label>Post Type</Form.Label>
            <div>
              <Form.Check
                inline
                type="radio"
                label="Question"
                value="question"
                checked={postType === "question"}
                onChange={(e) => setPostType(e.target.value)}
              />
              <Form.Check
                inline
                type="radio"
                label="Note"
                value="note"
                checked={postType === "note"}
                onChange={(e) => setPostType(e.target.value)}
              />
            </div>
          </Form.Group>

          {/* Post To */}
          <Form.Group className="mb-3">
            <Form.Label>Post To</Form.Label>
            <Form.Select
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
            >
              <option value="class">Entire Class</option>
              <option value="instructors">Individual Student(s) / Instructor(s)</option>
            </Form.Select>
          </Form.Group>

          {/* Folder Select */}
          <Form.Group className="mb-3">
            <Form.Label>Select Folder*</Form.Label>
            <Form.Select
              required
              value={folder}
              onChange={(e) => setFolder(e.target.value)}
            >
              <option value="">-- Select --</option>
              <option value="hw1">hw1</option>
              <option value="hw2">hw2</option>
              <option value="project">project</option>
              <option value="logistics">logistics</option>
              <option value="exam">exam</option>
              <option value="other">other</option>
            </Form.Select>
          </Form.Group>

          {/* Summary */}
          <Form.Group className="mb-3">
            <Form.Label>Summary*</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter a one-line summary (100 characters max)"
              value={summary}
              maxLength={100}
              required
              onChange={(e) => setSummary(e.target.value)}
            />
          </Form.Group>

          {/* Details */}
          <Form.Group className="mb-3">
            <Form.Label>Details*</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Provide additional details for your question or note"
              value={details}
              required
              onChange={(e) => setDetails(e.target.value)}
            />
          </Form.Group>

          {/* Submit */}
          <Button variant="primary" onClick={handleSubmit}>
            Post My {postType === "question" ? "Question" : "Note"}
          </Button>
        </Form>
      </Col>
    </Row>
  );
}
