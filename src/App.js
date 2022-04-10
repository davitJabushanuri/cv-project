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
		education: [
			{
				specialty: 'IT specialist',
				university: 'Ilia state university',
				startDate: 2020,
				endDate: 2022,
				description: 'one of the best university for sure',
			},
			{
				specialty: 'computer engineer',
				university: 'Ilia state university',
				startDate: 2010,
				endDate: 2013,
				description: 'it was eye opening',
			},
		],

		employment: [
			{
				position: 'junior front-dev',
				employer: 'Scrimba',
				startDate: 2019,
				endDate: 2021,
				description: 'my first job as front end dev',
			},
			{
				position: 'Senior full stack',
				employer: 'Freecodecamp',
				startDate: 2021,
				endDate: 2022,
				description: 'full stack is hard',
			},
		],
	})
	return (
		<div className='app'>
			<Input info={info} setInfo={setInfo} />
			<Output info={info} />
		</div>
	)
}

export default App
