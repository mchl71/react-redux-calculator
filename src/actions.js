import { HANDLE_NUMBER_BUTTON_CLICK, HANDLE_OPERATOR_BUTTON_CLICK, GET_RESULT, GET_DEFAULT_STATE } from './constants.js'

export const handleNumberButtonClick = (value) => {
	return {
		type: HANDLE_NUMBER_BUTTON_CLICK,
		payload: value
	}
}

export const handleOperatorButtonClick = (value) => {
	return {
		type: HANDLE_OPERATOR_BUTTON_CLICK,
		payload: value
	}
}

export const getResult = () => {
	return {
		type: GET_RESULT
	}
}

export const getDefaultState = () => {
	return {
		type: GET_DEFAULT_STATE
	}
}