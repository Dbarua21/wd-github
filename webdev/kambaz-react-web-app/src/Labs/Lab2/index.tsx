import { Container } from "react-bootstrap";
import BackgroundColors from "./BackgroundColors";
import BootstrapGrids from "./BootstrapGrids";
import Borders from "./Borders";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Float from "./Float";
import ForegroundColors from "./ForegroundColors";
import "./index.css";
import Margins from "./Margins";
import Padding from "./Padding";
import Positions from "./Positions";
import ReactIconsSampler from "./ReactIcons";
import Zindex from "./Zindex";

export default function Lab2() {
  return (
    <Container>
      <h2>Lab 2 - Cascading Style Sheets</h2>

      <h3>Styling with the STYLE attribute</h3>
      <p style={{ backgroundColor: "green", color: "white" }}>
        Style attribute allows configuring look and feel right on the element. Although it's very convenient it is considered bad practice and you should avoid using the style attribute
      </p>

      <h3>ID selectors</h3>
      <div id="wd-css-id-selectors">
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same name, e.g., <i>p</i>, we can refer to a specific element by its ID
        </p>
        <p id="wd-id-selector-2">
          Here's another paragraph using a different ID and a different look and feel
        </p>
      </div>

      <h3>Class selectors</h3>
      <p className="wd-class-selector">
        Instead of using IDs to refer to elements, you can use an element's CLASS attribute
      </p>
      <h4 className="wd-class-selector">This heading has same style as paragraph above</h4>

      <h3>Document structure selectors</h3>
      <div className="wd-selector-2">
        <div className="wd-selector-3">
          <p>This paragraph's red background is referenced as <br />
            <code>.selector-2 .selector-3</code> <br />
            meaning the descendant of some ancestor.
          </p>
          <span className="wd-selector-4">
            whereas this span is a direct child of its parent
          </span>
        </div>
      </div>

      <h3>Colors</h3>
      <ForegroundColors />
      <BackgroundColors />

      <h3>Borders</h3>
      <Borders />

      <h3>Padding</h3>
      <Padding />

      <h3>Margins</h3>
      <Margins />

      <h3>Corners</h3>
      <Corners />

      <h3>Dimensions</h3>
      <Dimensions />

      <h3>Positions</h3>
      <Positions />

      <h3>Z-index</h3>
      <Zindex />

      <h3>Float</h3>
      <Float />

      <h3>React Icons</h3>
      <ReactIconsSampler />

      <h3>Bootstrap Grid</h3>
      <BootstrapGrids />
    </Container>
  );
}
