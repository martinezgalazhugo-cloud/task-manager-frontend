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

import { useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import { tasks as initialTasks } from "./data/tasks";
import { AppLayout } from "./layouts/AppLayout";
import type { Task } from "./models/task.interface";
import type { TaskFilter, TaskSort } from "./models/task-view.types";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { TaskDetailPage } from "./pages/TaskDetailPage";
import { TasksPage } from "./pages/TasksPage";
import { getVisibleTasks } from "./services/task-query.service";
import { loadTasks, saveTasks } from "./services/task-storage.services";
export default function App() {
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks(initialTasks));
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<TaskFilter>("all");
  const [sortBy, setSortBy] = useState<TaskSort>("updated-desc");
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);
  const visibleTasks = getVisibleTasks(tasks, {
    query,
    filter,
    sortBy,
  });
  const hasActiveCriteria = query.trim() !== "" || filter !== "all";
  const emptyMessage = hasActiveCriteria
    ? "No hay tareas que coincidan con la búsqueda y el filtro."
    : "Utiliza el formulario para registrar una nueva actividad.";
  function handleAddTask(title: string): void {
    const now = new Date().toISOString();
    const newTask: Task = {
      id: crypto.randomUUID(),
      title,
      status: "pending",
      createdAt: now,
      updatedAt: now,
    };
    setTasks((currentTasks) => [newTask, ...currentTasks]);
  }
  function handleToggleStatus(id: string): void {
    const now = new Date().toISOString();
    setTasks((currentTasks) =>
      currentTasks.map((task) => {
        if (task.id !== id) {
          return task;
        }
        return {
          ...task,
          status: task.status === "pending" ? "completed" : "pending",
          updatedAt: now,
        };
      }),
    );
  }
  function handleEditTask(id: string, title: string): void {
    const now = new Date().toISOString();
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              title,
              updatedAt: now,
            }
          : task,
      ),
    );
  }
  function handleDeleteTask(id: string): boolean {
    const selectedTask = tasks.find((task) => task.id === id);
    if (!selectedTask) {
      return false;
    }
    const shouldDelete = window.confirm(
      `¿Eliminar la tarea "${selectedTask.title}"?`,
    );
    if (!shouldDelete) {
      return false;
    }
    setTasks((currentTasks) => currentTasks.filter((task) => task.id !== id));
    return true;
  }
  function handleClearCriteria(): void {
    setQuery("");
    setFilter("all");
    setSortBy("updated-desc");
  }
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage tasks={tasks} />} />
        <Route
          path="tasks"
          element={
            <TasksPage
              tasks={tasks}
              visibleTasks={visibleTasks}
              query={query}
              filter={filter}
              sortBy={sortBy}
              emptyMessage={emptyMessage}
              onAddTask={handleAddTask}
              onQueryChange={setQuery}
              onFilterChange={setFilter}
              onSortChange={setSortBy}
              onClearCriteria={handleClearCriteria}
              onToggleStatus={handleToggleStatus}
              onEditTask={handleEditTask}
              onDeleteTask={handleDeleteTask}
            />
          }
        />
        <Route
          path="tasks/:taskId"
          element={
            <TaskDetailPage tasks={tasks} onDeleteTask={handleDeleteTask} />
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
