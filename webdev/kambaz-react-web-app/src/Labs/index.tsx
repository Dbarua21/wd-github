import { Link, Navigate, Route, Routes } from "react-router-dom";
import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
import Lab4 from "./Lab4";
import TOC from "./TOC";

// Lab 4 imports
import ArrayStateVariable from "./Lab4/ArrayStateVariable";
import BooleanStateVariables from "./Lab4/BooleanStateVariables";
import ClickEvent from "./Lab4/ClickEvent";
import Counter from "./Lab4/Counter";
import DateStateVariable from "./Lab4/DateStateVariable";
import EventObject from "./Lab4/EventObject";
import ObjectStateVariable from "./Lab4/ObjectStateVariable";
import ParentStateComponent from "./Lab4/ParentStateComponent";
import PassingDataOnEvent from "./Lab4/PassingDataOnEvent";
import PassingFunctions from "./Lab4/PassingFunctions";
import ReduxExamples from "./Lab4/ReduxExamples";
import StringStateVariables from "./Lab4/StringStateVariables";

export default function Labs() {
  const sayHello = () => {
    alert("Hello");
  };

  return (
    <div>
      <h1>Labs</h1>
      <p>Dina Barua</p>
      <a
        href="https://github.com/Dbarua21/wd-github"
        id="wd-github"
        target="_blank"
        rel="noreferrer"
      >
        GitHub
      </a>

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
        <li><Link to="/Labs/Lab4/StringStateVariables">String State Variables</Link></li>
        <li><Link to="/Labs/Lab4/DateStateVariable">Date State Variable</Link></li>
        <li><Link to="/Labs/Lab4/ObjectStateVariable">Object State Variable</Link></li>
        <li><Link to="/Labs/Lab4/ArrayStateVariable">Array State Variable</Link></li>
        <li><Link to="/Labs/Lab4/ParentStateComponent">Parent/Child State Sharing</Link></li>
        <li><Link to="/Labs/Lab4/ReduxExamples">Redux Examples</Link></li>
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
        <Route path="Lab4/PassingFunctions" element={<PassingFunctions theFunction={sayHello} />} />
        <Route path="Lab4/EventObject" element={<EventObject />} />
        <Route path="Lab4/Counter" element={<Counter />} />
        <Route path="Lab4/BooleanStateVariables" element={<BooleanStateVariables />} />
        <Route path="Lab4/StringStateVariables" element={<StringStateVariables />} />
        <Route path="Lab4/DateStateVariable" element={<DateStateVariable />} />
        <Route path="Lab4/ObjectStateVariable" element={<ObjectStateVariable />} />
        <Route path="Lab4/ArrayStateVariable" element={<ArrayStateVariable />} />
        <Route path="Lab4/ParentStateComponent" element={<ParentStateComponent />} />
        <Route path="Lab4/ReduxExamples" element={<ReduxExamples />} />
      </Routes>
    </div>
  );
}