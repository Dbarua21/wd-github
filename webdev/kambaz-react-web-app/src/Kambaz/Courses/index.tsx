import { Navigate, Route, Routes } from "react-router-dom";
import Assignments from "./Assignments/AssignmentsPage";
import AssignmentEditor from "./Assignments/Editor";
import Home from "./Home";
import Modules from "./Modules";
import CourseNavigation from "./Navigation";
import PeopleTable from "./People/Table";

export default function Courses() {
  return (
    <div id="wd-courses">
      <h2>Course 1234</h2>
      <hr />
      <div className="d-flex">
        {/* Sidebar */}
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>

        {/* Main content */}
        <div className="flex-fill">
          <Routes>
            <Route index element={<Navigate to="Home" replace />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
