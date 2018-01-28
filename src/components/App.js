import React from 'react'
import Webfont from 'webfontloader'
import RegisterNewClient from './RegisterNewClient/index'

Webfont.load({ google: { families: [
	'Karla: 300,400,700',
	'Poppins: 300,400,700'
]}})

const App = () => ( <RegisterNewClient /> )

export default App