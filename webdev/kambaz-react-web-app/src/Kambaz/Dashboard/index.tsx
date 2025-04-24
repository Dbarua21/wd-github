import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const courses = [
  {
    id: "5100",
    title: "CS5100 Foundations of AI",
    desc: "Intro to Intelligent Systems",
    img: "/images/ai-foundations.jpg",
  },
  {
    id: "WebDev",
    title: "CS5610 Web Development",
    desc: "Frontend & Backend Engineering",
    img: "/images/web-dev.jpg",
  },
  {
    id: "iOS",
    title: "CS5520 Mobile/iOS Dev",
    desc: "Swift & Mobile App Projects",
    img: "/images/ios-dev.jpg",
  },
  {
    id: "OOP",
    title: "CS5004 Object-Oriented Programming",
    desc: "Abstraction, Inheritance & Design",
    img: "/images/oop.jpg",
  },
  {
    id: "Algos",
    title: "CS5008 Data Structures & Algorithms",
    desc: "Problem Solving & Optimization",
    img: "/images/algos.jpg",
  },
  {
    id: "5002",
    title: "CS5002 Discrete Math",
    desc: "Logic, Sets & Proofs",
    img: "/images/discrete-math.jpg",
  },
  {
    id: "Coop",
    title: "Career Prep & Co-op",
    desc: "Resume • Interviews • Internships",
    img: "/images/career.jpg",
  },
];

export default function Dashboard() {
  return (
    <div id="wd-dashboard" className="p-3">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <hr />
      <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2>
      <hr />

      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {courses.map((course) => (
          <Col key={course.id} style={{ minWidth: "250px", maxWidth: "270px" }}>
            <Card className="h-100">
              <Link
                to={`/Kambaz/Courses/${course.id}/Home`}
                className="text-decoration-none text-dark"
              >
                <Card.Img
                  variant="top"
                  src={course.img}
                  style={{ height: "160px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title className="text-nowrap overflow-hidden">
                    {course.title}
                  </Card.Title>
                  <Card.Text
                    className="overflow-hidden"
                    style={{ height: "100px" }}
                  >
                    {course.desc}
                  </Card.Text>
                  <Button variant="primary">Go</Button>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
