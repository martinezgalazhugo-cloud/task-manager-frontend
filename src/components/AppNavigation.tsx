/**
 * Paso 7 Crear la navegación principal
Propósito. Permitir el cambio entre Inicio y Tareas e identificar la opción activa.
 * La propiedad end evita que Inicio permanezca activo en todas las direcciones. Tareas no utiliza end, por lo que
también se mantiene activa dentro de /tasks/:taskId.
 */

import { NavLink } from "react-router";
export function AppNavigation() {
  return (
    <nav className="app-navigation" aria-label="Navegación principal">
      <ul className="app-navigation__list">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              [
                "app-navigation__link",
                isActive ? "app-navigation__link--active" : "",
              ]
                .filter(Boolean)
                .join(" ")
            }
          >
            Inicio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tasks"
            className={({ isActive }) =>
              [
                "app-navigation__link",
                isActive ? "app-navigation__link--active" : "",
              ]
                .filter(Boolean)
                .join(" ")
            }
          >
            Tareas
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
