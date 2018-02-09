import React from 'react'
import formFields from '../utils/formFields'
import formatField from '../utils/formatField'
import toCamelCaseNoAccent from '../utils/toCamelCaseNoAccent'
import Alert from './Alert'
import { form, field, label, input } from '../styles'

const Form = (props) => (
	<div style={form}>
		{
			formFields.map( (formField, index) => {
				const fieldName = toCamelCaseNoAccent(formField)
				return (
					<div style={field(fieldName)} key={index}>
						<label style={label}>
							{props.fields[`error_${fieldName}`] && Alert(13,13)}&nbsp;{formField}
						</label>
						<input
							style={input}
							value={formatField(fieldName, props.fields[fieldName])}
							onChange={props.updateField(fieldName)}
							type='text'
						/>
					</div>
				)	
			})
		}
	</div>
)

export default Form
