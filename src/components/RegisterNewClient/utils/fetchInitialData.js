import { get } from 'axios'

const fetchInitialData = async () => {
	try {
		const { data: { values } } = await get(process.env.REPRESENTATIVES)
		const representatives = values.map( value => value[0] ).slice(1).sort()
		return { representatives }
	} catch (error) {
		console.log(error)
	}
}

export default fetchInitialData