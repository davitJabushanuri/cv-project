import React from 'react'

const Education = ({ info, setInfo }) => {
	const { education } = info
	return (
		<div className='education'>
			<h1 className='heading'>{education.length > 0 ? `Education` : ''}</h1>
			{education.map(x => {
				return (
					<div key={x.id} className='university'>
						<div className='university-info'>
							<div className='university-name'>
								<p className='specialty'>{x.specialty}</p>
								<p className='name'>{x.university}</p>
							</div>
							<div className='years'>
								<p>{x.startDate}</p>
								<p>-</p>
								<p>{x.endDate}</p>
							</div>
						</div>
						<p>{x.description}</p>
					</div>
				)
			})}
		</div>
	)
}

export default Education
