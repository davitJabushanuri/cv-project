import React from 'react'

const PersonalDetailsInput = ({ info, setInfo }) => {
	const savePersonalDetails = e => {
		setInfo({
			...info,
			[e.target.name]: e.target.value,
		})
	}
	return (
		<div className='personal-details'>
			<fieldset id='personal-info-fieldset'>
				<legend>Personal Information</legend>

				<input
					name='firstname'
					type='text'
					placeholder='First name'
					onChange={savePersonalDetails}
				/>

				<input
					name='lastname'
					type='text'
					placeholder='Last name'
					onChange={savePersonalDetails}
				/>

				<input
					name='profession'
					type='text'
					placeholder='Profession'
					onChange={savePersonalDetails}
				/>

				<input
					name='phone'
					type='number'
					placeholder='Phone number'
					onChange={savePersonalDetails}
				/>

				<input
					name='email'
					type='email'
					placeholder='Email'
					onChange={savePersonalDetails}
				/>

				<input
					name='address'
					type='text'
					placeholder='Address'
					onChange={savePersonalDetails}
				/>

				<input
					name='linkedin'
					type='text'
					placeholder='LinkedIn'
					onChange={savePersonalDetails}
				/>
			</fieldset>
		</div>
	)
}

export default PersonalDetailsInput
