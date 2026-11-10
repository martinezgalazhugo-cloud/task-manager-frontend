//Extraer el formato de fechas, Reutilizar el mismo formato dentro de la lista y del detalle.

export function formatTaskDate(value: string): string {
  return new Intl.DateTimeFormat("es-MX", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
}
