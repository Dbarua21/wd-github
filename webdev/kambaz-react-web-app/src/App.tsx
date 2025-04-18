import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import Kambaz from "./Kambaz";
import Labs from "./Labs";

export default function App() {
  return (
    <HashRouter>
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="kambaz" />} />
          <Route path="labs/*" element={<Labs />} />
          <Route path="kambaz/*" element={<Kambaz />} />  {/* ← THIS IS MISSING */}
        </Routes>
      </div>
    </HashRouter>
  );
}
