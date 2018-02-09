import React from 'react'
import Alert from './Alert'
import { errors, errorMessage } from '../styles'

const Errors = (props) => (
	<div style={errors}>
		{ props.errors.error_nome ? <span style={errorMessage}>{Alert(14,14)}&nbsp;{props.errors.error_nome}</span> : null }
		{	props.errors.error_cpf ? <span style={errorMessage}>{Alert(14,14)}&nbsp;{props.errors.error_cpf}</span> : null }
		{	props.errors.error_cnpj ? <span style={errorMessage}>{Alert(14,14)}&nbsp;{props.errors.error_cnpj}</span> : null }
		{	props.errors.error_razaoSocial ? <span style={errorMessage}>{Alert(14,14)}&nbsp;{props.errors.error_razaoSocial}</span> : null }
		{	props.errors.error_endereco ? <span style={errorMessage}>{Alert(14,14)}&nbsp;{props.errors.error_endereco}</span> : null }
		{	props.errors.error_cep ? <span style={errorMessage}>{Alert(14,14)}&nbsp;{props.errors.error_cep}</span> : null }
		{	props.errors.error_bairro ? <span style={errorMessage}>{Alert(14,14)}&nbsp;{props.errors.error_bairro}</span> : null }
		{	props.errors.error_cidadeEstado ? <span style={errorMessage}>{Alert(14,14)}&nbsp;{props.errors.error_cidadeEstado}</span> : null }
		{	props.errors.error_fone ? <span style={errorMessage}>{Alert(14,14)}&nbsp;{props.errors.error_fone}</span> : null }
	</div>
)

export default Errors
