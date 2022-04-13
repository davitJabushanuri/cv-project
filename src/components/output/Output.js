import React from 'react'
import './Output.css'
import PersonalDetails from './PersonalDetails'
import Education from './Education'
import Employment from './Employment'
import Skills from './Skills'
import Languages from './Languages'

const Output = ({ info }) => {
	return (
		<div className='output'>
			<div className='resume'>
				<PersonalDetails personalDetails={info} />
				<Education education={info.education} />
				<Employment employment={info.employment} />
				<Skills skills={info.skills} />
				<Languages languages={info.languages} />
			</div>
		</div>
	)
}

export default Output
