import { Navigate, Route, Routes, useParams } from "react-router-dom";
import Assignments from "./Assignments/AssignmentsPage";
import AssignmentEditor from "./Assignments/Editor";
import Home from "./Home";
import Modules from "./Modules";
import CourseNavigation from "./Navigation";
import PeopleTable from "./People/Table";

export default function Courses({ courses }: { courses: any[] }) {
  const { cid } = useParams();
  const course = courses.find((course) => course._id === cid);

  if (!course) return <h2>Course Not Found</h2>;

  return (
    <div id="wd-courses">
      <h2>{course.name}</h2>
      <hr />
      <div className="d-flex">
        <div className="d-none d-md-block">
          <CourseNavigation />
        </div>
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
