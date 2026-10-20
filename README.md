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

1. ¿Qué función cumple la interfaz Task?
   Define la estructura que debe tener un objeto de tarea: id, title, status, createdAt y updatedAt. TypeScript la usa para comprobar que las tareas tengan esos campos y tipos. Está en task.interface.ts.

2. ¿Qué diferencia existe entre Task y TaskStatus?
   Task describe una tarea completa. TaskStatus limita el valor de status a dos opciones: "pending" o "completed".

3. ¿Qué significa declarar un arreglo como Task[]?
   Significa que es un arreglo cuyos elementos deben cumplir la estructura de Task. Por ejemplo, tasks: Task[] es una colección de tareas.

4. ¿Qué hace el método map?
   Recorre un arreglo y, por cada elemento, ejecuta una función que produce un nuevo valor. Devuelve un nuevo arreglo y no modifica el original.

5. ¿Qué resultado produce map dentro de TaskList?
   Convierte cada tarea de tasks en un componente TaskItem. El resultado es una lista de elementos visuales para renderizar; si no hay tareas, se muestra el estado vacío en vez de la lista. Ver TaskList.tsx.

6. ¿Para qué utiliza React la propiedad key?
   Para identificar cada elemento de una lista entre renderizados. Así React puede reconocer cuáles elementos cambiaron, se agregaron o se quitaron.

7. ¿Por qué se utiliza task.id y no el índice?
   Porque el identificador de la tarea es estable y único. El índice puede cambiar al insertar, quitar o reordenar tareas, lo que podría hacer que React asocie incorrectamente los elementos.

8. ¿Cómo se envía una tarea de TaskList a TaskItem?
   TaskList le pasa el objeto mediante la propiedad task: <TaskItem key={task.id} task={task} />. TaskItem lo recibe y lo usa para mostrar sus datos.

9. ¿Cómo se comunican App, TaskSummary y TaskList?
   App importa la colección tasks y la envía a ambos componentes mediante props: tasks={tasks}. TaskSummary calcula los conteos y TaskList presenta las tareas. En este flujo, la comunicación es de padre a hijo mediante props.

10. ¿Qué es el renderizado condicional?
    Es mostrar distintos elementos según una condición. En TaskList, si tasks.length === 0, se muestra el mensaje de lista vacía; si hay tareas, se muestra la lista. También TaskItem usa una condición para elegir la etiqueta del estado.

11. ¿Por qué el resumen se calcula a partir de la colección?
    Para que el total, las pendientes y las completadas reflejen los datos reales de tasks, en lugar de depender de números escritos por separado que podrían quedar desactualizados. TaskSummary cuenta las completadas con filter y obtiene las pendientes restándolas del total.

12. ¿Qué dificultad encontraste durante la refactorización y cómo la resolviste?
    No encontre nada dificil en particular.
