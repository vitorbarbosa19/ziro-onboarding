import React from 'react'
import formatFieldToStyle from '../utils/formatFieldToStyle'
import formatFieldToLabel from '../utils/formatFieldToLabel'
import { field, label, input } from '../styles'

const formFields = [
	'Nome', 'Rg', 'Cpf', 'Cnpj', 'Inscrição Estadual', 'Razão Social', 'Nome Fantasia',
	'Endereço', 'Cep', 'Bairro', 'Cidade - Estado', 'Fone', 'Email', 'Referência'
]

const Form = (props) => {
	return formFields.map( (formField, index) => {
		return (
			<div style={field(formatFieldToStyle(formField))} key={index}>
				<label style={label}>{formField}</label>
				<input style={input} type='text' />
			</div>
		)	
	})
}

export default Form
