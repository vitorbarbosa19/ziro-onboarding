import axios from 'axios'
import notDuplicate from '../utils/notDuplicate'
import encodeParameter from '../utils/encodeParameter'

const submit = (that) => async () => {
	that.setState({ submit_message: '', error_data: '', error_ie: '' })
	const nomeIsValid = Boolean(that.state.nome)
	const cpfIsValid = that.state.cpf.length === 0 || that.state.cpf.length === 11
	const cnpjIsValid = that.state.cnpj.length === 14
	const cnpjIsNotDuplicate = cnpjIsValid && await notDuplicate(that.state.cnpj)
	const razaoSocialIsValid = Boolean(that.state.razaoSocial)
	const enderecoIsValid = Boolean(that.state.endereco)
	const cepIsValid = Boolean(that.state.cep)
	const bairroIsValid = Boolean(that.state.bairro)
	const cidadeEstadoIsValid = that.state.cidadeEstado.includes(' - ')
	const foneIsValid = that.state.fone.length === 11 || that.state.fone.length === 10
	const assessorIsValid = Boolean(that.state.representatives.filter(name => name.toLowerCase() === that.state.assessor.toLowerCase()).pop())
	const afiliadoIsValid = Boolean(that.state.hunters.filter(name => name.toLowerCase() === that.state.afiliado.toLowerCase()).pop())
	if (nomeIsValid && cpfIsValid && cnpjIsValid && razaoSocialIsValid && enderecoIsValid && cepIsValid
			&& bairroIsValid && cidadeEstadoIsValid && foneIsValid && cnpjIsNotDuplicate && assessorIsValid && afiliadoIsValid) {
		that.changeUiState('SUBMIT')
		try {
			const result = await axios.get(`${process.env.BACKEND_URL}/submit?
				lojista=${that.state.nome.toUpperCase().trim()}&
				rg=${that.state.rg}&
				cpf=${that.state.cpf}&
				cnpj=${that.state.cnpj}&
				ie=${that.state.inscricaoEstadual}&
				razaoSocial=${encodeParameter(that.state.razaoSocial.toUpperCase().trim())}&
				nomeFantasia=${encodeParameter(that.state.nomeFantasia.toUpperCase().trim())}&
				endereco=${that.state.endereco.toUpperCase().trim()}&
				bairro=${that.state.bairro.toUpperCase().trim()}&
				cep=${that.state.cep}&
				cidade=${that.state.cidadeEstado.split('-')[0].trim()}&
				estado=${that.state.cidadeEstado.split('-')[1].trim()}&
				fone=${that.state.fone}&
				email=${that.state.email}&
				cacador=${that.state.afiliado.toUpperCase().trim()}&
				assessor=${that.state.assessor.toUpperCase().trim()}`)
			if (result.data === 'SUCCESS') {
				console.log(result.data)
				that.changeUiState('SUBMIT_OK')
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
					afiliado: '',
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
					error_afiliado: '',
					error_assessor: '',
					submit_message: 'Dados enviados com sucesso!'
				})
				that.changeUiState('RESET')
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
	cnpjIsNotDuplicate ?
		that.setState({ error_cnpj_duplicate: '' })
	:
		that.setState({ error_cnpj_duplicate: 'CNPJ já cadastrado' })
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
	assessorIsValid ?
		that.setState({ error_assessor: '' })
	:
		that.setState({ error_assessor: 'Assessor não existe' })
	afiliadoIsValid ?
		that.setState({ error_afiliado: '' })
	:
		that.setState({ error_afiliado: 'Afiliado não existe' })
}

export default submit
