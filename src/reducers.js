import { HANDLE_NUMBER_BUTTON_CLICK, HANDLE_OPERATOR_BUTTON_CLICK, GET_RESULT, GET_DEFAULT_STATE } from './constants.js'

const initialStateButton = {
	buttonValue: '',
	previousValue: '',
	displayValue: '',
	operator: '',
	previousOperator: ''
}

const evaluateInput = (operator, firstValue, secondValue) => {
	switch (operator) {
		case '+':
			return Number(firstValue) + Number(secondValue)
		case '-':
			return Number(firstValue) - Number(secondValue)
		case '*':
			return Number(firstValue) * Number(secondValue)
		case '/':
			return Number(firstValue) / Number(secondValue)
		default:
			return
	}
}

export const setButtonValue = (state=initialStateButton, action={}) => {
	switch(action.type) {
		case HANDLE_NUMBER_BUTTON_CLICK:
			return Object.assign({}, state, {buttonValue: action.payload, displayValue: state.displayValue + action.payload})
		case HANDLE_OPERATOR_BUTTON_CLICK:
			if (state.operator) {
				const result = evaluateInput(state.operator, state.previousValue, state.displayValue)
				return Object.assign({}, state, {operator: action.payload, previousValue: result, displayValue: ''})
			} else {
				return Object.assign({}, state, {operator: action.payload, previousValue: state.displayValue, displayValue: ''})
			}
		case GET_RESULT:
			if (state.previousValue && state.operator && state.displayValue) {
				const result = evaluateInput(state.operator, state.previousValue, state.displayValue)
				return Object.assign({}, state, {previousValue: result, displayValue: result, operator: ''})
			} else {
				return state
			}
		case GET_DEFAULT_STATE:
			return Object.assign({}, initialStateButton)
		default:
			return state
	}
}