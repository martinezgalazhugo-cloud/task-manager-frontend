//Propósito. Definir un contrato común para todos los objetos de tarea.
export type TaskStatus = "pending" | "completed";
export interface Task {
  id: string;
  title: string;
  status: TaskStatus;
  createdAt: string;
  updatedAt: string;
}
