# COMO IMPLEMENTARLO 📋

## El componente se manda a llamar de la siguiente manera:

 ``` JS
get-table(objId='' height='' app='' numObj='')
 ```

### PROPIEDADES:
* **objId:** Id del objeto (string).
* **app:** Nombre de la aplicación (string).
* **numObj:** Identificador para poder pintar un objeto dos neves en la misma pagina (string).


#### En el archivo 'getTable.pug', en el cuerpo tabla, se debe hacer un ng-repeat.

``` JS
  tbody
    tr(ng-repeat='(key, value) in $ctrl.data')

    // Para acceder al valor actual y pintarlo en la tabla, en la etiqueta td se llama de la siguiente manera:
    td {{value}}

    // El nombreValue se asigna en el componente dependiendo el número de filas que se necesite.
```
