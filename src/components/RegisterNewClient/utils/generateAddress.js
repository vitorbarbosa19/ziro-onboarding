const generateAddress = (logradouro, numero, complemento) => {
	if (complemento)
		return `${logradouro.replace(/\(|\)|,|\./g,'').replace(/\;|\-/g,' ')}, ${numero.replace(/\//g,'')}, ${complemento.replace(/\(|\)|,|\./g,'').replace(/\;|\-/g,' ')}`
	return `${logradouro.replace(/\(|\)|,|\./g,'').replace(/\;|\-/g,' ')}, ${numero.replace(/\//g,'')}`
}

export default generateAddress