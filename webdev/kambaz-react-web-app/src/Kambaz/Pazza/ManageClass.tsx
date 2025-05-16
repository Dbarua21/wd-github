import { ListGroup } from "react-bootstrap";
import { NavLink, Route, Routes } from "react-router-dom";
import ManageFolders from "./ManageFolders";

export default function ManageClass() {
  return (
    <div className="d-flex">
      {/* Sidebar */}
      <ListGroup style={{ width: 200 }} className="bg-light rounded-0 position-relative">
        <ListGroup.Item className="fw-bold text-center bg-dark text-white border-0">
          Manage
        </ListGroup.Item>

        {/* Folders Tab */}
        <ListGroup.Item
  as={NavLink}
  to="Folders"
  className={({ isActive }: { isActive: boolean }) =>
    `text-center border-0 ${isActive ? "fw-bold bg-secondary text-white" : ""}`
  }
>
  Folders
</ListGroup.Item>




        {/* You can add more tabs here as needed */}
        {/* Example:
        <ListGroup.Item
          as={NavLink}
          to="Permissions"
          className={({ isActive }) =>
            "text-center border-0 " +
            (isActive ? "fw-bold bg-secondary text-white" : "")
          }
        >
          Permissions
        </ListGroup.Item>
        */}
      </ListGroup>

      {/* Main content to the right of sidebar */}
      <div className="flex-grow-1 p-3">
        <Routes>
          <Route path="Folders" element={<ManageFolders />} />
          {/* Add more <Route> definitions here if you add other tabs */}
        </Routes>
      </div>
    </div>
  );
}
