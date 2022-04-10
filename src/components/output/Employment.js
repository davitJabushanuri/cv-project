import React from 'react'

const Employment = ({ employment }) => {
	console.log(employment)
	return (
		<div className='employment education'>
			<h1 className='heading'>Employment</h1>
			{employment.map(x => {
				return (
					<div className='job university'>
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
					</div>
				)
			})}
		</div>
	)
}

export default Employment
