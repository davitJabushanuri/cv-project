import React from 'react'

const Skills = ({ info, setInfo }) => {
	const handleDelete = id => {
		const filteredSkills = info.skills.filter(x => x.id !== id)
		console.log(filteredSkills)
		setInfo({
			...info,
			skills: filteredSkills,
		})
	}
	return (
		<div className='skills'>
			<h1 className='heading'>{info.skills.length > 0 ? `Skills` : ''}</h1>
			<ul>
				{info.skills.map(x => {
					return (
						<li key={x.id}>
							{x.skills}{' '}
							<button onClick={() => handleDelete(x.id)}>delete</button>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Skills
