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

1. ¿Qué diferencia existe entre una variable local y el estado de React?

Variable local vs. estado de React: una variable local común se crea de nuevo cada vez que se ejecuta el componente y no conserva por sí misma un valor entre renderizados. El estado de React sí persiste entre renderizados; al actualizarlo, React vuelve a renderizar el componente. Por ejemplo, TaskForm.tsx conserva el título escrito mediante estado.

2. ¿Qué valores devuelve useState?

Valores que devuelve useState: devuelve un par: el valor actual del estado y una función para actualizarlo. En const [title, setTitle] = useState(""), title es el valor y setTitle lo actualiza.

3. ¿Por qué useState se declara en el nivel superior del componente?

Por qué se declara arriba del componente: los Hooks deben llamarse en el nivel superior, no dentro de condiciones, ciclos ni funciones anidadas. Así React puede asociar cada Hook con su estado en el mismo orden en cada renderizado.

4. ¿Qué significa que un campo sea controlado?

Campo controlado: es un campo cuyo valor está ligado al estado de React. En TaskForm, value={title} muestra el estado y onChange lo actualiza con setTitle; así el estado y el campo permanecen sincronizados.

5. ¿Por qué handleSubmit utiliza preventDefault?

Por qué handleSubmit usa preventDefault: evita el envío HTML tradicional del formulario, que recargaría la página. La aplicación puede manejar el envío y crear la tarea sin perder el estado actual.

6. ¿Cómo comunica TaskForm una nueva tarea a App?

Cómo TaskForm comunica una tarea a App: recibe onAddTask como prop y, al enviar el formulario, llama onAddTask(normalizedTitle). La función fue definida en App.tsx, donde se crea y agrega la tarea.

7. ¿Por qué App funciona como fuente de verdad?

Por qué App es la fuente de verdad: mantiene la colección compartida tasks y se la pasa a los componentes que la necesitan. Así, el formulario, el resumen y la lista trabajan sobre los mismos datos, en lugar de mantener copias divergentes.

8. ¿Cómo se implementa Create sin utilizar push?

Cómo se implementa Create sin push: handleAddTask crea una nueva tarea y actualiza el estado con [newTask, ...currentTasks]. Esto produce un arreglo nuevo sin mutar el anterior; React puede detectar el cambio y renderizarlo.

9. ¿Cómo permite map actualizar una sola tarea?

Cómo map actualiza una sola tarea: recorre el arreglo y compara el id de cada tarea con el de la seleccionada. Si coincide, devuelve un objeto nuevo con los cambios; las demás tareas se devuelven sin modificar. TaskList también usa map para mostrar cada tarea como un TaskItem.

10. ¿Cómo utiliza filter la operación Delete?

Cómo filter realiza Delete: conserva las tareas cuyo id es distinto del que se quiere borrar. El resultado es un arreglo nuevo sin la tarea seleccionada.

11. ¿Por qué se emplea una función actualizadora en setTasks?

Por qué usar una función actualizadora en setTasks: formas como setTasks((currentTasks) => ...) calculan el nuevo estado a partir del estado más reciente. Eso evita depender de una copia potencialmente desactualizada, algo importante cuando React agrupa actualizaciones.

12. ¿Qué información conserva TaskItem como estado local?

Qué estado local conserva TaskItem: conserva solo información temporal de la interfaz de edición: isEditing (si está editando) y draftTitle (el título en borrador). La colección principal sigue en App; el componente comunica los cambios mediante sus funciones recibidas como props. Ver TaskItem.tsx.

13. ¿Por qué los cambios desaparecen al recargar la página?

Por qué los cambios desaparecen al recargar: las tareas se guardan en el estado en memoria de React. Al recargar, ese estado se inicializa otra vez desde los datos importados en tasks.ts; no se están guardando en almacenamiento persistente ni en un servidor.
