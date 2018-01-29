import React, { Component } from 'react'
import axios from 'axios'
import updateField from './methods/updateField'
import Form from './components/Form'
import Panel from './components/Panel'
import { grid, title, lojista, assessoria } from './styles'

export default class RegisterNewClient extends Component {
	constructor(props) {
		super(props)
		this.state = {
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
	render() {
		return (
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
		)
	}
}