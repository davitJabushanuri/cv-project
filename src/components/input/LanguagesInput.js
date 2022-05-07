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
		document.getElementById('language-input').value = ''
	}

	return (
		<form className='languages form'>
			<h2>Languages</h2>
			<input
				id='language-input'
				type='text'
				name='language'
				placeholder='english, russian etc.'
				onChange={saveLanguage}
			/>

			<button onClick={pushLanguageToInfo}>Add</button>
		</form>
	)
}

export default LanguagesInput
