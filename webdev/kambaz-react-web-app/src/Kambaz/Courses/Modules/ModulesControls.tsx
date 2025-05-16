import { useState } from "react";
import { Button, Dropdown } from "react-bootstrap";
import { FaPlus } from "react-icons/fa6";
import GreenCheckmark from "./GreenCheckmark";
import ModuleEditor from "./ModuleEditor";

export default function ModulesControls({
  moduleName,
  setModuleName,
  addModule,
}: {
  moduleName: string;
  setModuleName: (name: string) => void;
  addModule: () => void;
}) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <Button variant="danger" size="lg" onClick={handleShow} className="me-1 float-end" id="wd-add-module-btn">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module
      </Button>

      <Dropdown className="float-end me-2">
        <Dropdown.Toggle variant="secondary" size="lg" id="wd-publish-all-btn">
          <GreenCheckmark /> Publish All
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item><GreenCheckmark /> Publish All</Dropdown.Item>
          <Dropdown.Item><GreenCheckmark /> Publish all modules and items</Dropdown.Item>
          <Dropdown.Item><GreenCheckmark /> Publish modules only</Dropdown.Item>
          <Dropdown.Item>Unpublish all modules and items</Dropdown.Item>
          <Dropdown.Item>Unpublish modules only</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Button variant="light" className="me-2 float-end">View Progress</Button>
      <Button variant="light" className="me-2 float-end">Collapse All</Button>

      {/* Modal */}
      <ModuleEditor
        show={show}
        handleClose={handleClose}
        dialogTitle="Add Module"
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={addModule}
      />
    </div>
  );
}
