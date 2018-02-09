import axios from 'axios'

const submit = (that) => async () => {
	that.setState({ submit_message: '' })
	const nomeIsValid = Boolean(that.state.nome)
	const cpfIsValid = that.state.cpf.length === 0 || that.state.cpf.length === 11
	const cnpjIsValid = that.state.cnpj.length === 14
	const razaoSocialIsValid = Boolean(that.state.razaoSocial)
	const enderecoIsValid = Boolean(that.state.endereco)
	const cepIsValid = Boolean(that.state.cep)
	const bairroIsValid = Boolean(that.state.bairro)
	const cidadeEstadoIsValid = that.state.cidadeEstado.includes(' - ')
	const foneIsValid = that.state.fone.length === 11 || that.state.fone.length === 10
	if (nomeIsValid && cpfIsValid && cnpjIsValid && razaoSocialIsValid && enderecoIsValid &&
				cepIsValid && bairroIsValid && cidadeEstadoIsValid && foneIsValid) {
		that.changeUiState('SUBMIT')
		try {
			const result = await axios.get(`${process.env.BACKEND_URL}/submit?
				lojista=${that.state.nome}&
				rg=${that.state.rg}&
				cpf=${that.state.cpf}&
				cnpj=${that.state.cnpj}&
				ie=${that.state.inscricaoEstadual}&
				razaoSocial=${that.state.razaoSocial}&
				nomeFantasia=${that.state.nomeFantasia}&
				endereco=${that.state.endereco}&
				bairro=${that.state.bairro}&
				cep=${that.state.cep}&
				cidade=${that.state.cidadeEstado.split('-')[0].trim()}&
				estado=${that.state.cidadeEstado.split('-')[1].trim()}&
				fone=${that.state.fone}&
				email=${that.state.email}&
				referencia=${that.state.referencia}`)
			if (result.data === 'SUCCESS') {
				console.log(result.data)
				that.changeUiState('SUBMIT_OK')
				that.setState({ submit_message: 'Dados enviados com sucesso!' })
			} else {
				console.log(result)
				that.changeUiState('SUBMIT_ERROR')
				that.setState({ submit_message: 'Erro no envio de dados. Tente novamente mais tarde.' })
			}
		} catch (error) {
			console.log(error)
			that.changeUiState('SUBMIT_ERROR')
			that.setState({ submit_message: 'Erro no envio de dados. Tente novamente mais tarde.' })
		}	
	}
	nomeIsValid ?
		that.setState({ error_nome: '' })
	:
		that.setState({ error_nome: 'Nome: Preencha esse campo' })
	cpfIsValid ?
		that.setState({ error_cpf: '' })
	:
		that.setState({ error_cpf: 'CPF: Deve ter 11 dígitos' })
	cnpjIsValid ?
		that.setState({ error_cnpj: '' })
	:
		that.setState({ error_cnpj: 'CNPJ: Deve ter 14 dígitos' })
	razaoSocialIsValid ?
		that.setState({ error_razaoSocial: '' })
	:
		that.setState({ error_razaoSocial: 'Razão Social: Preencha esse campo' })
	enderecoIsValid ?
		that.setState({ error_endereco: '' })
	:
		that.setState({ error_endereco: 'Endereço: Preencha esse campo' })
	cepIsValid ?
		that.setState({ error_cep: '' })
	:
		that.setState({ error_cep: 'CEP: Preencha esse campo' })
	bairroIsValid ?
		that.setState({ error_bairro: '' })
	:
		that.setState({ error_bairro: 'Bairro: Preencha esse campo' })
	cidadeEstadoIsValid ?
		that.setState({ error_cidadeEstado: '' })
	:
		that.setState({ error_cidadeEstado: 'Cidade - Estado: Preencha e coloque "-" entre a cidade e o estado' })
	foneIsValid ?
		that.setState({ error_fone: '' })
	:
		that.setState({ error_fone: 'Fone: Deve ter 10 ou 11 dígitos' })
}

export default submit
