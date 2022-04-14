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

		const el = document.querySelectorAll('.employment-input')
		el.forEach(x => {
			x.value = ''
		})
	}

	return (
		<div className='employment'>
			<h2>Employment</h2>
			<input
				className='employment-input'
				type='text'
				name='position'
				placeholder='Position'
				onChange={saveJob}
			/>

			<input
				className='employment-input'
				type='text'
				name='employer'
				placeholder='Employer'
				onChange={saveJob}
			/>

			<input
				className='employment-input'
				type='number'
				name='startDate'
				placeholder='Start date'
				onChange={saveJob}
			/>

			<input
				className='employment-input'
				type='number'
				name='endDate'
				placeholder='End date'
				onChange={saveJob}
			/>

			<textarea
				className='employment-input'
				name='description'
				placeholder='Description'
				onChange={saveJob}
			/>

			<button onClick={pushJobToInfo}>Add</button>
		</div>
	)
}

export default EmploymentInput
