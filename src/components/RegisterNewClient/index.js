import React, { Component } from 'react'
import axios from 'axios'
import { Image } from 'cloudinary-react'
import Form from './components/Form'
import { grid, title, lojista, assessoria, form, panel, info, field, label, input, span, logo } from './styles'

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
					<div style={form}>
						<Form />
					</div>
				</div>
				<label style={title('titleAssessoria')}>Assessoria</label>
				<div style={assessoria}>
					<div style={panel}>
						<div style={logo}>
						  <Image
					      cloudName='ziro'
					      width='35'
					      publicId='logo-round_kxn8sa'
					      version='1508000699'
					      format='png'
					      secure='true'
					    />
						</div>
						<div style={info('nome')}>
							<label style={label}>Nome</label>
							<span style={span}>Ziromoda Assessoria e Consultoria</span>
						</div>
						<div style={info('cnpj')}>
							<label style={label}>CNPJ</label>
							<span style={span}>13.275.070/0001-02</span>
						</div>
						<div style={info('endereco')}>
							<label style={label}>Endereço</label>
							<span style={span}>Rua Ribeiro de Lima, 453, Loja 173 - Bom Retiro</span>
						</div>
						<div style={info('cidadeEstado')}>
							<label style={label}>Cidade - Estado</label>
							<span style={span}>São Paulo - SP</span>
						</div>
						<div style={info('cep')}>
							<label style={label}>Cep</label>
							<span style={span}>01122-000</span>
						</div>
						<div style={info('fone')}>
							<label style={label}>Fone</label>
							<span style={span}>(11) 2737-0213</span>
						</div>
						<div style={info('celular1')}>
							<label style={label}>Celular 1</label>
							<span style={span}>(11) 99645-4922 [César]</span>
						</div>
						<div style={info('celular2')}>
							<label style={label}>Celular 2</label>
							<span style={span}>(11) 98292-1481 [Rúbia]</span>
						</div>
						<div style={info('email')}>
							<label style={label}>Email</label>
							<span style={span}>contato@ziromoda.com.br</span>
						</div>
						<div style={info('site')}>
							<label style={label}>Site</label>
							<span style={span}>ziromoda.com.br</span>
						</div>
						<div style={info('blog')}>
							<label style={label}>Blog</label>
							<span style={span}>ziromoda.com.br/ziroblog</span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}