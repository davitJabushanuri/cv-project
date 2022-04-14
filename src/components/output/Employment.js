import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Employment = ({ info, setInfo }) => {
	const { employment } = info

	const handleDelete = id => {
		const filteredEmployment = employment.filter(x => x.id !== id)
		setInfo({
			...info,
			employment: filteredEmployment,
		})
	}
	return (
		<div className='employment education'>
			<h1 className='heading'>{employment.length > 0 ? `Employment` : ''}</h1>
			{employment.map(x => {
				return (
					<div key={x.id} className='job university relative'>
						<div className='job-info university-info'>
							<div className='job-name university-name'>
								<p className='specialty'>{x.position}</p>
								<p className='name'>{x.employer}</p>
							</div>
							<div className='years'>
								<p>{x.startDate}</p>
								<p>-</p>
								<p>{x.endDate}</p>
							</div>
						</div>
						<p>{x.description}</p>
						<button className='deleteButton' onClick={() => handleDelete(x.id)}>
							<FontAwesomeIcon className='deleteIcon' icon={faTrash} />
						</button>
					</div>
				)
			})}
		</div>
	)
}

export default Employment
