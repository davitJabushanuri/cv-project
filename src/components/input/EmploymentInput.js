import React from 'react'
import { nanoid } from 'nanoid'

const EmploymentInput = ({ info, setInfo }) => {
	const [job, setJob] = React.useState({})

	const saveJob = e => {
		setJob({
			...job,
			[e.target.name]: e.target.value,
			id: nanoid(),
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
			<h2>Employment</h2>
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

			<textarea
				name='description'
				placeholder='Description'
				onChange={saveJob}
			/>

			<button onClick={pushJobToInfo}>Add</button>
		</div>
	)
}

export default EmploymentInput
