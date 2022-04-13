import React from 'react'

const Languages = ({ languages }) => {
	return (
		<div className='languages'>
			<h1 className='heading'>{languages.length > 0 ? `Languages` : ''}</h1>
			<ul>
				{languages.map(x => {
					return <li>{x}</li>
				})}
			</ul>
		</div>
	)
}

export default Languages
