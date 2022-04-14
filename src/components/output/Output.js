import React from 'react'
import './Output.css'
import PersonalDetails from './PersonalDetails'
import Education from './Education'
import Employment from './Employment'
import Skills from './Skills'
import Languages from './Languages'

const Output = ({ info, setInfo }) => {
	return (
		<div className='output'>
			<div className='resume'>
				<PersonalDetails personalDetails={info} />
				<main>
					<div className='profile'>
						<Education education={info.education} />
						<Employment employment={info.employment} />
					</div>
					<div className='sidebar'>
						<Skills info={info} setInfo={setInfo} />
						<Languages languages={info.languages} />
					</div>
				</main>
			</div>
		</div>
	)
}

export default Output
