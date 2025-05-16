import {
  Button,
  Card,
  Col,
  FormControl,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Dashboard({
  courses,
  course,
  setCourse,
  addNewCourse,
  deleteCourse,
  updateCourse,
}: {
  courses: any[];
  course: any;
  setCourse: (course: any) => void;
  addNewCourse: () => void;
  deleteCourse: (courseId: string) => void;
  updateCourse: () => void;
}) {
  return (
    <div id="wd-dashboard" className="p-3">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <h5>New Course</h5>

      <FormControl
        className="mb-2"
        value={course.name}
        placeholder="Course Name"
        onChange={(e) =>
          setCourse({ ...course, name: e.target.value })
        }
      />

      <FormControl
        as="textarea"
        rows={3}
        className="mb-2"
        value={course.description}
        placeholder="Course Description"
        onChange={(e) =>
          setCourse({ ...course, description: e.target.value })
        }
      />

      <Button
        className="btn btn-warning float-end me-2"
        id="wd-update-course-click"
        onClick={updateCourse}
      >
        Update
      </Button>
      <Button
        className="btn btn-primary float-end"
        id="wd-add-new-course-click"
        onClick={addNewCourse}
      >
        Add
      </Button>

      <hr />
      <h2 id="wd-dashboard-published">
        Published Courses ({courses.length})
      </h2>

      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {courses.map((course) => (
          <Col key={course._id} style={{ minWidth: "250px", maxWidth: "270px" }}>
            <Card className="h-100">
              <Link
                to={`/Kambaz/Courses/${course._id}/Home`}
                className="text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src={course.image}
                  style={{ height: "160px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{course.name}</Card.Title>
                  <Card.Text style={{ height: "100px" }}>
                    {course.description}
                  </Card.Text>
                </Card.Body>
              </Link>
              <Button
                className="btn btn-danger float-end"
                id="wd-delete-course-click"
                onClick={(e) => {
                  e.preventDefault();
                  deleteCourse(course._id);
                }}
              >
                Delete
              </Button>
              <Button
                className="btn btn-warning me-2 float-end"
                id="wd-edit-course-click"
                onClick={(e) => {
                  e.preventDefault();
                  setCourse(course);
                }}
              >
                Edit
              </Button>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
