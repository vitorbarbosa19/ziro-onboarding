import axios from 'axios'

const fetchIE = (that) => async () => {
	try {
		const { data: {error}, data: {values} } = await axios.get(`${process.env.BACKEND_URL}/inscricao-estadual?cnpj=${that.state.cnpj}`)
		if (!error)
			that.setState({ inscricaoEstadual: values })
		else
			console.log(`Error > ${error}\nDetails: ${[values]}`)
	} catch (error) {
		console.log(error)
	}
}

export default fetchIE
