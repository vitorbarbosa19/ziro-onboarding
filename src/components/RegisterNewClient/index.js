import React, { Component } from 'react'
import axios from 'axios'
import { grid, lojista, assessoria, form, info, field, input } from './styles'

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
				<div style={lojista}>
					<div style={form}>
						{/* LOJISTA FIELD */}
						<div style={field('lojista')}>
							<label>Lojista</label>
							<input style={input} type='text' />
						</div>
						{/* RG FIELD */}
						<div style={field('rg')}>
							<label>Rg</label>
							<input style={input} type='text' />
						</div>
						{/* CPF FIELD */}
						<div style={field('cpf')}>
							<label>Cpf</label>
							<input style={input} type='text' />
						</div>
						{/* CNPJ FIELD */}
						<div style={field('cnpj')}>
							<label>Cnpj</label>
							<input style={input} type='text' />
						</div>
						{/* IE FIELD */}
						<div style={field('ie')}>
							<label>Ie</label>
							<input style={input} type='text' />
						</div>
						{/* RAZAO SOCIAL FIELD */}
						<div style={field('razaoSocial')}>
							<label>Razão Social</label>
							<input style={input} type='text' />
						</div>
						{/* NOME FANTASIA FIELD */}
						<div style={field('nomeFantasia')}>
							<label>Nome Fantasia</label>
							<input style={input} type='text' />
						</div>
						{/* ENDERECO FIELD */}
						<div style={field('endereco')}>
							<label>Endereço</label>
							<input style={input} type='text' />
						</div>
						{/* BAIRRO FIELD */}
						<div style={field('bairro')}>
							<label>Bairro</label>
							<input style={input} type='text' />
						</div>
						{/* CEP FIELD */}
						<div style={field('cep')}>
							<label>Cep</label>
							<input style={input} type='text' />
						</div>
						{/* CIDADE FIELD */}
						<div style={field('cidade')}>
							<label>Cidade</label>
							<input style={input} type='text' />
						</div>
						{/* ESTADO FIELD */}
						<div style={field('estado')}>
							<label>Estado</label>
							<input style={input} type='text' />
						</div>
						{/* FONE FIELD */}
						<div style={field('fone')}>
							<label>Fone</label>
							<input style={input} type='text' />
						</div>
						{/* EMAIL FIELD */}
						<div style={field('email')}>
							<label>Email</label>
							<input style={input} type='text' />
						</div>
						{/* REFERENCIA FIELD */}
						<div style={field('referencia')}>
							<label>Referência</label>
							<input style={input} type='text' />
						</div>
					</div>
				</div>
				<div style={assessoria}>
					<div style={info}>
						<p>Ziro</p>
					</div>
				</div>
			</div>
		)
	}
}