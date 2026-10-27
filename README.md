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

1. ¿Por qué las reglas de validación se colocaron en una utilidad?

Para reunir en un solo lugar las reglas del título —recortar espacios y comprobar que tenga entre 3 y 120 caracteres— y reutilizarlas al crear y editar tareas. Así ambas operaciones validan de la misma manera. task-validation.ts

2. ¿Qué significa el retorno string | null de validateTaskTitle?

La función devuelve un string con el mensaje si el título no es válido y null si pasa la validación. Quien la llama puede mostrar el mensaje o continuar con la operación, según el resultado.

3. ¿Qué función cumplen aria-invalid, aria-describedby y role alert?

aria-invalid indica a las tecnologías de asistencia si el campo tiene un error; aria-describedby vincula el campo con su texto de ayuda y, cuando existe, el error; y role="alert" hace que el mensaje se anuncie al aparecer. Mejoran la accesibilidad de la validación. TaskForm.tsx

4. ¿Por qué query, filter y sortBy son estados controlados?

Porque App conserva sus valores y los pasa a TaskFilters junto con las funciones para actualizarlos. De ese modo, los controles muestran el estado actual y la búsqueda, el filtro y el ordenamiento se calculan a partir de una fuente de verdad común. App.tsx · TaskFilters.tsx

5. ¿Por qué visibleTasks no debe almacenarse como estado independiente?

Es un resultado derivado de tasks, query, filter y sortBy. Calcularlo durante el render mantiene el resultado sincronizado y evita duplicar estado que podría quedar desactualizado. task-query.service.ts

6. ¿Cómo se normaliza una búsqueda?

Se quitan los espacios al principio y al final y se convierte la consulta a minúsculas con la configuración regional es-MX. Los títulos también se pasan a minúsculas antes de buscar la coincidencia. No se eliminan tildes, por lo que cancion y canción no necesariamente coinciden.

7. ¿Por qué se crea una copia antes de utilizar sort?

Porque sort modifica el arreglo sobre el que se ejecuta. La copia evita que el ordenamiento altere el arreglo filtrado —y, por tanto, la colección de origen— de forma accidental.

8. ¿Qué responsabilidad tiene task-query.service.ts?

Buscar tareas por título, aplicar el filtro de estado y ordenarlas según la opción seleccionada. Recibe los datos y los criterios, y devuelve los resultados sin encargarse de la interfaz ni modificar el estado de App.

9. ¿Por qué el resultado de JSON.parse se trata como unknown?

Porque los datos de localStorage pueden estar malformados o no tener la estructura esperada. unknown obliga a validarlos antes de usarlos como tareas, en vez de asumir que el contenido es seguro solo porque se pudo parsear. task-storage.services.ts

10. ¿Qué comprueba la función isTask?

Que el valor sea un objeto con id y title de tipo texto; un estado permitido (pending o completed); y fechas createdAt y updatedAt que sean textos parseables como fechas. Si alguna tarea no cumple, el arreglo guardado no se acepta como válido.

11. ¿Qué ventaja ofrece la inicialización diferida de useState?

useState(() => loadTasks(initialTasks)) carga las tareas al inicializar el estado, en lugar de volver a ejecutar esa lectura en cada render. Esto evita trabajo innecesario.

12. ¿Por qué localStorage se sincroniza mediante useEffect?

El efecto guarda las tareas cuando cambia tasks, separando la persistencia del cálculo del render. Así, las operaciones de la interfaz actualizan el estado y el efecto refleja ese cambio en el almacenamiento. No se persisten allí los criterios de búsqueda. App.tsx

13. ¿Por qué TaskSummary recibe tasks y TaskList recibe visibleTasks?

El resumen debe contar todas las tareas, incluidas las que no aparecen por la búsqueda o el filtro. La lista, en cambio, debe mostrar solo las que coinciden con los criterios actuales. TaskSummary.tsx · TaskList.tsx

14. ¿Qué información se pierde y cuál permanece al recargar?

Permanece la colección de tareas guardada en localStorage: sus identificadores, títulos, estados y fechas. Se pierden los estados temporales de la interfaz, como la búsqueda, los filtros, el orden seleccionado y los borradores o errores de los formularios; al iniciar, esos criterios vuelven a sus valores por defecto. Si no hay datos guardados o no pasan la validación, se cargan las tareas iniciales.

15. ¿Qué dificultad encontraste y cómo la resolviste?
    Al importar ciertas clases y funciones, daba error por no encontrar dicha clase o funcion, al final el problema real parecio ser un problema con la sintaxis, que finalmente solucione ajustandolo correctamente.

import de: "task.js" no "task.ts"
