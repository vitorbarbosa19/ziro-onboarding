/* Syntax -> machine = { state: { action: state } } */
/* The machine is an object whose keys are possible states */
/* The states are also objects whose keys are actions and values are next states */

const machine = {
	mounting: { MOUNTING_OK: 'idle', MOUNTING_ERROR: 'errorMounting' },
	errorMounting: { },
	idle: { FETCH_DATA: 'fetching_data', FETCH_IE: 'fetching_ie', SUBMIT: 'submitting' },
	fetching_data: { FETCH_DATA_OK: 'idle', FETCH_DATA_ERROR: 'fetch_data_error' },
	fetch_data_error: { FETCH_DATA: 'fetching_data', FETCH_IE: 'fetching_ie', SUBMIT: 'submitting' },
	fetching_ie: { FETCH_IE_OK: 'idle', FETCH_IE_ERROR: 'fetch_ie_error' },
	fetch_ie_error: { FETCH_DATA: 'fetching_data', FETCH_IE: 'fetching_ie', SUBMIT: 'submitting' },
	submitting: { SUBMIT_OK: 'idle', SUBMIT_ERROR: 'submit_error' },
	submit_error: { FETCH_DATA: 'fetching_data', FETCH_IE: 'fetching_ie', SUBMIT: 'submitting' }
}

export const initialState = 'mounting'

export const transition = (that) => (action) => {
	that.setState( (prevState) => {
		return { uiState: machine[prevState.uiState][action] }
	})
}
