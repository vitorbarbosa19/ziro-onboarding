import React, { Component } from 'react'
import axios from 'axios'
import Form from './components/Form'
import Panel from './components/Panel'
import { grid, title, lojista, assessoria } from './styles'

export default class RegisterNewClient extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cnpj: ''
		}
	}
	render() {
		return (
			<div style={grid}>
				<label style={title('titleLojista')}>Lojista</label>
				<div style={lojista}>
					<Form />
				</div>
				<label style={title('titleAssessoria')}>Assessoria</label>
				<div style={assessoria}>
					<Panel />
				</div>
			</div>
		)
	}
}