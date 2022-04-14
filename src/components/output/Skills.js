import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
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
		<div className='skills '>
			<h1 className='heading'>{skills.length > 0 ? `Skills` : ''}</h1>
			<ul>
				{skills.map(x => {
					return (
						<li key={x.id} className='relative'>
							{x.skills}{' '}
							<button
								className='deleteButton'
								onClick={() => handleDelete(x.id)}
							>
								<FontAwesomeIcon className='deleteIcon' icon={faTrash} />
							</button>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Skills
