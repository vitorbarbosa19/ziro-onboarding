import validateInput from '../utils/validateInput'

const updateField = (that) => (fieldName) => (event) => {
	const userInput = validateInput(fieldName, event.target.value.replace(/\W+/g,''))
	that.setState({ [fieldName]: userInput })
}

export default updateField
