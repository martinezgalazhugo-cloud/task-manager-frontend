/**
 *Crear la página para rutas inexistentes
Propósito. Responder ante una dirección o recurso que no pueda localizarse.
El componente también se reutilizará cuando exista la ruta de detalle, pero el identificador no corresponda a
ninguna tarea. 
*/

import { Link } from "react-router";
interface NotFoundPageProps {
  title?: string;
  message?: string;
}
export function NotFoundPage({
  title = "Página no encontrada",
  message = "La dirección solicitada no existe.",
}: NotFoundPageProps) {
  return (
    <section className="panel not-found" aria-labelledby="not-found-title">
      <p className="section-heading__eyebrow">Error 404</p>
      <h2 id="not-found-title">{title}</h2>
      <p>{message}</p>
      <Link className="button-link" to="/">
        Regresar al inicio
      </Link>
    </section>
  );
}
