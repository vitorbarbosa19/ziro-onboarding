import React, { Component } from 'react'
import { initialState, transition } from './utils/stateMachine'
import updateField from './methods/updateField'
import fetchData from './methods/fetchData'
import fetchIE from './methods/fetchIE'
import submit from './methods/submit'
import Form from './components/Form'
import Panel from './components/Panel'
import Buttons from './components/Buttons'
import { container, grid, title, lojista, assessoria } from './styles'

export default class RegisterNewClient extends Component {
	constructor(props) {
		super(props)
		this.state = {
			/* UI INITIAL STATE */
			uiState: initialState,
			/* FIELDS */
			nome: '',
			rg:'',
			cpf: '',
			cnpj: '',
			inscricaoEstadual: '',
			razaoSocial: '',
			nomeFantasia: '',
			endereco: '',
			cep: '',
			bairro: '',
			cidadeEstado: '',
			fone: '',
			email: '',
			referencia: '',
			/* ERROR MESSAGES */
			error_nome: '',
			error_rg: '',
			error_cpf: '',
			error_cnpj: '',
			error_inscricaoEstadual: '',
			error_razaoSocial: '',
			error_nomeFantasia: '',
			error_endereco: '',
			error_cep: '',
			error_bairro: '',
			error_cidadeEstado: '',
			error_fone: '',
			error_email: '',
			error_referencia: '',
		}
	}
	/* METHODS */
	changeUiState = transition(this)
	updateField = updateField(this)
	fetchData = fetchData(this)
	fetchIE = fetchIE(this)
	submit = submit(this)
	/* ------- */
	render() {
		return (
			<div style={container}>
				<div style={grid}>
					<label style={title('titleLojista')}>Lojista</label>
					<div style={lojista}>
						<Form
							updateField={this.updateField}
							fields={this.state}
						/>
					</div>
					<label style={title('titleAssessoria')}>Assessoria</label>
					<div style={assessoria}>
						<Panel />
					</div>
				</div>
				<Buttons
					fetchData={this.fetchData}
					fetchIE={this.fetchIE}
					submit={this.submit}
					uiState={this.state.uiState}
				/>
			</div>
		)
	}
}