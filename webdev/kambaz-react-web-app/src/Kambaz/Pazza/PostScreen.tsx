import { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

export default function PostScreen() {
  const [instructorAnswer, setInstructorAnswer] = useState("");
  const [studentAnswer, setStudentAnswer] = useState("");
  const [discussion, setDiscussion] = useState("");
  const [reply, setReply] = useState("");

  return (
    <Row className="p-3">
      <Col md={7}>
        <Card className="mb-4">
          <Card.Body>
            <Card.Subtitle className="text-muted mb-1">hw1</Card.Subtitle>
            <Card.Title>Grade for Assignment 1</Card.Title>
            <Card.Text>
              I noticed my grade for Assignment 1 is showing as 0% on Canvas.
              May I know if this is the final grade I received or if it means
              the assignment is still being graded? I couldn’t find any feedback
              regarding where I might have lost points.
            </Card.Text>
            <div className="text-muted">John Doe • 1 view</div>
          </Card.Body>
        </Card>

        {/* Student Answer */}
        <Card className="mb-4">
          <Card.Header>Student’s Answer</Card.Header>
          <Card.Body>
            <Form.Control
              as="textarea"
              placeholder="Write your answer as a student"
              rows={4}
              value={studentAnswer}
              onChange={(e) => setStudentAnswer(e.target.value)}
            />
            <Button className="mt-2">Submit Student Answer</Button>
          </Card.Body>
        </Card>

        {/* Instructor Answer */}
        <Card className="mb-4">
          <Card.Header>Instructor’s Answer</Card.Header>
          <Card.Body>
            <Form.Control
              as="textarea"
              placeholder="Write instructor's answer here"
              rows={4}
              value={instructorAnswer}
              onChange={(e) => setInstructorAnswer(e.target.value)}
            />
            <Button className="mt-2">Submit Instructor Answer</Button>
          </Card.Body>
        </Card>

        {/* Follow-Up Discussion */}
        <Card className="mb-4">
          <Card.Header>Follow-up Discussions</Card.Header>
          <Card.Body>
            <Form.Control
              as="textarea"
              placeholder="Start a new follow-up discussion"
              rows={3}
              value={discussion}
              onChange={(e) => setDiscussion(e.target.value)}
            />
            <Button className="mt-2 mb-4">Start Discussion</Button>

            {/* Example Thread */}
            <div className="border-top pt-2">
              <p>
                <strong>Abby Hoffman</strong> (3 hours ago):
                <br />
                Does the format need to be exactly as shown in the example
                photo?
              </p>
              <div className="ms-3">
                <p>
                  <strong>Jose Annunziato</strong> (20 mins ago):
                  <br />
                  Yes, you can use tables to achieve that.
                </p>

                {/* Reply to Reply */}
                <Form.Control
                  as="textarea"
                  placeholder="Reply to this discussion"
                  rows={2}
                  value={reply}
                  onChange={(e) => setReply(e.target.value)}
                />
                <Button className="mt-2">Submit Reply</Button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}
