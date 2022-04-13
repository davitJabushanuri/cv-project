import React from 'react'

const EmploymentInput = ({ info, setInfo }) => {
	const [job, setJob] = React.useState({})

	const saveJob = e => {
		setJob({
			...job,
			[e.target.name]: e.target.value,
		})
	}

	const pushJobToInfo = e => {
		e.preventDefault()
		setInfo({
			...info,
			employment: [...info.employment, job],
		})
	}

	return (
		<div className='employment'>
			<fieldset id='work-fieldset'>
				<legend>Work Experience</legend>

				<input
					type='text'
					name='position'
					placeholder='Position'
					onChange={saveJob}
				/>

				<input
					type='text'
					name='employer'
					placeholder='Employer'
					onChange={saveJob}
				/>

				<input
					type='number'
					name='startDate'
					placeholder='Start date'
					onChange={saveJob}
				/>

				<input
					type='number'
					name='endDate'
					placeholder='End date'
					onChange={saveJob}
				/>

				<input
					type='textarea'
					name='description'
					placeholder='Description'
					onChange={saveJob}
				/>

				<button onClick={pushJobToInfo}>Add</button>
			</fieldset>
		</div>
	)
}

export default EmploymentInput
