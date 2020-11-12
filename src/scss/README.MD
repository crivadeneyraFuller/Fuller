# Estructura de Estilos Web - Derevo

El equipo de **Frontend de Derevo** ha realizado a continuación una serie de estándares para la realización de código Sass/CSS. Se aconseja seguirlo al pie de la letra para tener un mayor control de calidad, buenas prácticas y mejores controles de mantenimiento.

## Recomendaciones

Para una mejor adaptación, se aconseja utilizar las siguientes herramientas.

- **_ditor de código:** VS Code.
    _ **Plugins:**
    _ EditorConfig for VS Code.
    _ scss-lint (\*Obligatorio para los desarrolladores de estilos contar con Ruby instalado y la gema **scss_lint**.\*).

## Framework

**Bootstrap 4:** Debido a la facilidad para aprenderlo, disminuye el tiempo en el desarrollo. Se puede reutilizar su código y es altamente responsivo debido a sus clases de ayuda, lo cual hace que tenga cierta ventaja sobre su competencia. Para más información se puede consultar la [documentación oficial](http://getbootstrap.com).

## Terminología

Para el desarrollo del código Sass/CSS, se utiliza de base las reglas que maneja _Airbnb_.

### Formato

- Uso de _2 espacios_ como parte de la identación.
- Usar metodología _[BEM](http://getbem.com/)_ a la hora de desarrollar clases, no usar estilo _CamelCase_.
- Nunca usar ID como selectores, únicamente clases.
- En caso de que varios selectores tengan mismas propiedades, darles su propia línea al selector.
- Poner un espacio después de la llave de apertura `{`.
- En las propiedades, después del carácter `:` poner un espacio, no antes.
- Llave de cierre `}` va en una nueva línea.
- Dar salto de línea entre las declaraciones de reglas.
- Ordenarlos selectores alfabéticamente.
- Toda declaración de selectores tiene que ir en inglés.
- Usar variables CSS/Sass.

**Incorrecto** 👎

```CSS
.derevo{
  color:#fff;
  background:#000; }
.no, .nope, .nah {
  // ...
}
#noIds {
  // ...
}
```

**Correcto** 👌

```CSS
.derevo {
  background: var(--c-black);
  color: var(--c-white);
}

.no,
.nope,
.nah {
  // More beatiful code...
}
```

### Comentarios

- Preferentemente usar `//` (en Sass) para bloques de comentarios.

- En caso de comentarios para funciones o mixins, deben ser `///` y comentar su funcionalidad.

```SCSS
/// Convert px to rem
/// @author  Alex Andrei
/// @param  {Number}  $px - Get value with pixels
/// @return  {Number} - Return px to rem
@function  rem($px) {
  @return ($px  /  16px) *  1rem;
}
```

## Arquitectura

### SMACSS

- 01_settings
  - **_fonts:** Se agregan fuentes externas a Google Fonts.
  - **_variables:** Se agregan variables de CSS o Sass que pueden ser colores, rutas, fuentes, tamaños.

- 02_base
  - **_base:** Estilos de etiquetas.
  - **_function:** Funcionalidad que regresa un valor.
  - **_mixins:** Funciones para ser incrustadas.

- 03_layouts
  - **_layouts:** Estilos de estructura.

  > Nota: Se pueden agregar más archivos dependiendo del diseño. Ejemplo: *Header, Footer, Sidebar*.

- 04_modules
  - **_buttons:** Estilos de botones.
  - **_deltas:** Estilos de deltas.
  - **_tooltips:** Estilos de tooltips.

  > Nota: Se pueden agregar todos los módulos necesarios que lleguen a necesitar. Ejemplo: *_cards, _modals, _tags*.

- 05_states
  - **_states:** Estilos de estado, únicamente en esta sección es valido agregar **!important**.

## Sass

### Sintaxis

- Utilizar la sintaxis `.scss`, nunca la sintaxis `.sass` original.
- Ordenar el CSS regular y las declaraciones con `@include` van después.
