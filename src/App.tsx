import "./App.css";
import { nanoid } from "nanoid";
import { TaskParams } from "./types/task";
import { Container } from "react-bootstrap";
import { useState } from "react";
import TaskBoard from "./components/TaskBoard";

const taskData = [
  {
    title: "Login sayfası tasarımı",
    description: "Kullanıcıların giriş yapabileceği bir arayüz oluştur.",
    status: "In Progress",
    assignee: "Ahmet",
  },
  {
    title: "API entegrasyonu",
    description: "JSON Placeholder API ile veri alışverişi sağla.",
    status: "Not Started",
    assignee: "Mehmet",
  },
  {
    title: "Profil sayfası geliştirme",
    description:
      "Kullanıcının bilgilerini düzenleyebileceği bir sayfa oluştur.",
    status: "Completed",
    assignee: "Zeynep",
  },
  {
    title: "Dark mode desteği",
    description: "Uygulamaya karanlık mod seçeneği ekle.",
    status: "In Progress",
    assignee: "Elif",
  },
  {
    title: "Hata loglama sistemi",
    description:
      "Sistem hatalarını takip edebileceğimiz bir log mekanizması geliştir.",
    status: "Not Started",
    assignee: "Burak",
  },
  {
    title: "Performans optimizasyonu",
    description: "Uygulamanın hızını artırmak için gereksiz renderları azalt.",
    status: "Not Started",
    assignee: "Deniz",
  },
  {
    title: "Bildirim sistemi",
    description: "Kullanıcılara bildirim gönderebileceğimiz bir yapı geliştir.",
    status: "Completed",
    assignee: "Cem",
  },
  {
    title: "Yetkilendirme mekanizması",
    description:
      "Rol tabanlı yetkilendirme ekleyerek kullanıcı haklarını belirle.",
    status: "Not Started",
    assignee: "Merve",
  },
  {
    title: "Unit test ekleme",
    description: "Kodun doğruluğunu test etmek için birim testler yaz.",
    status: "In Progress",
    assignee: "Kerem",
  },
  {
    title: "Depolama optimizasyonu",
    description:
      "Veri tabanı sorgularını optimize ederek hız ve verimlilik sağla.",
    status: "Not Started",
    assignee: "Ece",
  },
];

const initialTasks: TaskParams[] = [];

taskData.forEach((task) => {
  initialTasks.push({
    ...task,
    id: nanoid(),
  });
});

function App() {
const [tasks, setTasks] = useState(initialTasks)

  return (
    <>
      <Container>
        <h1 className="text-center mt-5">Task Management</h1>
        <TaskBoard tasks={tasks} setTasks={setTasks}/>
      </Container>
    </>
  );
}

export default App;
