/**
 * Reutilizar una sola regla al registrar y editar tareas.
La función no modifica el valor recibido. Su retorno string | null obliga a comprobar si existe un mensaje antes de
continuar con la operación.
*/

export const TASK_TITLE_MAX_LENGTH = 120;
export function validateTaskTitle(value: string): string | null {
  const title = value.trim();
  if (!title) {
    return "Escribe el título de la tarea.";
  }
  if (title.length < 3) {
    return "El título debe tener al menos 3 caracteres.";
  }
  if (title.length > TASK_TITLE_MAX_LENGTH) {
    return `El título no puede superar ${TASK_TITLE_MAX_LENGTH} caracteres.`;
  }
  return null;
}
