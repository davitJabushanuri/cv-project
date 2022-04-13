import React from 'react'

const Languages = ({ languages }) => {
	return (
		<div className='languages'>
			<h1>{languages.length > 0 ? `Languages` : ''}</h1>
			{languages.map(x => {
				return <li>{x}</li>
			})}
		</div>
	)
}

export default Languages
