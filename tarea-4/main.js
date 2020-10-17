//-- 1. obtengo los numeros de la lista
const $arrNumerosDesdeLista = document.querySelectorAll('.number');

//-- 2. creo un array vacío para ir completando
let arrNumeros = [];

//-- 3. recorro el array del querySelector, convierto a numero y pusheo al array nuevo.

function llenarArray(arrNumerosDesdeLista) {
	for (let i = 0; i < arrNumerosDesdeLista.length; i++) {
		arrNumeros.push(Number($arrNumerosDesdeLista[i].innerText));
	}
}

llenarArray($arrNumerosDesdeLista);

//-- 4. Promedio

function promedio(array) {
	let suma = 0;

	for (let i = 0; i < array.length; i++) {
		suma += array[i];
	}

	return suma / array.length;
}

//-- 5. Numero más chico.

// Otra forma de resolverlo: const numeroMasChico = Math.min(...arrNumeros);

function numeroMasChico(arrNumeros) {
	let numeroMasChico = arrNumeros[0];

	for (let i = 0; i < arrNumeros.length; i++) {
		if (numeroMasChico >= arrNumeros[i]) {
			numeroMasChico = arrNumeros[i];
		}
	}

	return numeroMasChico;
}

//-- 6. Numero más grande.

// Otra forma de resolverlo: const numeroMasGrande = Math.max(...arrNumeros);

function numeroMasGrande(arrNumeros) {
	let numeroMasGrande = arrNumeros[0];

	for (let i = 0; i < arrNumeros.length; i++) {
		if (numeroMasGrande <= arrNumeros[i]) {
			numeroMasGrande = arrNumeros[i];
		}
	}

	return numeroMasGrande;
}

//-- 7. El que más se repite

function masRepetido(arrNumeros) {
	let numeroMasRepetido;
	let numeroActual;

	for (let i = 0; i < arrNumeros.length; i++) {
		numeroActual = arrNumeros[i];

		for (let j = 0; j < arrNumeros.length; j++) {
			if (numeroActual === arrNumeros[i]) {
				numeroMasRepetido = arrNumeros[i];
			}
		}
	}

	return numeroMasRepetido;
}

// -- 8. Eventitos

const $btn = document.querySelector('#btn');
const $promedio = document.querySelector('#promedio');
const $numeroMasChico = document.querySelector('#numero-mas-chico');
const $numeroMasGrande = document.querySelector('#numero-mas-grande');
const $numeroMasFrecuente = document.querySelector('#numero-mas-frecuente');

$btn.onclick = function () {
	$promedio.innerText = `El promedio es ${promedio(arrNumeros)}`;
	$numeroMasChico.innerText = `El numero más chico es ${numeroMasChico(
		arrNumeros
	)}`;
	$numeroMasGrande.innerText = `El numero más grande es ${numeroMasGrande(
		arrNumeros
	)}`;
	$numeroMasFrecuente.innerText = `El numero más fracuente es ${masRepetido(
		arrNumeros
	)}`;
};
