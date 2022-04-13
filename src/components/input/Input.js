import React from 'react'
import PersonalDetailsInput from './PersonalDetailsInput'
import EducationInfo from './EducationInfo'
import EmploymentInput from './EmploymentInput'
import LanguagesInput from './LanguagesInput'
import SkillsInput from './SkillsInput'

const Input = ({ info, setInfo }) => {
	return (
		<div className='input'>
			<div className='form'>
				<PersonalDetailsInput info={info} setInfo={setInfo} />
				<EducationInfo info={info} setInfo={setInfo} />
				<EmploymentInput info={info} setInfo={setInfo} />
				<SkillsInput info={info} setInfo={setInfo} />
				<LanguagesInput info={info} setInfo={setInfo} />
			</div>
		</div>
	)
}

export default Input
