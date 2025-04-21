import Modules from "../Modules";
import CourseStatus from "./Status";

export default function Home() {
  return (
    <div id="wd-home" className="d-flex">
      <div className="flex-fill me-3">
        <Modules />
      </div>
      <div style={{ width: "250px" }}>
        <CourseStatus />
      </div>
    </div>
  );
}
