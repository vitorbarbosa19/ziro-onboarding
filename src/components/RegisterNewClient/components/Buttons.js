import React from 'react'
import { buttons, buttonData, buttonSubmit, buttonReset } from '../styles'

const Buttons = (props) => (
	<div style={buttons}>
		<button style={buttonData} onClick={props.fetchData}>Buscar dados</button>
		<button style={buttonData}>Buscar IE</button>
		<button style={buttonSubmit}>Enviar</button>
		<button style={buttonReset}>Limpar</button>
	</div>
)

export default Buttons