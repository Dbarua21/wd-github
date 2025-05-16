import { useState } from "react";
import {
  Button,
  Card,
  Col,
  FormControl,
  Row
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import db from "../../Database";

export default function Dashboard() {
  const [courses, setCourses] = useState<any[]>(db.courses);
  const [course, setCourse] = useState<any>({
    _id: "0",
    name: "New Course",
    number: "New Number",
    startDate: "2023-09-10",
    endDate: "2023-12-15",
    image: "/images/reactjs.jpg",
    description: "New Description",
  });

  const addNewCourse = () => {
    const newCourse = { ...course, _id: uuidv4() };
    setCourses([...courses, newCourse]);
  };

  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => (c._id === course._id ? course : c))
    );
  };

  return (
    <div id="wd-dashboard" className="p-3">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <h5>New Course</h5>

      {/* Course Name */}
      <FormControl
        className="mb-2"
        value={course.name}
        placeholder="Course Name"
        onChange={(e) =>
          setCourse({ ...course, name: e.target.value })
        }
      />

      {/* Course Description (Textarea) */}
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

      {/* Buttons */}
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

      {/* Courses Grid */}
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {courses.map((course) => (
          <Col
            key={course._id}
            style={{ minWidth: "250px", maxWidth: "270px" }}
          >
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
