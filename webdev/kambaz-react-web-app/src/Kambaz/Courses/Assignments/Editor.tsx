import { Button, Form } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor" className="p-4" style={{ fontFamily: "Arial", maxWidth: "700px" }}>
      <h3>Assignment Name</h3>
      <Form>
        <Form.Control type="text" defaultValue="A1 - ENV + HTML" className="mb-3" />

        <Form.Group className="mb-3">
          <Form.Control
            as="textarea"
            rows={7}
            defaultValue={`The assignment is available online
Submit a link to the landing page of your Web application running on Netlify.
The landing page should include the following:
- Your full name and section
- Links to each of the lab assignments
- Link to the Kambaz application
- Links to all relevant source code repositories
The Kambaz application should include a link to navigate back to the landing page.`}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Points</Form.Label>
          <Form.Control type="number" defaultValue={100} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Assignment Group</Form.Label>
          <Form.Select defaultValue="ASSIGNMENTS">
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Display Grade as</Form.Label>
          <Form.Select defaultValue="Percentage">
            <option value="Percentage">Percentage</option>
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Submission Type</Form.Label>
          <Form.Select defaultValue="Online">
            <option value="Online">Online</option>
          </Form.Select>
        </Form.Group>

        <p>Online Entry Options</p>
        <div className="ps-3">
          <Form.Check type="checkbox" label="Text Entry" />
          <Form.Check type="checkbox" label="Website URL" />
          <Form.Check type="checkbox" label="Media Recordings" />
          <Form.Check type="checkbox" label="Student Annotation" />
          <Form.Check type="checkbox" label="File Uploads" />
        </div>

        <Form.Group className="mt-4">
          <Form.Label>Assign to</Form.Label>
          <Form.Control type="text" defaultValue="Everyone" />
        </Form.Group>

        <Form.Group className="mt-3">
          <Form.Label>Due</Form.Label>
          <Form.Control type="date" defaultValue="2024-05-13" />
        </Form.Group>

        <div className="d-flex mt-3 gap-3">
          <div>
            <Form.Label>Available from</Form.Label>
            <Form.Control type="date" defaultValue="2024-05-06" />
          </div>
          <div>
            <Form.Label>Until</Form.Label>
            <Form.Control type="date" defaultValue="2024-05-20" />
          </div>
        </div>

        <div className="mt-4">
          <Button variant="secondary" className="me-2">Cancel</Button>
          <Button variant="danger">Save</Button>
        </div>
      </Form>
    </div>
  );
}
