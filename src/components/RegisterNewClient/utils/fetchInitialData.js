import { get } from 'axios'

const fetchInitialData = async () => {
	try {
		const { data: { values: values_rep } } = await get(process.env.REPRESENTATIVES)
		const { data: { values: values_hun } } = await get(process.env.HUNTERS)
		const representatives = values_rep.map( value => value[0] ).slice(1).sort()
		const hunters = values_hun.map( value => value[0] ).slice(1).sort()
		return { representatives, hunters }
	} catch (error) {
		console.log(error)
	}
}

export default fetchInitialData