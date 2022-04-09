import React from 'react'

const Input = ({ info, setInfo }) => {
	console.log(info)
	const saveInput = e => {
		setInfo({
			...info,
			[e.target.name]: e.target.value,
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

					<input type='text' placeholder='School' />

					<input type='textarea' placeholder='Description' />
				</fieldset>
				<fieldset id='work-fieldset'>
					<legend>Work Experience</legend>

					<input type='text' placeholder='Job title' />
					<input type='text' placeholder='Position' />
					<input type='text' placeholder='Description' />
				</fieldset>
				<fieldset id='skills-fieldset'>
					<legend>Skills</legend>

					<input type='text' placeholder='JavaScript, Python etc.' />
				</fieldset>
			</form>
		</div>
	)
}

export default Input
