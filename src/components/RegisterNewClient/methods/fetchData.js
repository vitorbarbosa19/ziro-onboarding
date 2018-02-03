import axios from 'axios'

const fetchData = (that) => async () => {
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
		}
		else
			console.log(`Error > ${error}\nDetails: ${[values]}`)
	} catch (error) {
		console.log(error)
	}
}

export default fetchData
