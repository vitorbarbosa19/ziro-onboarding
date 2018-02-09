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
		error_nome: '',
		error_cpf: '',
		error_cnpj: '',
		error_razaoSocial: '',
		error_endereco: '',
		error_cep: '',
		error_bairro: '',
		error_cidadeEstado: '',
		error_fone: '',
		submit_message: ''
	})
}

export default reset
