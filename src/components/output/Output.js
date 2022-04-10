import React from 'react'
import './Output.css'
import PersonalDetails from './PersonalDetails'
import Education from './Education'
import Employment from './Employment'

const Output = ({ info }) => {
	return (
		<div className='output'>
			<div className='resume'>
				<PersonalDetails personalDetails={info} />
				<Education education={info.education} />
				<Employment employment={info.employment} />
			</div>
		</div>
	)
}

export default Output
