export const grid = {
	display: 'grid',
	gridTemplate: `'lojista assessoria' auto / 1fr 1fr`,
	alignItems: 'center'
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
		'lojista lojista'
		'rg cpf'
		'cnpj ie'
		'razaoSocial razaoSocial'
		'nomeFantasia nomeFantasia'
		'endereco endereco'
		'bairro cep'
		'cidade estado'
		'fone fone'
		'email email'
		'referencia referencia' / 1fr 1fr`
}

export const info = {

}

export const field = (gridName) => {
	return {
		gridArea: gridName,
		display: 'flex',
		flexDirection: 'column',
		border: '1px solid #f3f3f3'
	}
}

export const input = {
	border: 'none'
}