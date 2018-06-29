import axios from 'axios'

const fetchIE = (that) => async () => {
	if (that.state.cnpj.length === 14) {
		that.changeUiState('FETCH_IE')
		that.setState({ error_cnpj: '', submit_message: '' })
		try {
			const { data: {error}, data: {values} } = await axios.get(`${process.env.BACKEND_URL}/inscricao-estadual?cnpj=${that.state.cnpj}`)
			if (!error && values !== 'Nenhum estabelecimento encontrado.') {
				that.setState({ inscricaoEstadual: values })
				that.changeUiState('FETCH_IE_OK')
			}
			else {
				console.log(`Error > ${error}\nDetails: ${[values]}`)
				that.changeUiState('FETCH_IE_ERROR')
				that.setState({ error_ie: 'IE não encontrado' })
			}
		} catch (error) {
			console.log(error)
			that.changeUiState('FETCH_IE_ERROR')
			that.setState({ error_ie: 'Ocorreu um erro no sistema. Tente novamente mais tarde' })
		}
	} else {
		that.setState({ error_cnpj: 'CNPJ: Deve ter 14 dígitos', submit_message: '' })
	}
}

export default fetchIE
