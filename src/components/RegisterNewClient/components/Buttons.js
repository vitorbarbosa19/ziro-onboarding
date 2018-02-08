import React, { Component } from 'react'
import Spinner from './Spinner'
import { buttons, buttonData, buttonDataHover, buttonSubmit, buttonSubmitHover,
	buttonReset, buttonResetHover, spinner } from '../styles'

export default class Buttons extends Component {
	constructor(props) {
		super(props)
		this.state = {
			dataButton1isHovered: false,
			dataButton2isHovered: false,
			submitButtonIsHovered: false,
			resetButtonIsHovered: false
		}
	}
	dataButton1Enter = () => this.setState({ dataButton1isHovered: true })
	dataButton1Leave = () => this.setState({ dataButton1isHovered: false })
	dataButton2Enter = () => this.setState({ dataButton2isHovered: true })
	dataButton2Leave = () => this.setState({ dataButton2isHovered: false })
	submitButtonEnter = () => this.setState({ submitButtonIsHovered: true })
	submitButtonLeave = () => this.setState({ submitButtonIsHovered: false })
	resetButtonEnter = () => this.setState({ resetButtonIsHovered: true })
	resetButtonLeave = () => this.setState({ resetButtonIsHovered: false })
	buttonClicked = (handlerFromParent) => {
		this.setState({
			dataButton1isHovered: false,
			dataButton2isHovered: false,
			submitButtonIsHovered: false,
			resetButtonIsHovered: false
		})
		handlerFromParent()
	}
	render() {
		return (
			<div style={buttons}>
				{ this.props.uiState === 'fetching_data' ?
						<div style={spinner}>
							{Spinner(32,32)}
						</div>
					:
						<button
							style={this.state.dataButton1isHovered ? buttonDataHover : buttonData}
							onClick={this.buttonClicked.bind(null, this.props.fetchData)}
							onMouseEnter={this.dataButton1Enter}
							onMouseLeave={this.dataButton1Leave}>
								Buscar dados
						</button>
				}
				{ this.props.uiState === 'fetching_ie' ?
						<div style={spinner}>
							{Spinner(32,32)}
						</div>
					:
						<button
							style={this.state.dataButton2isHovered ? buttonDataHover : buttonData}
							onClick={this.buttonClicked.bind(null, this.props.fetchIE)}
							onMouseEnter={this.dataButton2Enter}
							onMouseLeave={this.dataButton2Leave}>
								Buscar IE
						</button>
				}
				<button
					style={this.state.submitButtonIsHovered ? buttonSubmitHover : buttonSubmit}
					onClick={this.buttonClicked.bind(null, this.props.submit)}
					onMouseEnter={this.submitButtonEnter}
					onMouseLeave={this.submitButtonLeave}>
						Enviar
				</button>
				<button
					style={this.state.resetButtonIsHovered ? buttonResetHover : buttonReset}
					onClick={this.buttonClicked.bind(null, this.props.reset)}
					onMouseEnter={this.resetButtonEnter}
					onMouseLeave={this.resetButtonLeave}>
						Limpar
				</button>
			</div>
		)
	}
}
