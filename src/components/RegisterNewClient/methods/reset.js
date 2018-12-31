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
		assessor: '',
		error_nome: '',
		error_cpf: '',
		error_cnpj: '',
		error_cnpj_duplicate: '',
		error_razaoSocial: '',
		error_endereco: '',
		error_cep: '',
		error_bairro: '',
		error_cidadeEstado: '',
		error_fone: '',
		error_data: '',
		error_ie: '',
		error_assessor: '',
		submit_message: ''
	})
	that.changeUiState('RESET')
}

export default reset
