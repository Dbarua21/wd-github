import { Container } from "react-bootstrap";
import BackgroundColors from "./BackgroundColors";
import BootstrapGrids from "./BootstrapGrids";
import BootstrapTables from "./BootstrapTables";
import Borders from "./Borders";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Flex from "./Flex";
import Float from "./Float";
import ForegroundColors from "./ForegroundColors";
import GridLayout from "./GridLayout";
import "./index.css";
import Margins from "./Margins";
import Padding from "./Padding";
import Positions from "./Positions";
import ReactIconsSampler from "./ReactIcons";
import ScreenSizeLabel from "./ScreenSizeLabel";
import Zindex from "./ZIndex";

export default function Lab2() {
  return (
    <Container>
      <ScreenSizeLabel />
      <h2>Lab 2 – Cascading Style Sheets</h2>

      <h3>Styling with the STYLE attribute</h3>
      <p style={{ backgroundColor: "green", color: "white" }}>
        Style attribute allows configuring look and feel right on the element. Although it's very
        convenient it is considered bad practice and you should avoid using the style attribute
      </p>

      <h3>ID selectors</h3>
      <div id="wd-css-id-selectors">
        <p id="wd-id-selector-1">
          Instead of changing the look and feel of all the elements of the same type and tag name,
          e.g., &lt;i&gt;p&lt;/i&gt;, we can refer to a specific element by its ID.
        </p>
      </div>

      <BackgroundColors />
      <ForegroundColors />
      <Borders />
      <Corners />
      <Margins />
      <Padding />
      <Dimensions />
      <Positions />
      <Zindex />
      <Float />
      <GridLayout />
      <Flex />
      <BootstrapGrids />
      <BootstrapTables />
      <ReactIconsSampler />
    </Container>
  );
}
