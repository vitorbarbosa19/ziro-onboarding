import axios from 'axios'
import generateAddress from '../utils/generateAddress'

const fetchData = (that) => async () => {
	if (that.state.cnpj.length === 14) {
		that.changeUiState('FETCH_DATA')
		that.setState({ error_cnpj: '', error_cnpj_duplicate: '', submit_message: '' })
		try {
			const { data: {error}, data: {values} } = await axios.get(`${process.env.BACKEND_URL}/business-info?cnpj=${that.state.cnpj}`)
			console.log(values)
			if (!error) {
				that.setState({
					razaoSocial: values.nome,
					nomeFantasia: values.fantasia,
					endereco: generateAddress(values.logradouro, values.numero, values.complemento),
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
				that.setState({ error_data: 'CNPJ não encontrado' })
			}
		} catch (error) {
			console.log(error)
			that.changeUiState('FETCH_DATA_ERROR')
			that.setState({ error_data: 'Ocorreu um erro no sistema. Tente novamente mais tarde' })
		}
	} else {
		that.setState({ error_cnpj: 'CNPJ: Deve ter 14 dígitos', error_cnpj_duplicate: '', submit_message: '' })
	}
}

export default fetchData
