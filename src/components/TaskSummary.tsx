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
}
export function TaskSummary({ tasks }: TaskSummaryProps) {
  const completed = tasks.filter(({ status }) => status === "completed").length;
  const pending = tasks.length - completed;
  return (
    <section className="summary-grid" aria-label="Resumen de tareas">
      <article className="summary-card">
        <span>Total</span>
        <strong>{tasks.length}</strong>
      </article>
      <article className="summary-card">
        <span>Pendientes</span>
        <strong>{pending}</strong>
      </article>
      <article className="summary-card">
        <span>Completadas</span>
        <strong>{completed}</strong>
      </article>
    </section>
  );
}
