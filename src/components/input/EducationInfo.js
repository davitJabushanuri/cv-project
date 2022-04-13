import React from 'react'

const EducationInfo = ({ info, setInfo }) => {
	const [school, setSchool] = React.useState({})

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
			<fieldset id='education-fieldset'>
				<legend>Education</legend>

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

				<input
					type='textarea'
					name='description'
					placeholder='Description'
					onChange={saveSchool}
				/>

				<button onClick={pushSchoolToInfo}>Add</button>
			</fieldset>
		</div>
	)
}

export default EducationInfo
