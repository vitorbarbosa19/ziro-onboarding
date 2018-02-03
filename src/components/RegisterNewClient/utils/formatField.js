const formatCpf = (cpf) => {
	return cpf.split('').map( (digit, index) => {
		if (index === 3 || index === 6)
			return `.${digit}`
		if (index === 9)
			return `-${digit}`
		return digit
	}).join('')
}

const formatCnpj = (cnpj) => {
	return cnpj.split('').map( (digit, index) => {
		if (index === 2 || index === 5)
			return `.${digit}`
		if (index === 8)
			return `/${digit}`
		if (index === 12)
			return `-${digit}`
		return digit
	}).join('')
}

const formatCep = (cep) => {
	return cep.split('').map( (digit, index) => {
		if (index === 2)
			return `.${digit}`
		if (index === 5)
			return `-${digit}`
		return digit
	}).join('')
}

const formatFone = (fone) => {
	if (fone.length > 2 && fone.length < 10)
		return `(${fone.substr(0, 2)})${fone.substr(2, fone.length)}`
	if (fone.length === 10)
		return `(${fone.substr(0, 2)})${fone.substr(2, 4)}-${fone.substr(6, fone.length)}`
	if (fone.length === 11)
		return `(${fone.substr(0, 2)})${fone.substr(2, 5)}-${fone.substr(7, fone.length)}`
	return fone
}

const formatField = (name, value) => {
	switch (name) {
		case 'cpf':
			return formatCpf(value)
		case 'cnpj':
			return formatCnpj(value)
		case 'cep':
			return formatCep(value)
		case 'fone':
			return formatFone(value)
		default:
			return value 
	}
}

export default formatField
