import React from 'react'
import { Image } from 'cloudinary-react'
import panelFields from '../utils/panelFields'
import toCamelCaseNoAccent from '../utils/toCamelCaseNoAccent'
import { panel, logo, info, label, span } from '../styles'

const Panel = (props) => (
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
	  {
			panelFields.map( (panelField, index) => {
				return (
					<div style={info(toCamelCaseNoAccent(panelField.label))} key={index}>
						<label style={label}>{panelField.label}</label>
						<span style={span}>{panelField.value}</span>
					</div>
				)
			})
		}
	</div>
)

export default Panel
