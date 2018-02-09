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
		error_data: '',
		error_ie: '',
		submit_message: ''
	})
	that.changeUiState('RESET')
}

export default reset
