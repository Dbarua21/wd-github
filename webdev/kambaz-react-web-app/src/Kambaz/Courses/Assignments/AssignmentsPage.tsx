import { Button } from "react-bootstrap";
import { AiOutlineSearch } from "react-icons/ai";
import { BsPlusLg } from "react-icons/bs";

export default function AssignmentsPage() {
  return (
    <div id="wd-assignments" className="p-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="flex-grow-1">Assignments</h2>
        <div className="d-flex">
          <Button variant="light" className="me-2">
            <AiOutlineSearch className="me-2" />
            Search for Assignment
          </Button>
          <Button variant="secondary" className="me-2">+ Group</Button>
          <Button variant="danger"><BsPlusLg /> Assignment</Button>
        </div>
      </div>

      <hr />

      <ul className="list-group">
        <li className="list-group-item border-start border-success border-4">
          <a href="#/Kambaz/Courses/Assignments/a1" className="fw-bold text-decoration-none">A1 - ENV + HTML</a>
          <div className="text-muted small">Week 1 • Not available until May 6 at 12:00am • Due May 13 at 11:59pm</div>
        </li>
        <li className="list-group-item border-start border-success border-4">
          <a href="#/Kambaz/Courses/Assignments/a2" className="fw-bold text-decoration-none">A2 - CSS + Bootstrap</a>
          <div className="text-muted small">Week 2 • Due May 20 at 11:59pm</div>
        </li>
        <li className="list-group-item border-start border-success border-4">
          <a href="#/Kambaz/Courses/Assignments/a3" className="fw-bold text-decoration-none">A3 - React</a>
          <div className="text-muted small">Week 3 • Due May 27 at 11:59pm</div>
        </li>
      </ul>
    </div>
  );
}
