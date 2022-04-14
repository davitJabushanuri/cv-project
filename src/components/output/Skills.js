import React from 'react'

const Skills = ({ info, setInfo }) => {
	const { skills } = info
	const handleDelete = id => {
		const filteredSkills = skills.filter(x => x.id !== id)
		setInfo({
			...info,
			skills: filteredSkills,
		})
	}
	return (
		<div className='skills'>
			<h1 className='heading'>{skills.length > 0 ? `Skills` : ''}</h1>
			<ul>
				{skills.map(x => {
					return (
						<li key={x.id}>
							{x.skills}{' '}
							<button
								className='deleteButton'
								onClick={() => handleDelete(x.id)}
							>
								delete
							</button>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Skills
