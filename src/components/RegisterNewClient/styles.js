export const container = {

}

export const grid = {
	maxWidth: '1200px',
	margin: '0 auto',
	padding: '30px',
	display: 'grid',
	gridTemplate: `
		'titleLojista titleAssessoria'
		'lojista assessoria'
		/ 49% 49%`,
	gridGap: '2%',
	alignItems: 'center'
}

export const gridMobile = {
	display: 'flex',
	flexDirection: 'column'
}

export const title = (titleName) => {
	return {
		gridArea: titleName,
		margin: '0 0 5px 3px',
		textTransform: 'uppercase',
		fontSize: '1.4rem',
		fontFamily: 'Poppins',
		fontWeight: '400',
		color: '#303e4d'
	}
}

export const lojista = {
	gridArea: 'lojista'
}

export const assessoria = {
	gridArea: 'assessoria'
}

export const form = {
	display: 'grid',
	gridTemplate: `
		'nome nome rg cpf'
		'cnpj cnpj inscricaoEstadual inscricaoEstadual'
		'razaoSocial razaoSocial nomeFantasia nomeFantasia'
		'endereco endereco endereco cep'
		'bairro bairro cidadeEstado cidadeEstado'
		'fone email email referencia'
		/ 25% 25% 25% 25%`
}

export const panel = {
	display: 'grid',
	gridTemplate: `
		'logo nome nome nome cnpj cnpj'
		'celular1 celular1 celular1 celular2 celular2 celular2'
		'fone fone fone email email email'
		'site site site blog blog blog'
		'endereco endereco endereco endereco endereco endereco'
		'cidadeEstado cidadeEstado cidadeEstado cep cep cep'
		/ 16.66% 16.66% 16.66% 16.66% 16.66% 16.66%`
}

export const field = (fieldName) => {
	return {
		gridArea: fieldName,
		display: 'flex',
		flexDirection: 'column',
		margin: '3px',
		padding: '6px 15px',
		border: '1px solid #f3f3f3',
		borderRadius: '3px'
	}
}

export const info = (infoName) => {
	return {
		gridArea: infoName,
		display: 'flex',
		flexDirection: 'column',
		margin: '2px',
		padding: '6px 15px',
		border: '1px solid #f3f3f3',
		borderRadius: '3px'
	}
}

export const label = {
	marginBottom: '5px',
	textTransform: 'uppercase',
	fontFamily: 'Poppins',
	fontWeight: '300',
	color: '#444'
}

export const input = {
	border: 'none',
	fontSize: '1.1rem',
	fontWeight: '600',
	fontFamily: 'Work Sans',
	textTransform: 'uppercase',
	color: '#303e4d'
}

export const span = {
	fontSize: '1.1rem',
	fontWeight: '600',
	fontFamily: 'Work Sans',
	textTransform: 'uppercase',
	color: '#303e4d'
}

export const logo = {
	gridArea: 'logo',
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',
	margin: '2px',
	padding: '6px 15px',
	border: '1px solid #f3f3f3',
	borderRadius: '3px'
}

export const buttons = {
	width: '80%',
	margin: '0 auto',
	display: 'flex',
	justifyContent: 'center'
}

export const buttonData = {
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	margin: '0 5px',
	width: '15rem',
	border: 'none',
	borderRadius: '20px',
	padding: '8px 15px',
	fontSize: '1.1rem',
	fontWeight: '700',
	fontFamily: 'Poppins',
	color: '#FFF',
	backgroundColor: 'rgba(48,62,77,0.8)'
}

export const buttonSubmit = {
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	margin: '0 5px',
	width: '15rem',
	border: 'none',
	borderRadius: '20px',
	padding: '8px 15px',
	fontSize: '1.1rem',
	fontWeight: '700',
	fontFamily: 'Poppins',
	color: '#FFF',
	backgroundColor: '#4F86C6'
}

export const	buttonReset = {
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	margin: '0 5px',
	width: '15rem',
	border: '1px solid rgba(48,62,77,0.8)',
	borderRadius: '20px',
	padding: '8px 15px',
	fontSize: '1.1rem',
	fontWeight: '700',
	fontFamily: 'Poppins',
	color: 'rgba(48,62,77,0.8)',
	backgroundColor: '#FFF'
}






































