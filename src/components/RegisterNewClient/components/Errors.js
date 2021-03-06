import React from 'react'
import Alert from './Alert'
import { errors, errorMessage, submitMessage } from '../styles'

const Errors = (props) => (
	<div style={errors}>
		{props.errors.submit_message && <span style={submitMessage}>{props.errors.submit_message}</span>}
		{props.errors.error_data && <span style={errorMessage}>{Alert(14,14)}&nbsp;{props.errors.error_data}</span>}
		{props.errors.error_ie && <span style={errorMessage}>{Alert(14,14)}&nbsp;{props.errors.error_ie}</span>}
		{props.errors.error_nome && <span style={errorMessage}>{Alert(14,14)}&nbsp;{props.errors.error_nome}</span>}
		{props.errors.error_cpf && <span style={errorMessage}>{Alert(14,14)}&nbsp;{props.errors.error_cpf}</span>}
		{props.errors.error_cnpj && <span style={errorMessage}>{Alert(14,14)}&nbsp;{props.errors.error_cnpj}</span>}
		{props.errors.error_cnpj_duplicate && <span style={errorMessage}>{Alert(14,14)}&nbsp;{props.errors.error_cnpj_duplicate}</span>}
		{props.errors.error_razaoSocial && <span style={errorMessage}>{Alert(14,14)}&nbsp;{props.errors.error_razaoSocial}</span>}
		{props.errors.error_endereco && <span style={errorMessage}>{Alert(14,14)}&nbsp;{props.errors.error_endereco}</span>}
		{props.errors.error_cep && <span style={errorMessage}>{Alert(14,14)}&nbsp;{props.errors.error_cep}</span>}
		{props.errors.error_bairro && <span style={errorMessage}>{Alert(14,14)}&nbsp;{props.errors.error_bairro}</span>}
		{props.errors.error_cidadeEstado && <span style={errorMessage}>{Alert(14,14)}&nbsp;{props.errors.error_cidadeEstado}</span>}
		{props.errors.error_fone && <span style={errorMessage}>{Alert(14,14)}&nbsp;{props.errors.error_fone}</span>}
		{props.errors.error_afiliado && <span style={errorMessage}>{Alert(14,14)}&nbsp;{props.errors.error_afiliado}</span>}
		{props.errors.error_assessor && <span style={errorMessage}>{Alert(14,14)}&nbsp;{props.errors.error_assessor}</span>}
	</div>
)

export default Errors
