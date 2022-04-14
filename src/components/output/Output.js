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
						<Education info={info} setInfo={setInfo} />
						<Employment info={info} setInfo={setInfo} />
					</div>
					<div className='sidebar'>
						<Skills info={info} setInfo={setInfo} />
						<Languages info={info} setInfo={setInfo} />
					</div>
				</main>
			</div>
		</div>
	)
}

export default Output
