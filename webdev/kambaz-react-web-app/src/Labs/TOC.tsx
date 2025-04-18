import { Link } from "react-router-dom";

export default function TOC() {
  return (
    <ul>
      <li><Link to="/labs">Labs</Link></li>
      <li><Link to="/labs/Lab1">Lab 1</Link></li>
      <li><Link to="/labs/Lab2">Lab 2</Link></li>
      <li><Link to="/labs/Lab3">Lab 3</Link></li>
    </ul>
  );
}

