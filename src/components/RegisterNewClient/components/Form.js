import React from 'react'
import formFields from '../utils/formFields'
import formatFieldToStyle from '../utils/formatFieldToStyle'
import { form, field, label, input } from '../styles'

const Form = (props) => (
	<div style={form}>
		{
			formFields.map( (formField, index) => {
				return (
					<div style={field(formatFieldToStyle(formField))} key={index}>
						<label style={label}>{formField}</label>
						<input style={input} type='text' />
					</div>
				)	
			})
		}
	</div>
)

export default Form
