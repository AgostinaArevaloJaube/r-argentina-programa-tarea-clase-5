# Tareas Clase 5
## [r/argentina programa](https://argentinaprograma.com/) es un curso para aprender JavaScript desde 0, gratis y en español. Dictado por Fabricio Sodano.

[Live Demo](https://r-argentinaprograma-clase5.netlify.app/)

-   TAREA 1
Crear un formulario donde un usuario pueda ingresar su salario anual cuando el usuario haga click en el botón "calcular", mostrar el salario mensual, en una caja de texto deshabilitada. --> `<input type="text" disabled id="salario-mensual"/>`

-   TAREA 2

En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js)
Creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario también vamos a crear un `<h1>` que diga Bienvenido! vas a crear un botón de acción que una vez que lo apretás, va a mostrar toda la información junta en un campo de texto Y va a cambiar el `<h1>` para decir "Bienvenido, `nombreDeUsuario`"!

```html
// Ejemplo form:

<form id="entrada-bar" onsubmit="return false;">
	<input type="text" placeholder="Ingresá tu nombre" id="nombre-usuario" />
	<input type="number" placeholder="Ingresá tu edad" id="edad-usuario" />
	<input type="submit" value="Ingresar" id="ingresar" />
</form>

<div id="resultado">Hola</div>
```

-   TAREA 3

En otro archivo distinto.
Por cada clase de r/argentina programa existente, vamos a pedir:
horas, minutos y segundos de cada video. Ej. Si un video dura
2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
cada dato. Al apretar el botón "Calcular tiempo total", debe mostrar en un
`<strong>` pre-creado el tiempo total de los videos.

-   TAREA 4

En otro archivo distinto.
Crear una lista de `<ol>` y `<li>` que contengan sólo números.
Convertir esos números a un array y:

1. Calcular el promedio y mostrarlo en un `<em>` pre-creado con el texto "El promedio es..."
2. Obtener el número más pequeño y mostrarlo en un `<em>` pre-creado con el texto "El número más pequeño es..."
3. Obtener el número más grande y mostrarlo en un `<em>` pre-creado con el texto "El número más grande es..."
4. Obtener el número que más se repite y mostrarlo en un `<em>` pre-creado con el texto "El número más frecuente es..."
