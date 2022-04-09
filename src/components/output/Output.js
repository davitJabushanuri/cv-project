import React from 'react'
import './Output.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
	faMobileScreen,
	faEnvelope,
	faHouse,
	faLink,
} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Output = props => {
	const { firstname, lastname, profession, phone, email, address, linkedin } =
		props.info

	return (
		<div className='output'>
			<div className='resume'>
				<div className='personal-information'>
					<div className='left'>
						<h1 className='fullname'>
							{firstname} {lastname}
						</h1>
						<p className='profession'>{profession}</p>
					</div>
					<div className='right'>
						<div className='phone contact-info'>
							<p>{phone}</p>
							<div className='icon-container'>
								<FontAwesomeIcon
									className='contact-icon'
									icon={faMobileScreen}
								/>
							</div>
						</div>
						<div className='mail contact-info'>
							<p>{email}</p>
							<div className='icon-container'>
								<FontAwesomeIcon className='contact-icon' icon={faEnvelope} />
							</div>
						</div>
						<div className='address contact-info'>
							<p>{address}</p>
							<div className='icon-container'>
								<FontAwesomeIcon className='contact-icon' icon={faHouse} />
							</div>
						</div>
						<div className='linkedin contact-info'>
							<p>linkedin.com/{linkedin}</p>
							<div className='icon-container'>
								<FontAwesomeIcon className='contact-icon' icon={faLinkedin} />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Output
