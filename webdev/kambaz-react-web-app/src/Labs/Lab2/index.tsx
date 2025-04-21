import { Container } from "react-bootstrap";
import BackgroundColors from "./BackgroundColors";
import BootstrapForms from "./BootstrapForms";
import BootstrapGrids from "./BootstrapGrids";
import BootstrapLists from "./BootstrapLists";
import BootstrapNavigation from "./BootstrapNavigation";
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
import ZIndex from "./ZIndex";

export default function Lab2() {
  return (
    <Container>
      <h2>Lab 2 – Cascading Style Sheets</h2>

      <h3>Styling with the STYLE attribute</h3>
      <p style={{ backgroundColor: "green", color: "white" }}>
        Style attribute allows configuring look and feel right on the element.
      </p>

      <h3>ID selectors</h3>
      <div id="wd-css-id-selectors">
        <p id="wd-id-selector-1">Styling based on ID selector 1</p>
        <p id="wd-id-selector-2">Styling based on ID selector 2</p>
      </div>

      <h3>Class selectors</h3>
      <div id="wd-css-class-selectors">
        <p className="wd-class-selector">Styling based on class selector</p>
        <p className="wd-class-selector">Styling based on class selector</p>
      </div>

      <BackgroundColors />
      <ForegroundColors />
      <Borders />
      <Corners />
      <Margins />
      <Padding />
      <Dimensions />
      <Positions />
      <ZIndex />
      <Float />
      <Flex />
      <GridLayout />
      <BootstrapGrids />
      <ScreenSizeLabel />
      <BootstrapTables />
      <BootstrapLists />
      <BootstrapNavigation />
      <BootstrapForms />
      <ReactIconsSampler />
    </Container>
  );
}
