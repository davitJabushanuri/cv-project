import React from 'react'
import { nanoid } from 'nanoid'

const SkillsInput = ({ info, setInfo }) => {
	const [skill, setSkill] = React.useState({})

	const saveSkill = e => {
		setSkill({
			...skill,
			[e.target.name]: e.target.value,
			id: nanoid(),
		})
	}

	const pushSkillToInfo = e => {
		e.preventDefault()
		setInfo({
			...info,
			skills: [...info.skills, skill],
		})
		document.getElementById('skills-input').value = ''
	}
	return (
		<form className='skills'>
			<h2>Skills</h2>

			<input
				id='skills-input'
				type='text'
				name='skills'
				placeholder='JavaScript, Python etc.'
				onChange={saveSkill}
			/>

			<button onClick={pushSkillToInfo}>Add</button>
		</form>
	)
}

export default SkillsInput
