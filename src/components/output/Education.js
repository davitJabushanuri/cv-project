import React from 'react'

const Education = ({ info, setInfo }) => {
	const { education } = info

	const handleDelete = id => {
		const filteredEducation = education.filter(x => x.id !== id)
		setInfo({
			...info,
			education: filteredEducation,
		})
	}
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
						<button className='deleteButton' onClick={() => handleDelete(x.id)}>
							delete
						</button>
					</div>
				)
			})}
		</div>
	)
}

export default Education
