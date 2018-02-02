import axios from 'axios'

const fetchData = (that) => async () => {
	const data = await axios.get(`${process.env.BACKEND_URL}?cnpj=${that.state.cnpj}`)
	console.log(data)
}

export default fetchData
