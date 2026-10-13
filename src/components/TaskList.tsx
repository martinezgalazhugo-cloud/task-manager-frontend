/**
 * Propósito. Agrupar tres tareas y reutilizar TaskItem con propiedades diferentes.
Las tareas se escribirán manualmente. Los arreglos, map y key se incorporarán en la siguiente actividad.

map recorre el arreglo, recibe una tarea en cada iteración, genera TaskItem, asigna task.id como key y envía el
objeto mediante la propiedad task.
No utilices key={index} ni key={Math.random()}. task.id es una clave estable y forma parte del modelo.

Recorrer la colección y generar un TaskItem por cada objeto.
 */

import type { Task } from "../models/task.interface";
import { TaskItem } from "./TaskItem";
interface TaskListProps {
  tasks: Task[];
}
export function TaskList({ tasks }: TaskListProps) {
  const resultLabel = tasks.length === 1 ? "1 tarea" : `${tasks.length} tareas`;
  return (
    <section className="panel" aria-labelledby="task-list-title">
      <div className="section-heading">
        <div>
          <p className="section-heading__eyebrow">Actividades</p>
          <h2 id="task-list-title">Tareas registradas</h2>
        </div>
        <span className="result-count">{resultLabel}</span>
      </div>
      {tasks.length === 0 ? (
        <div className="empty-state" role="status">
          <h3>No hay tareas registradas</h3>
          <p>
            La colección está vacía. Las nuevas tareas aparecerán en esta
            sección.
          </p>
        </div>
      ) : (
        <div className="task-list" role="list">
          {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </div>
      )}
    </section>
  );
}
