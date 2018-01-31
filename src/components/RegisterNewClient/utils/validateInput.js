const validateCpf = (cpf) => {
	if (cpf.length > 11)
		return cpf.substr(0, 11)
	return cpf
}

const validateCnpj = (cnpj) => {
	if (cnpj.length > 14)
		return cnpj.substr(0, 14)
	return cnpj
}

const validateCep = (cep) => {
	if (cep.length > 8)
		return cep.substr(0, 8)
	return cep
}

const validateFone = (fone) => {
	if (fone.length > 11)
		return fone.substr(0, 11)
	return fone
}

const validateInput = (name, value) => {
	switch (name) {
		case 'cpf':
			return validateCpf(value.replace(/\W+/g,''))
		case 'cnpj':
			return validateCnpj(value.replace(/\W+/g,''))
		case 'cep':
			return validateCep(value.replace(/\W+/g,''))
		case 'fone':
			return validateFone(value.replace(/\W+/g,''))
		default:
			return value
	}
}

export default validateInput
