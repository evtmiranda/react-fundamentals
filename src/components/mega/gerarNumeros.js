const gerarNumeroNaoContido = (min, max, array) => {
	const numeroAleatorio = parseInt(Math.random() * (max - min) + min);

	return array.includes(numeroAleatorio)
		? gerarNumeroNaoContido(min, max, array)
		: numeroAleatorio;
};

export const gerarNumeros = (amountNumbers) => {
	return Array(amountNumbers)
		.fill(0)
		.reduce((nums) => {
			const novoNumero = gerarNumeroNaoContido(1, 60, nums);
			return [...nums, novoNumero];
		}, [])
		.sort((n1, n2) => n1 - n2);
};
