// 1: consigo el boton, la caja de texto y el titulo.
const $btnIngresar = document.querySelector('#ingresar');
const $resultado = document.querySelector('#resultado');
const $titulo = document.querySelector('#titulo');

// 2. agrego la funcion al clickear el boton
$btnIngresar.onclick = function () {
	// 3. consigo nombre y edad
	const nombreUsuario = document.querySelector('#nombre-usuario').value;
	const edadUsuario = document.querySelector('#edad-usuario').value;

	// 4. muestro los datos en la caja de texto y reemplazo el titulo.
	$resultado.innerHTML = ` Tu nombre es ${nombreUsuario} y tenes ${edadUsuario}`;
	$titulo.innerHTML = `Bienvenida ${nombreUsuario}`;
}