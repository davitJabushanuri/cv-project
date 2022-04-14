import React from 'react'

const Skills = ({ skills }) => {
	return (
		<div className='skills'>
			<h1 className='heading'>{skills.length > 0 ? `Skills` : ''}</h1>
			<ul>
				{skills.map(x => {
					return <li key={x.id}>{x.skills}</li>
				})}
			</ul>
		</div>
	)
}

export default Skills