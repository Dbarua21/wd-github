import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import db from "../Database";
import Account from "./Account";
import Courses from "./Courses";
import AssignmentEditor from "./Courses/Assignments/Editor";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Pazza from "./Pazza";

import "./styles.css";

export default function Kambaz() {
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
    setCourses([...courses, { ...course, _id: uuidv4() }]);
  };

  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((c) => c._id !== courseId));
  };

  const updateCourse = () => {
    setCourses(
      courses.map((c) => (c._id === course._id ? course : c))
    );
  };

  return (
    <div id="wd-kambaz" className="d-flex">
      <KambazNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="/Kambaz/Dashboard" />} />
          <Route path="Account/*" element={<Account />} />
          <Route
            path="Dashboard"
            element={
              <Dashboard
                courses={courses}
                course={course}
                setCourse={setCourse}
                addNewCourse={addNewCourse}
                deleteCourse={deleteCourse}
                updateCourse={updateCourse}
              />
            }
          />
          <Route
            path="Courses/:cid/*"
            element={<Courses courses={courses} />}
          />
          {/* ✅ New Pazza Tab under Course */}
          <Route path="Courses/:cid/Pazza/*" element={<Pazza />} />

          <Route path="Calendar" element={<h1>Calendar</h1>} />
          <Route path="Inbox" element={<h1>Inbox</h1>} />
          <Route path="Labs" element={<h1>Labs</h1>} />
          <Route path=":courseId/Assignments/:aid" element={<AssignmentEditor />} />
        </Routes>
      </div>
    </div>
  );
}
