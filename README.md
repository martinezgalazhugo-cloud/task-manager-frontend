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

1. ¿Qué problema resuelve React al construir una interfaz?

Permite construir interfaces dinámicas con piezas reutilizables y actualizar lo que se muestra cuando cambian los datos, sin tener que manipular manualmente cada elemento del DOM.

2. ¿Qué es un componente?

Es una pieza independiente y reutilizable de la interfaz. En este proyecto, por ejemplo, TaskItem representa una tarea y TaskHeader (aquí llamado AppHeader) representa el encabezado. AppHeader.tsx · TaskItem.tsx

3. ¿Por qué los componentes comienzan con mayúscula?

Es la convención de React para distinguir los componentes de las etiquetas HTML. Por ejemplo, <TaskItem /> se interpreta como un componente, mientras que <article> es una etiqueta HTML.

4. ¿Qué diferencia existe entre HTML y TSX?

HTML describe la estructura de una página. TSX permite escribir una estructura similar dentro de código TypeScript y combinarla con expresiones y lógica. React transforma ese TSX para que el navegador pueda mostrar la interfaz.

5. ¿Para qué se utiliza className?

Para asignar clases CSS a los elementos. En JSX/TSX se usa className en lugar de class, que es una palabra reservada de JavaScript.

6. ¿Qué son las propiedades o props?

Son valores que un componente recibe de su componente padre para mostrar contenido o adaptar su comportamiento. Por ejemplo, TaskItem recibe title y status. TaskItem.tsx

7. ¿Cómo ayuda TypeScript a validar las propiedades?
8. ¿Cuál es la responsabilidad de App.tsx?
9. ¿Por qué la interfaz se dividió en varios componentes?
10. ¿Por qué los botones todavía están deshabilitados?
11. ¿Qué componente consideras más reutilizable y por qué?
12. ¿Qué dificultad encontraste y cómo la resolviste?
