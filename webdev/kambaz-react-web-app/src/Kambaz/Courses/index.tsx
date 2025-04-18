import { Navigate, Route, Routes } from "react-router-dom";
import Assignments from "./Assignments/AssignmentsPage";
import AssignmentEditor from "./Assignments/Editor";
import Home from "./Home";
import Modules from "./Modules";
import CourseNavigation from "./Navigation";

export default function Courses() {
  return (
    <div id="wd-courses">
      <h2>Course 1234</h2>
      <hr />
      <table>
        <tbody>
          <tr>
            <td valign="top">
              <CourseNavigation />
            </td>
            <td valign="top">
              <Routes>
                <Route index element={<Navigate to="Home" replace />} />
                <Route path="Home" element={<Home />} />
                <Route path="Modules" element={<Modules />} />
                <Route path="Assignments" element={<Assignments />} />
                <Route path="Assignments/:aid" element={<AssignmentEditor />} />
              </Routes>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
