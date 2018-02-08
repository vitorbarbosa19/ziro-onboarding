const reset = (that) => () => {
	that.setState({
		nome: '',
		rg:'',
		cpf: '',
		cnpj: '',
		inscricaoEstadual: '',
		razaoSocial: '',
		nomeFantasia: '',
		endereco: '',
		cep: '',
		bairro: '',
		cidadeEstado: '',
		fone: '',
		email: '',
		referencia: '',
	})
}

export default reset
