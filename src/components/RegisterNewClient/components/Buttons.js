import React, { Component } from 'react'
import { buttons, buttonData, buttonDataHover, buttonSubmit, buttonSubmitHover,
	buttonReset, buttonResetHover } from '../styles'

export default class Buttons extends Component {
	constructor(props) {
		super(props)
		this.state = {
			dataButton1isHovered: false,
			dataButton2isHovered: false,
			submitButtonisHovered: false,
			resetButtonisHovered: false
		}
	}
	dataButton1toggleHover = () => {
		this.setState( (prevState) => {
			return { dataButton1isHovered: !prevState.dataButton1isHovered}
		})
	}
	dataButton2toggleHover = () => {
		this.setState( (prevState) => {
			return { dataButton2isHovered: !prevState.dataButton2isHovered}
		})
	}
	submitButtontoggleHover = () => {
		this.setState( (prevState) => {
			return { submitButtonisHovered: !prevState.submitButtonisHovered}
		})
	}
	resetButtontoggleHover = () => {
		this.setState( (prevState) => {
			return { resetButtonisHovered: !prevState.resetButtonisHovered}
		})
	}
	render() {
		return (
			<div style={buttons}>
				<button
					style={this.state.dataButton1isHovered ? buttonDataHover : buttonData}
					onClick={this.props.fetchData}
					onMouseEnter={this.dataButton1toggleHover}
					onMouseLeave={this.dataButton1toggleHover}>
						Buscar dados
				</button>
				<button
					style={this.state.dataButton2isHovered ? buttonDataHover : buttonData}
					onClick={this.props.fetchIE}
					onMouseEnter={this.dataButton2toggleHover}
					onMouseLeave={this.dataButton2toggleHover}>
						Buscar IE
				</button>
				<button
					style={this.state.submitButtonisHovered ? buttonSubmitHover : buttonSubmit}
					onClick={this.props.submit}
					onMouseEnter={this.submitButtontoggleHover}
					onMouseLeave={this.submitButtontoggleHover}>
						Enviar
				</button>
				<button
					style={this.state.resetButtonisHovered ? buttonResetHover : buttonReset}
					onMouseEnter={this.resetButtontoggleHover}
					onMouseLeave={this.resetButtontoggleHover}>
						Limpar
				</button>
			</div>
		)
	}
}
