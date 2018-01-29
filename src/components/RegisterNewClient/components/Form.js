import React from 'react'
import formFields from '../utils/formFields'
import formatField from '../utils/formatField'
import { form, field, label, input } from '../styles'

const Form = (props) => (
	<div style={form}>
		{
			formFields.map( (formField, index) => {
				return (
					<div style={field(formatField(formField))} key={index}>
						<label style={label}>{formField}</label>
						<input
							style={input}
							value={props.fields[formatField(formField)]}
							onChange={props.updateField(formatField(formField))}
							type='text'
						/>
					</div>
				)	
			})
		}
	</div>
)

export default Form
