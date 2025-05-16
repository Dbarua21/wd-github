import { Navigate, Route, Routes } from "react-router-dom";
import ManageClass from "./ManageClass";
import NewPostScreen from "./NewPostScreen";
import PazzaNavigation from "./PazzaNavigation";
import PostScreen from "./PostScreen";
import QAScreen from "./QAScreen";

export default function Pazza() {
  return (
    <div className="d-flex">
      <PazzaNavigation />
      <div className="flex-grow-1 p-3">
        <Routes>
          <Route path="/" element={<Navigate to="QAScreen" />} />
          <Route path="QAScreen" element={<QAScreen />} />
          <Route path="NewPost" element={<NewPostScreen />} />
          <Route path="Post/:postId" element={<PostScreen />} />
          <Route path="ManageClass/*" element={<ManageClass />} />
        </Routes>
      </div>
    </div>
  );
}
