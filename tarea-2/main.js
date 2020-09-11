// 1: consigo el boton y la caja de texto.
const $btnIngresar = document.querySelector('#ingresar');
const $resultado = document.querySelector('#resultado');

// 2. agrego la funcion al clickear el boton
$btnIngresar.onclick = function () {
	// 3. consigo los valores de los campos que necesito
	const nombreClase = document.querySelector('#nombre-clase').value;
	const horaClase = document.querySelector('#hora-clase').value;
	const minutosClase = document.querySelector('#minutos-clase').value;
	const segundosClase = document.querySelector('#segundos-clase').value;

	// 4. muestro los datos en la caja de texto.
	$resultado.innerHTML = `En la clase ${nombreClase}, Fabri se la jugó y habló ${horaClase}:${horaClase}:${segundosClase}.`;
}