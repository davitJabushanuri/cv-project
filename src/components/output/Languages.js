import React from 'react'

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
						<li key={x.id}>
							{x.language}{' '}
							<button
								className='deleteButton'
								onClick={() => handleDelete(x.id)}
							>
								delete
							</button>
						</li>
					)
				})}
			</ul>
		</div>
	)
}

export default Languages
