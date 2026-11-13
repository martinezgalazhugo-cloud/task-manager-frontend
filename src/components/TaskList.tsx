/**
 * Propósito. Agrupar tres tareas y reutilizar TaskItem con propiedades diferentes.
Las tareas se escribirán manualmente. Los arreglos, map y key se incorporarán en la siguiente actividad.

map recorre el arreglo, recibe una tarea en cada iteración, genera TaskItem, asigna task.id como key y envía el
objeto mediante la propiedad task.
No utilices key={index} ni key={Math.random()}. task.id es una clave estable y forma parte del modelo.

Recorrer la colección y generar un TaskItem por cada objeto.

Transmitir las funciones de App a cada TaskItem.

TaskList no modifica el arreglo. Su responsabilidad es renderizar la colección y reenviar las acciones
correspondientes a cada elemento.

Distinguir una colección sin tareas de una consulta sin coincidencias.
Actualizar TaskList
Alinear el tipo de eliminación con la respuesta booleana utilizada por el detalle.
 */
import type { Task } from "../models/task.interface";
import { TaskItem } from "./TaskItem";
interface TaskListProps {
  tasks: Task[];
  onToggleStatus: (task: Task) => Promise<boolean>;
  onEditTask: (task: Task, title: string) => Promise<boolean>;
  onDeleteTask: (task: Task) => Promise<boolean>;
}
export function TaskList({
  tasks,
  onToggleStatus,
  onEditTask,
  onDeleteTask,
}: TaskListProps) {
  if (tasks.length === 0) {
    return null;
  }
  return (
    <div className="task-list" role="list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleStatus={onToggleStatus}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
}
