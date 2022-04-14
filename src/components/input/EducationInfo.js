import React from 'react'
import { nanoid } from 'nanoid'

const EducationInfo = ({ info, setInfo }) => {
	const [school, setSchool] = React.useState({})
	const saveSchool = e => {
		setSchool({
			...school,
			[e.target.name]: e.target.value,
			id: nanoid(),
		})
	}

	const pushSchoolToInfo = e => {
		e.preventDefault()

		setInfo({
			...info,
			education: [...info.education, school],
		})

		const el = document.querySelectorAll('.education-input')
		el.forEach(x => {
			x.value = ''
		})
	}

	return (
		<form className='education form'>
			<h2>Education</h2>
			<input
				className='education-input'
				type='text'
				name='specialty'
				placeholder='Specialty'
				onChange={saveSchool}
			/>

			<input
				className='education-input'
				type='text'
				name='university'
				placeholder='University'
				onChange={saveSchool}
			/>

			<input
				className='education-input'
				type='number'
				name='startDate'
				placeholder='Start date'
				onChange={saveSchool}
			/>

			<input
				className='education-input'
				type='number'
				name='endDate'
				placeholder='End date'
				onChange={saveSchool}
			/>

			<textarea
				className='education-input'
				name='description'
				placeholder='Description'
				onChange={saveSchool}
			/>

			<button onClick={pushSchoolToInfo}>Add</button>
		</form>
	)
}

export default EducationInfo
