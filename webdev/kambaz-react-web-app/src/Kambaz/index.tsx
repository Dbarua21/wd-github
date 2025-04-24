import { Navigate, Route, Routes } from "react-router";
import Account from "./Account";
import Courses from "./Courses";
import AssignmentEditor from "./Courses/Assignments/Editor";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import "./styles.css";

export default function Kambaz() {
  return (
    <div id="wd-kambaz" className="d-flex">
      <KambazNavigation />
      <div className="wd-main-content-offset p-3">
        <Routes>
          <Route path="/" element={<Navigate to="/Kambaz/Account" />} />
          <Route path="/Account/*" element={<Account />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Courses/:cid/*" element={<Courses />} />
          <Route path="/Calendar" element={<h1>Calendar</h1>} />
          <Route path="/Inbox" element={<h1>Inbox</h1>} />
          <Route path="/Labs" element={<h1>Labs</h1>} />
          <Route path=":courseId/Assignments/:aid" element={<AssignmentEditor />} />
        </Routes>
      </div>
    </div>
  );
}

