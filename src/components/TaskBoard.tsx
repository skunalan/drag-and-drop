import React from "react";
import { useEffect, useCallback } from "react"
import { TaskParams } from "../types/task";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { Container, Row } from "react-bootstrap";
import TaskCol from "./TaskCol";

interface TaskBordParams {
  tasks: TaskParams[];
  setTasks: React.Dispatch<React.SetStateAction<TaskParams[]>>;
}

const statuses = ["Not Started", "In Progress", "Completed"];

function TaskBoard({ tasks, setTasks }: TaskBordParams) {
  useEffect(() => {
    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, [setTasks]);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = useCallback((id: string) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }, [setTasks]);

  const onDragEnd = useCallback((result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    setTasks(prevTasks => {
      const draggedTask = prevTasks.find((task) => task.id === draggableId);
      
      if (!draggedTask) {
        return prevTasks;
      }

      const updatedTask: TaskParams = {
        ...draggedTask,
        status: destination.droppableId as TaskParams["status"],
      };

      const newTasks = prevTasks.filter((task) => task.id !== draggableId);
      const destinationTasks = newTasks.filter(
        (task) => task.status === destination.droppableId
      );

      let insertAt = 0;
      if (destination.index === 0) {
        const firstTaskDestination = newTasks.find(
          (task) => task.status === destination.droppableId
        );

        if (firstTaskDestination) {
          insertAt = newTasks.indexOf(firstTaskDestination);
        } else {
          insertAt = newTasks.length;
        }
      } else {
        const previousTaskDestination = destinationTasks[destination.index - 1];
        if (previousTaskDestination) {
          insertAt = newTasks.indexOf(previousTaskDestination) + 1;
        } else {
          insertAt = newTasks.length;
        }
      }

      newTasks.splice(insertAt, 0, updatedTask);
      return newTasks;
    });
  }, [setTasks]);

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Container>
        <Row>
          {statuses.map((status) => (
            <TaskCol
              key={status}
              status={status}
              tasks={tasks.filter((task) => task.status === status)}
              handleDelete={handleDelete}
            />
          ))}
        </Row>
      </Container>
    </DragDropContext>
  );
}

export default TaskBoard;
