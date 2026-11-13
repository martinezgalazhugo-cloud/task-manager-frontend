/**
 * Propósito. Utilizar App como coordinador de la estructura general.
 *
 * Utilizar App como coordinador de la colección y los componentes.
 * 
 * Si realizaste el desafío opcional de la actividad 5 y creaste AppFooter, conserva ese componente en lugar de
regresar el pie de página a App.tsx.

Coordinar estado, criterios, operaciones CRUD y persistencia.
visibleTasks se calcula durante el renderizado y no se guarda como estado. TaskSummary recibe tasks para
representar el total real, mientras TaskList recibe únicamente los resultados visibles.
*/
import { Route, Routes } from "react-router";
import { AppLayout } from "./layouts/AppLayout";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { TaskDetailPage } from "./pages/TaskDetailPage";
import { TasksPage } from "./pages/TasksPage";
export default function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="tasks" element={<TasksPage />} />
        <Route path="tasks/:taskId" element={<TaskDetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
