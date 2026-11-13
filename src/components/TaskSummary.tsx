/**
 * TaskSummaryProps establece que el componente debe recibir tres números. Si se envía una cadena, TypeScript
informará un error antes de ejecutar la aplicación.

Obtener las cantidades a partir de la colección y eliminar valores escritos manualmente.

filter produce una nueva colección sin modificar el arreglo original. El total se obtiene mediante tasks.length y las
cantidades se actualizan cuando cambia la colección recibida.

 */
import type { Task } from "../models/task.interface";
interface TaskSummaryProps {
  tasks: Task[];
  total: number;
}
export function TaskSummary({ tasks, total }: TaskSummaryProps) {
  const pendingOnPage = tasks.filter(
    (task) => task.status === "pending",
  ).length;
  const completedOnPage = tasks.length - pendingOnPage;
  return (
    <section className="task-summary" aria-label="Resumen de tareas">
      <p>
        <strong>{total}</strong> resultado(s) en la consulta
      </p>
      <p>
        Página actual: {pendingOnPage} pendiente(s) y {completedOnPage}{" "}
        completada(s)
      </p>
    </section>
  );
}
