import React from 'react'

const Skills = ({ skills }) => {
	console.log(skills)
	return (
		<div className='skills'>
			{skills.map(x => {
				return <li>{x}</li>
			})}
		</div>
	)
}

export default Skills
