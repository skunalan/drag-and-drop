import React from "react";
import { TaskParams } from "../types/task"
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { Container, Row } from "react-bootstrap";
import TaskCol from "./TaskCol";

interface TaskBordParams {
  tasks: TaskParams[];
  setTasks: React.Dispatch<React.SetStateAction<TaskParams[]>>
}

const statuses = ["Not Started", "In Progress", "Completed"]

function TaskBoard({tasks, setTasks}: TaskBordParams) {
const onDragEnd = (result: DropResult) => {
const {destination, source, draggableId} = result;

  if (!destination) {
    return;
  }

  if (destination.droppableId === source.droppableId && destination.index === source.index) {
    return;
  }

  const draggedTask = tasks.find((task) => task.id === draggableId);

  const updatedTask: TaskParams = {
    ...draggedTask, status: destination.droppableId as TaskParams["status"]
  }

  const newTask = tasks.filter((task) => task.id !== draggableId)

  const destinationTask = newTask.filter((task) => task.status === destination.droppableId)

  let insertAt = 0;
  if(destination.index === 0) {
    const firstTaskDestination = newTask.find ((task) => task.status === destination.droppableId)

    if(firstTaskDestination) {
      insertAt = newTask.indexOf(firstTaskDestination)
    } else {
      insertAt = newTask.length
    }
  }

  newTask.splice(insertAt, 0, updatedTask)

  setTasks(newTask)
  
}

  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <Container>
      <Row>
        {statuses.map((status)=> (
          <TaskCol key={status} status={status} tasks={tasks.filter((task) => task.status === status)}/>
        ))}
      </Row>
    </Container>
  </DragDropContext>
  )
}

export default TaskBoard