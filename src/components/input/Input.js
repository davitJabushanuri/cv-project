import React, { useState } from 'react'

const Input = ({ info, setInfo }) => {
	const [educationInfo, setEducationInfo] = useState({})
	const [employmentInfo, setEmploymentInfo] = useState({})
	const [skillsInfo, setSkillsInfo] = useState('')

	const saveInput = e => {
		setInfo({
			...info,
			[e.target.name]: e.target.value,
		})
	}
	const saveEducation = e => {
		setEducationInfo({
			...educationInfo,
			[e.target.name]: e.target.value,
		})
	}

	const handleEducation = e => {
		e.preventDefault()
		setInfo({
			...info,
			education: [...info.education, educationInfo],
		})
	}

	const saveEmploymentInfo = e => {
		setEmploymentInfo({
			...employmentInfo,
			[e.target.name]: e.target.value,
		})
	}

	const handleEmployment = e => {
		e.preventDefault()
		setInfo({
			...info,
			employment: [...info.employment, employmentInfo],
		})
	}

	const saveSkills = e => {
		setSkillsInfo(e.target.value)
	}

	const handleSkills = e => {
		e.preventDefault()
		setInfo({
			...info,
			skills: [...info.skills, skillsInfo],
		})
	}

	return (
		<div className='Input'>
			<form className='form' action=''>
				<fieldset id='personal-info-fieldset'>
					<legend>Personal Information</legend>

					<input
						name='firstname'
						type='text'
						placeholder='First name'
						onChange={saveInput}
					/>

					<input
						name='lastname'
						type='text'
						placeholder='Last name'
						onChange={saveInput}
					/>

					<input
						name='profession'
						type='text'
						placeholder='Profession'
						onChange={saveInput}
					/>

					<input
						name='phone'
						type='number'
						placeholder='Phone number'
						onChange={saveInput}
					/>

					<input
						name='email'
						type='email'
						placeholder='Email'
						onChange={saveInput}
					/>

					<input
						name='address'
						type='text'
						placeholder='Address'
						onChange={saveInput}
					/>

					<input
						name='linkedin'
						type='text'
						placeholder='LinkedIn'
						onChange={saveInput}
					/>
				</fieldset>
				<fieldset id='education-fieldset'>
					<legend>Education</legend>

					<input
						type='text'
						name='specialty'
						placeholder='Specialty'
						onChange={saveEducation}
					/>

					<input
						type='text'
						name='university'
						placeholder='University'
						onChange={saveEducation}
					/>

					<input
						type='number'
						name='startDate'
						placeholder='Start date'
						onChange={saveEducation}
					/>

					<input
						type='number'
						name='endDate'
						placeholder='End date'
						onChange={saveEducation}
					/>

					<input
						type='textarea'
						name='description'
						placeholder='Description'
						onChange={saveEducation}
					/>

					<button onClick={handleEducation}>Add</button>
				</fieldset>
				<fieldset id='work-fieldset'>
					<legend>Work Experience</legend>

					<input
						type='text'
						name='position'
						placeholder='Position'
						onChange={saveEmploymentInfo}
					/>

					<input
						type='text'
						name='employer'
						placeholder='Employer'
						onChange={saveEmploymentInfo}
					/>

					<input
						type='number'
						name='startDate'
						placeholder='Start date'
						onChange={saveEmploymentInfo}
					/>

					<input
						type='number'
						name='endDate'
						placeholder='End date'
						onChange={saveEmploymentInfo}
					/>

					<input
						type='textarea'
						name='description'
						placeholder='Description'
						onChange={saveEmploymentInfo}
					/>

					<button onClick={handleEmployment}>Add</button>
				</fieldset>
				<fieldset id='skills-fieldset'>
					<legend>Skills</legend>

					<input
						type='text'
						name='skills'
						placeholder='JavaScript, Python etc.'
						onChange={saveSkills}
					/>

					<button onClick={handleSkills}>Add</button>
				</fieldset>
			</form>
		</div>
	)
}

export default Input
