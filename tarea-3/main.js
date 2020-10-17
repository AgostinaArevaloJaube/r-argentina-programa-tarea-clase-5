// 1: consigo el boton y la caja de texto.
const $btnIngresar = document.querySelector('#ingresar');
const $resultado = document.querySelector('#resultado');
const $inputsUsuario = document.querySelectorAll('.inputClases');

const $inputHoras = document.querySelectorAll('.horas');
const $inputMinutos = document.querySelectorAll('.minutos');
const $inputSegundos = document.querySelectorAll('.segundos');

console.log($inputHoras);
console.log($inputMinutos);
console.log($inputSegundos);

function calcularTiempo(params) {
	let horasTotales = 0;
	let minutosTotales = 0;
	let segundosTotales = 0;

	for (i = 0; i < $inputHoras.length; i++) {
		horasTotales += Number($inputHoras[i].value);
	}
	console.log(horasTotales);

	for (i = 0; i < $inputMinutos.length; i++) {
		minutosTotales += Number($inputMinutos[i].value);
	}
	console.log(minutosTotales);

	for (i = 0; i < $inputSegundos.length; i++) {
		segundosTotales += Number($inputSegundos[i].value);

		
	}
	console.log(segundosTotales);

	$resultado.innerHTML = `En las primeras 5 clases Fabri se la jugó y habló ${horasTotales} horas, ${minutosTotales} minutos y ${segundosTotales} segundos.`;
}

$btnIngresar.onclick = function (event) {
	event.preventDefault();
	calcularTiempo();
};
