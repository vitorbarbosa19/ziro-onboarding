const validateCpf = (cpf) => {
	if (cpf.length > 11)
		return cpf.substr(0, 11)
	return cpf
}

const validateInput = (name, value) => {
	switch (name) {
		case 'cpf':
			return validateCpf(value)
		default:
			return value
	}
}

export default validateInput
