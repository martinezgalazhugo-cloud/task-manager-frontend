# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.

1. ¿Qué es una aplicación de página única?
   Es una aplicación que carga una página inicial y cambia el contenido desde el cliente, sin volver a cargar todo el documento en cada navegación. En este proyecto, React Router muestra distintas páginas dentro de la aplicación.

2. ¿Qué responsabilidad tiene BrowserRouter?
   Proporciona el contexto de enrutamiento y conecta las rutas con la URL del navegador y el historial de navegación. Envuelve a App en main.tsx.

3. ¿Cuál es la diferencia entre Routes y Route?
   Routes agrupa y selecciona la ruta que coincide con la URL; cada Route define una ruta y el elemento que se debe mostrar. Se configuran en App.tsx.

4. ¿Qué es una ruta índice?
   Es la ruta predeterminada de una ruta padre: muestra su contenido cuando la URL coincide exactamente con la del padre. Aquí, la ruta índice muestra HomePage en /.

5. ¿Qué beneficio ofrece un layout?
   Permite compartir elementos —como encabezado, navegación y pie de página— entre varias páginas, sin repetirlos en cada una. Ese marco común está en AppLayout.tsx.

6. ¿Qué función cumple Outlet?
   Es el espacio donde React Router renderiza la página hija que corresponde a la ruta activa; en este caso, aparece dentro del layout.

7. ¿Qué diferencia existe entre Link y NavLink?
   Ambos permiten navegar sin recargar la página. NavLink también permite saber si su destino está activo, por ejemplo, para resaltar la opción actual del menú, como en AppNavigation.tsx.

8. ¿Por qué no se utilizan enlaces a para navegar internamente?
   Porque un <a> tradicional vuelve a solicitar la página y puede recargar toda la aplicación. Link y NavLink cambian la ruta mediante React Router, preservando la navegación de la SPA.

9. ¿Qué representa :taskId?
   Es un segmento dinámico de la ruta /tasks/:taskId. Representa el identificador de la tarea que se quiere consultar.

10. ¿Cómo se recupera un parámetro dinámico?
    Con el hook useParams. En TaskDetailPage.tsx se recupera taskId y se usa para buscar la tarea.

11. ¿Cuándo debe utilizarse useNavigate?
    Cuando la navegación debe ocurrir como resultado de una acción o lógica, no solo al pulsar un enlace. Por ejemplo, después de eliminar una tarea, el detalle redirige a /tasks.

12. ¿Qué función cumple la ruta \*?
    Es una ruta comodín que coincide con rutas no definidas y permite mostrar una página de “no encontrado”. En este proyecto la maneja NotFoundPage.

13. ¿Por qué el estado continúa administrado por App?
    Porque las tareas y sus operaciones son compartidas por varias páginas: inicio, listado y detalle. Mantener el estado en App permite que esas vistas reciban los datos y acciones necesarios sin duplicar la fuente de verdad.

14. ¿Por qué localStorage permanece en esta actividad?
    Una dificultad importante fue manejar el caso en que el identificador de la URL no corresponde a una tarea existente —por ejemplo, si fue eliminada—. Se resuelve buscando la tarea con taskId y mostrando una vista de “no encontrada” si no aparece; después de eliminarla desde el detalle, la navegación vuelve al listado.
