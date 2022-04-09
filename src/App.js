import React from 'react'
import './App.css'
import Input from './components/input/Input'
import Output from './components/output/Output'
import { useState } from 'react'

function App() {
	const [info, setInfo] = useState({
		firstname: 'Firstname',
		lastname: 'Lastname',
		profession: 'Profession',
		phone: 'Your Phone Number',
		email: 'Your Email',
		address: 'Your Address',
		linkedin: 'Your linkedin acc',
	})
	return (
		<div className='app'>
			<Input info={info} setInfo={setInfo} />
			<Output info={info} />
		</div>
	)
}

export default App
