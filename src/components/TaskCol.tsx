import { TaskParams } from '../types/task';
import { Col } from 'react-bootstrap';
import { Droppable } from '@hello-pangea/dnd';
import TaskCard from './TaskCard';

interface TaskColParams {
  status: string;
  tasks: TaskParams[];
}


const statusColor: Record<string, string> = {
  "Not Started": "text-danger",
  "In Progress": "text-info",
  "Completed": "text-success"
}


function TaskCol({status, tasks}: TaskColParams) {
  return (
    <Col>
      <h4 className={`mt-3 text-center ${statusColor[status] || 'text-primary'}`}>{status}</h4>
      <Droppable droppableId={status}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps} style={{minHeight: "400px"}}>
            {tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index}/>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </Col>
  )
}

export default TaskCol