import { ListGroup } from "react-bootstrap";

const TodoItem = ({ todo }: { todo: { done: boolean; title: string; status: string } }) => {
  return (
    <ListGroup.Item>
      <input type="checkbox" className="me-2" defaultChecked={todo.done} />
      {todo.title} ({todo.status})
    </ListGroup.Item>
  );
};

export default TodoItem;
