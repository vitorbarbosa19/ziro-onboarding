import axios from 'axios'

const fetchIE = (that) => async () => {
	that.changeUiState('FETCH_IE')
	try {
		const { data: {error}, data: {values} } = await axios.get(`${process.env.BACKEND_URL}/inscricao-estadual?cnpj=${that.state.cnpj}`)
		if (!error) {
			that.setState({ inscricaoEstadual: values })
			that.changeUiState('FETCH_IE_OK')
		}
		else {
			console.log(`Error > ${error}\nDetails: ${[values]}`)
			that.changeUiState('FETCH_IE_ERROR')
		}
	} catch (error) {
		console.log(error)
		that.changeUiState('FETCH_IE_ERROR')
	}
}

export default fetchIE
