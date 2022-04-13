import React from 'react'
import './App.css'
import Input from './components/input/Input'
import Output from './components/output/Output'
import { useState } from 'react'

function App() {
	const [info, setInfo] = useState({
		firstname: '',
		lastname: '',
		profession: '',
		phone: '',
		email: '',
		address: '',
		linkedin: '',
		education: [],
		employment: [],
		skills: ['javaScript', 'html', 'css', 'react'],
		languages: ['english', 'georgian'],
	})
	return (
		<div className='app'>
			<Input info={info} setInfo={setInfo} />
			<Output info={info} />
		</div>
	)
}

export default App
