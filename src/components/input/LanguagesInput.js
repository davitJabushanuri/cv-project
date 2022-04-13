import React from 'react'

const LanguagesInput = ({ info, setInfo }) => {
	const [language, setLanguage] = React.useState('')

	const saveLanguage = e => {
		setLanguage(e.target.value)
	}

	const pushLanguageToInfo = e => {
		e.preventDefault()
		setInfo({
			...info,
			languages: [...info.languages, language],
		})
	}

	return (
		<fieldset id='skills-fieldset'>
			<legend>Languages</legend>

			<input
				type='text'
				name='language'
				placeholder='english, russian etc.'
				onChange={saveLanguage}
			/>

			<button onClick={pushLanguageToInfo}>Add</button>
		</fieldset>
	)
}

export default LanguagesInput
