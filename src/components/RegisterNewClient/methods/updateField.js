import validateInput from '../utils/validateInput'

const updateField = (that) => (fieldName) => (event) => {
	const userInput = validateInput(fieldName, event.target.value)
	that.setState({ [fieldName]: userInput })
}

export default updateField
