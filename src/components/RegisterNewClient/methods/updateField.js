const updateField = (that) => (fieldName) => (event) => {
	that.setState({ [fieldName]: event.target.value })
}

export default updateField
