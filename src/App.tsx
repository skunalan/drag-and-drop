import "./App.css";
import { nanoid } from "nanoid";
import { TaskParams } from "./types/task";
import { Button, Container, Modal } from "react-bootstrap";
import { useEffect, useState } from "react";
import TaskBoard from "./components/TaskBoard";

function App() {
  const [tasks, setTasks] = useState<TaskParams[]>(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [showModal, setShowModal] = useState(false);
  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTask: Omit<TaskParams, "id">) => {
    const task = { ...newTask, id: nanoid() };
    setTasks((previous) => [...previous, task]);
  };

  return (
    <>
      <div className="app-container">
        <Container className="mt-5 py-5 rounded-4 shadow app-content">
          <div className="text-center mb-5">
            <h1 className="display-4 fw-bold text-primary mb-3">TASK MANAGEMENT</h1>
            <h3>
              Easily manage your tasks and staff assignments. 
            </h3>

            <ul className="list-unstyled">
              <li>Create task and assignment cards.</li>
              <li>Status management with drag and drop feature.</li>
            </ul>
              
            <div className="my-4 d-flex align-items-center justify-content-center">
              <Button
                variant="outline-primary"
                className="btn-lg mt-5"
                onClick={handleShow}
              >
                Add New Task
              </Button>
            </div>
          </div>

          {/*Modal Section*/}
          <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Add New Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <form
                id="task-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const title = (
                    form.elements.namedItem("title") as HTMLInputElement
                  ).value;
                  const description = (
                    form.elements.namedItem("description") as HTMLInputElement
                  ).value;
                  const assignee = (
                    form.elements.namedItem("assignee") as HTMLInputElement
                  ).value;

                  if (title && description && assignee) {
                    handleAddTask({
                      title,
                      description,
                      status: "Not Started",
                      assignee,
                    });
                    form.reset();
                    handleClose();
                  }
                }}
              >
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="form-control"
                  required
                />
                <input
                  type="text"
                  name="description"
                  placeholder="Description"
                  className="form-control mt-2"
                  required
                />
                <input
                  type="text"
                  name="assignee"
                  placeholder="Assignee"
                  className="form-control mt-2"
                  required
                />
              </form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button type="submit" variant="primary" form="task-form">
                Add Task
              </Button>
            </Modal.Footer>
          </Modal>
          <TaskBoard tasks={tasks} setTasks={setTasks} />
        </Container>
      </div>
    </>
  );
}

export default App;
