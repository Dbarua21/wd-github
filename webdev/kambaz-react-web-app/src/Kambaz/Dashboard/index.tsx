import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div id="wd-dashboard">
      <h1 id="wd-dashboard-title">Dashboard</h1>
      <h2 id="wd-dashboard-published">Published Courses (7)</h2>
      <div id="wd-dashboard-courses">

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/5100/Home" className="wd-dashboard-course-link">
            <img src="/images/ai-foundations.jpg" width={200} />
            <div>
              <h5>CS5100 Foundations of AI</h5>
              <p className="wd-dashboard-course-title">Intro to Intelligent Systems</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/WebDev/Home" className="wd-dashboard-course-link">
            <img src="images/web-dev.jpg" width={200} />
            <div>
              <h5>CS5610 Web Development</h5>
              <p className="wd-dashboard-course-title">Frontend & Backend Engineering</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/iOS/Home" className="wd-dashboard-course-link">
            <img src="images/ios-dev.jpg" width={200} />
            <div>
              <h5>CS5520 Mobile/iOS Dev</h5>
              <p className="wd-dashboard-course-title">Swift & Mobile App Projects</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/OOP/Home" className="wd-dashboard-course-link">
            <img src="images/oop.jpg" width={200} />
            <div>
              <h5>CS5004 Object-Oriented Programming</h5>
              <p className="wd-dashboard-course-title">Abstraction, Inheritance & Design</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/Algos/Home" className="wd-dashboard-course-link">
            <img src="images/algos.jpg" width={200} />
            <div>
              <h5>CS5008 Data Structures & Algorithms</h5>
              <p className="wd-dashboard-course-title">Problem Solving & Optimization</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/5002/Home" className="wd-dashboard-course-link">
            <img src="images/discrete-math.jpg" width={200} />
            <div>
              <h5>CS5002 Discrete Math</h5>
              <p className="wd-dashboard-course-title">Logic, Sets & Proofs</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

        <div className="wd-dashboard-course">
          <Link to="/Kambaz/Courses/Coop/Home" className="wd-dashboard-course-link">
            <img src="images/career.jpg" width={200} />
            <div>
              <h5>Career Prep & Co-op</h5>
              <p className="wd-dashboard-course-title">Resume • Interviews • Internships</p>
              <button>Go</button>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
}
