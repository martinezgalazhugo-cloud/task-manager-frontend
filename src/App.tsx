/**
 * Propósito. Utilizar App como coordinador de la estructura general.
 *
 * Utilizar App como coordinador de la colección y los componentes.
 * 
 * Si realizaste el desafío opcional de la actividad 5 y creaste AppFooter, conserva ese componente en lugar de
regresar el pie de página a App.tsx.
 */

import { AppHeader } from "./components/AppHeader";
import { TaskFilters } from "./components/TaskFilters";
import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { TaskSummary } from "./components/TaskSummary";
import { tasks } from "./data/tasks";
export default function App() {
  return (
    <div className="app-shell">
      <AppHeader />
      <main className="app-main">
        <TaskForm />
        <TaskFilters />
        <TaskSummary tasks={tasks} />
        <TaskList tasks={tasks} />
      </main>
      <footer className="app-footer">
        <div className="app-footer__content">
          <p>Administrador de tareas - Frontend EC2</p>
        </div>
      </footer>
    </div>
  );
}
