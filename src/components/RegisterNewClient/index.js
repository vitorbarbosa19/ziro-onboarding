import React, { Component } from 'react'
import updateField from './methods/updateField'
import fetchData from './methods/fetchData'
import fetchIE from './methods/fetchIE'
import Form from './components/Form'
import Panel from './components/Panel'
import Buttons from './components/Buttons'
import { container, grid, title, lojista, assessoria } from './styles'

export default class RegisterNewClient extends Component {
	constructor(props) {
		super(props)
		this.state = {
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
			referencia: ''
		}
	}
	updateField = updateField(this)
	fetchData = fetchData(this)
	fetchIE = fetchIE(this)
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
				/>
			</div>
		)
	}
}