import { useState } from "react";
import { Button, Col, Form, ListGroup, Row } from "react-bootstrap";

export default function ManageFolders() {
  const [folders, setFolders] = useState([
    "hw1",
    "project",
    "exam",
    "logistics",
    "random",
  ]);
  const [newFolder, setNewFolder] = useState("");
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [renamedFolder, setRenamedFolder] = useState("");

  const addFolder = () => {
    if (!newFolder.trim()) return;
    setFolders([...folders, newFolder.trim()]);
    setNewFolder("");
  };

  const deleteFolder = (index: number) => {
    const updated = [...folders];
    updated.splice(index, 1);
    setFolders(updated);
  };

  const startRename = (index: number) => {
    setEditingIndex(index);
    setRenamedFolder(folders[index]);
  };

  const submitRename = (index: number) => {
    if (!renamedFolder.trim()) return;
    const updated = [...folders];
    updated[index] = renamedFolder.trim();
    setFolders(updated);
    setEditingIndex(null);
    setRenamedFolder("");
  };

  return (
    <div>
      <h4 className="mb-3">Manage Folders</h4>

      <Row className="mb-3">
        <Col md={6}>
          <Form.Control
            placeholder="New folder name"
            value={newFolder}
            onChange={(e) => setNewFolder(e.target.value)}
          />
        </Col>
        <Col md="auto">
          <Button onClick={addFolder}>Add Folder</Button>
        </Col>
      </Row>

      <ListGroup>
        {folders.map((folder, index) => (
          <ListGroup.Item key={index} className="d-flex align-items-center">
            {editingIndex === index ? (
              <>
                <Form.Control
                  value={renamedFolder}
                  onChange={(e) => setRenamedFolder(e.target.value)}
                  className="me-2"
                />
                <Button
                  size="sm"
                  className="me-1"
                  onClick={() => submitRename(index)}
                >
                  Save
                </Button>
                <Button
                  size="sm"
                  variant="secondary"
                  onClick={() => setEditingIndex(null)}
                >
                  Cancel
                </Button>
              </>
            ) : (
              <>
                <div className="flex-grow-1">{folder}</div>
                <Button
                  variant="outline-secondary"
                  size="sm"
                  className="me-2"
                  onClick={() => startRename(index)}
                >
                  Rename
                </Button>
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => deleteFolder(index)}
                >
                  Delete
                </Button>
              </>
            )}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
}
