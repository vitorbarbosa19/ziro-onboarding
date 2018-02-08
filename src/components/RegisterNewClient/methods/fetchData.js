import axios from 'axios'

const fetchData = (that) => async () => {
	that.changeUiState('FETCH_DATA')
	try {
		const { data: {error}, data: {values} } = await axios.get(`${process.env.BACKEND_URL}/business-info?cnpj=${that.state.cnpj}`)
		if (!error) {
			that.setState({
				razaoSocial: values.nome,
				nomeFantasia: values.fantasia,
				endereco: values.logradouro,
				cep: values.cep.replace(/\W+/g,''),
				bairro: values.bairro,
				cidadeEstado: `${values.municipio} - ${values.uf}`,
				fone: values.telefone.replace(/\W+/g,''),
				email: values.email,
			})
			that.changeUiState('FETCH_DATA_OK')
		}
		else {
			console.log(`Error > ${error}\nDetails: ${[values]}`)
			that.changeUiState('FETCH_DATA_ERROR')
		}
	} catch (error) {
		console.log(error)
		that.changeUiState('FETCH_DATA_ERROR')
	}
}

export default fetchData
