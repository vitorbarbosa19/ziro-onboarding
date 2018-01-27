import React, { Component } from 'react'
import axios from 'axios'

export default class RegisterNewClient extends Component {
	constructor(props) {
		super(props)
		this.state = {
			cnpj: ''
		}
	}
	render() {
		return ( <div>New Client</div> )
	}
}