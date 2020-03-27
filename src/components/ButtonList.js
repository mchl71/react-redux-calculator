import React from 'react'
import './ButtonList.css'

const ButtonList = ({ onNumberButtonClick, onOperatorButtonClick, getResult, getDefaultState }) => {
	let buttons = []
	for (let i = 0; i <= 9; i++) {
		buttons.push(
			<button className='number' value={i} key={i} onClick={onNumberButtonClick}>{i}</button>
		)
	}

	return (
		<div className='buttonListContainer'>
			<div className='listNumbers'>
				{
					buttons.map(button => button)
				}
			</div>
			<div className='listOperators'>
				<button className='operator' value={"+"} onClick={onOperatorButtonClick}>{"+"}</button>
				<button className='operator' value={"-"} onClick={onOperatorButtonClick}>{"-"}</button>
				<button className='operator' value={"*"} onClick={onOperatorButtonClick}>{"*"}</button>
				<button className='operator' value={"/"} onClick={onOperatorButtonClick}>{"/"}</button>
				<button className='operator' value={"="} onClick={getResult}>{"="}</button>
				<button className='delete' value={"delete"} onClick={getDefaultState}>DEL</button>
			</div>
		</div>
	)
}

export default ButtonList