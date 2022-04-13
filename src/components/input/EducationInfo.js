import React from 'react'

const EducationInfo = ({ info, setInfo }) => {
	const [school, setSchool] = React.useState({})
	console.log(info)
	const saveSchool = e => {
		setSchool({
			...school,
			[e.target.name]: e.target.value,
		})
	}

	const pushSchoolToInfo = e => {
		e.preventDefault()
		setInfo({
			...info,
			education: [...info.education, school],
		})
	}

	return (
		<div className='education'>
			<h2>Education</h2>
			<input
				type='text'
				name='specialty'
				placeholder='Specialty'
				onChange={saveSchool}
			/>

			<input
				type='text'
				name='university'
				placeholder='University'
				onChange={saveSchool}
			/>

			<input
				type='number'
				name='startDate'
				placeholder='Start date'
				onChange={saveSchool}
			/>

			<input
				type='number'
				name='endDate'
				placeholder='End date'
				onChange={saveSchool}
			/>

			<textarea
				name='description'
				placeholder='Description'
				onChange={saveSchool}
			/>

			<button onClick={pushSchoolToInfo}>Add</button>
		</div>
	)
}

export default EducationInfo
