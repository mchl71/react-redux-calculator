import React from 'react'
import './Display.css'

const Display = ({ displayValue }) => {
	return (
		<div className='displayContainer'>
			{displayValue}
		</div>
	)
}

export default Display