import React from 'react'
import { nanoid } from 'nanoid'

const LanguagesInput = ({ info, setInfo }) => {
	const [language, setLanguage] = React.useState({})

	const saveLanguage = e => {
		setLanguage({
			...language,
			[e.target.name]: e.target.value,
			id: nanoid(),
		})
	}

	const pushLanguageToInfo = e => {
		e.preventDefault()
		setInfo({
			...info,
			languages: [...info.languages, language],
		})
	}

	return (
		<div className='languages'>
			<h2>Languages</h2>
			<input
				type='text'
				name='language'
				placeholder='english, russian etc.'
				onChange={saveLanguage}
			/>

			<button onClick={pushLanguageToInfo}>Add</button>
		</div>
	)
}

export default LanguagesInput
