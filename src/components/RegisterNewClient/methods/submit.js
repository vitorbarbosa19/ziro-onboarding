import axios from 'axios'

const submit = (that) => async () => {
	const nomeIsValid = Boolean(that.state.nome)
	const cpfIsValid = that.state.cpf.length === 0 || that.state.cpf.length === 11
	const cnpjIsValid = that.state.cnpj.length === 14
	const razaoSocialIsValid = Boolean(that.state.razaoSocial)
	const enderecoIsValid = Boolean(that.state.endereco)
	const cepIsValid = Boolean(that.state.cep)
	const bairroIsValid = Boolean(that.state.bairro)
	const cidadeEstadoIsValid = Boolean(that.state.cidadeEstado)
	const foneIsValid = that.state.fone.length === 11 || that.state.fone.length === 10
	const emailIsValid = Boolean(that.state.email)

	if (nomeIsValid && cpfIsValid && cnpjIsValid && razaoSocialIsValid && enderecoIsValid &&
				cepIsValid && bairroIsValid && cidadeEstadoIsValid && foneIsValid && emailIsValid) {
		try {
			const result = await axios.get(`${process.env.BACKEND_URL}/submit?
				lojista=${that.state.nome}&
				rg=${that.state.rg}&
				cpf=${that.state.cpf}&
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
			if (result === 'SUCCESS')
				console.log(result)
			else
				console.log(result)
		} catch (error) {
			console.log(error)
		}	
	}
}

export default submit


/*
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
			-------------
			error_nome: '',
			error_rg: '',
			error_cpf: '',
			error_cnpj: '',
			error_inscricaoEstadual: '',
			error_razaoSocial: '',
			error_nomeFantasia: '',
			error_endereco: '',
			error_cep: '',
			error_bairro: '',
			error_cidadeEstado: '',
			error_fone: '',
			error_email: '',
			error_referencia: '',
*/
