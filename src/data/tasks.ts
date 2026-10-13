//Separar los datos demostrativos de la representación visual.

/**
 * 
Uso de import type
import type indica que Task solamente se utiliza durante la comprobación de tipos y no representa un valor
necesario durante la ejecución.
Validación del arreglo
La declaración export const tasks: Task[] obliga a que todos los objetos cumplan con la interfaz. Elimina
temporalmente id de uno de los objetos, observa el error de TypeScript y después restaura el objeto.
 * 
 */

import type { Task } from "../models/task.interface";
export const tasks: Task[] = [
  {
    id: "task-001",
    title: "Configurar el proyecto React",
    status: "completed",
    createdAt: "2026-09-21T16:00:00.000Z",
    updatedAt: "2026-09-21T18:30:00.000Z",
  },
  {
    id: "task-002",
    title: "Diseñar la estructura por componentes",
    status: "completed",
    createdAt: "2026-09-22T16:00:00.000Z",
    updatedAt: "2026-09-23T17:15:00.000Z",
  },
  {
    id: "task-003",
    title: "Modelar las tareas con TypeScript",
    status: "pending",
    createdAt: "2026-09-24T16:00:00.000Z",
    updatedAt: "2026-09-24T16:00:00.000Z",
  },
  {
    id: "task-004",
    title: "Renderizar la colección mediante map",
    status: "pending",
    createdAt: "2026-09-25T16:00:00.000Z",
    updatedAt: "2026-09-25T16:00:00.000Z",
  },
  {
    id: "task-005",
    title: "Documentar el avance del proyecto",
    status: "pending",
    createdAt: "2026-09-26T16:00:00.000Z",
    updatedAt: "2026-09-26T16:00:00.000Z",
  },
];
