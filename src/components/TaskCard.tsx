import { TaskParams } from "../types/task";
import { Draggable } from "@hello-pangea/dnd";
import { Button, Card } from "react-bootstrap";

interface TaskCardParams {
  task: TaskParams;
  index: number;
}

function TaskCard({ task, index }: TaskCardParams) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>{task.title}</Card.Title>
            <Card.Text>
              {task.description}
            </Card.Text>
            <Card.Subtitle>
              Personel: {task.assignee}
            </Card.Subtitle>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      )}
    </Draggable>
  );
}

export default TaskCard;
