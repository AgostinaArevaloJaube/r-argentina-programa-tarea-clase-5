
// Paso 1: agaro el boton
const $btnCalcularSalarioMensual = document.querySelector(
	'#calcular-salario-mensual'
);
// El signo $ es para darnos cuenta de que es un elemento del DOM

// Paso 2: creo la función que calcula el salario anual
function calcularSalarioMensual(salarioAnual) {
	return salarioAnual / 12;
}

// Paso 3: creo el evento dónde consulo el input del usuario, ejecuto la función calcular y lo muestro en pantalla
$btnCalcularSalarioMensual.onclick = function (event) {
	event.preventDefault();
	const INPUT_USUARIO = document.querySelector('#salario-anual').value;
	const $mostrarSalarioMensual = document.querySelector('#salario-mensual');
	const salarioAnual = Number(INPUT_USUARIO);
	const salarioMensual = calcularSalarioMensual(salarioAnual);

	$mostrarSalarioMensual.value = salarioMensual;
};
