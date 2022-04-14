import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Languages = ({ info, setInfo }) => {
	const { languages } = info

	const handleDelete = id => {
		const filteredLanguages = languages.filter(x => x.id !== id)
		setInfo({
			...info,
			languages: filteredLanguages,
		})
	}
	return (
		<div className='languages'>
			<h1 className='heading'>{languages.length > 0 ? `Languages` : ''}</h1>
			<ul>
				{languages.map(x => {
					return (
						<li key={x.id} className='relative'>
							{x.language}{' '}
							<button
								className='deleteButton'
								onClick={() => handleDelete(x.id)}
							>
								<FontAwesomeIcon className='deleteIcon' icon={faTrash} />
							</button>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Languages
