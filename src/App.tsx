import "./App.css";
import { nanoid } from "nanoid";
import { TaskParams } from "./types/task";
import { Container } from "react-bootstrap";

const taskDATA = [
  {
    title: "Login sayfası tasarımı",
    description: "Kullanıcıların giriş yapabileceği bir arayüz oluştur.",
    status: "In Progress",
    assignee: "Ahmet",
  },
  {
    title: "API entegrasyonu",
    description: "JSON Placeholder API ile veri alışverişi sağla.",
    status: "Pending",
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
    status: "Pending",
    assignee: "Burak",
  },
  {
    title: "Performans optimizasyonu",
    description: "Uygulamanın hızını artırmak için gereksiz renderları azalt.",
    status: "In Review",
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
    status: "Pending",
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
    status: "In Review",
    assignee: "Ece",
  },
];

const initialTasks: TaskParams[] = [];

taskDATA.forEach((task) => {
  initialTasks.push({
    ...task,
    id: nanoid(),
  });
});

function App() {
  return (
    <>
      <Container>
        <h1 className="text-center mt-5">Task Management</h1>
      </Container>
    </>
  );
}

export default App;
