import axios from 'axios'

const notDuplicate = async (cnpj) => {
	const { data: { values: clientList } } = await axios.get(process.env.CLIENT_LIST)
	const allCnpjs = clientList.map( client => client[3])
	allCnpjs.shift()
	return !allCnpjs.includes(`${cnpj.substr(0,2)}.${cnpj.substr(2,3)}.${cnpj.substr(5,3)}/${cnpj.substr(8,4)}-${cnpj.substr(12,2)}`)
}

export default notDuplicate
