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
          className="mt-3 shadow"
        >
          <Card.Header className="fw-bolder">{task.title}</Card.Header>
          <Card.Body>
            <Card.Text>
              {task.description}
            </Card.Text>
            <Card.Subtitle>
              Personel: {task.assignee}
            </Card.Subtitle>
            <Button className="mt-2" variant="primary">Düzenle</Button>
          </Card.Body>
        </Card>
      )}
    </Draggable>
  );
}

export default TaskCard;
