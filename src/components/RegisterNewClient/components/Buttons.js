import React from 'react'
import { buttons, buttonData, buttonSubmit, buttonReset } from '../styles'

const Buttons = (props) => (
	<div style={buttons}>
		<button style={buttonData} onClick={props.fetchData}>Buscar dados</button>
		<button style={buttonData} onClick={props.fetchIE}>Buscar IE</button>
		<button style={buttonSubmit} onClick={props.submit}>Enviar</button>
		<button style={buttonReset}>Limpar</button>
	</div>
)

export default Buttons
