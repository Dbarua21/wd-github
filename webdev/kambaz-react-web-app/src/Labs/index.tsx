import { Link, Navigate, Route, Routes } from "react-router-dom";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import TOC from "./TOC";

// Lab 4 Components
import BooleanStateVariables from "./Lab4/BooleanStateVariables";
import ClickEvent from "./Lab4/ClickEvent";
import Counter from "./Lab4/Counter";
import EventObject from "./Lab4/EventObject";
import PassingDataOnEvent from "./Lab4/PassingDataOnEvent";
import PassingFunctions from "./Lab4/PassingFunctions";

export default function Labs() {
  return (
    <div>
      <h1>Labs</h1>

      {/* Full Name */}
      <p>Dina Barua</p>

      {/* GitHub Repo Link with ID */}
      <a
        href="https://github.com/Dbarua21/wd-github"
        id="wd-github"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>

      {/* Table of Contents */}
      <TOC />

      {/* Lab 4 Navigation Links */}
      <h3>Lab 4 Exercises</h3>
      <ul>
        <li><Link to="/Labs/Lab4/ClickEvent">Click Event</Link></li>
        <li><Link to="/Labs/Lab4/PassingDataOnEvent">Pass Data on Event</Link></li>
        <li><Link to="/Labs/Lab4/PassingFunctions">Passing Functions</Link></li>
        <li><Link to="/Labs/Lab4/EventObject">Event Object</Link></li>
        <li><Link to="/Labs/Lab4/Counter">Counter</Link></li>
        <li><Link to="/Labs/Lab4/BooleanStateVariables">Boolean State Variables</Link></li>
      </ul>

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Navigate to="lab1" />} />
        <Route path="lab1" element={<Lab1 />} />
        <Route path="lab2/*" element={<Lab2 />} />
        <Route path="lab3/*" element={<Lab3 />} />
        <Route path="Lab4" element={<Lab4 />} />
        <Route path="Lab4/ClickEvent" element={<ClickEvent />} />
        <Route path="Lab4/PassingDataOnEvent" element={<PassingDataOnEvent />} />
        <Route path="Lab4/PassingFunctions" element={<PassingFunctions />} />
        <Route path="Lab4/EventObject" element={<EventObject />} />
        <Route path="Lab4/Counter" element={<Counter />} />
        <Route path="Lab4/BooleanStateVariables" element={<BooleanStateVariables />} />
      </Routes>
    </div>
  );
}
