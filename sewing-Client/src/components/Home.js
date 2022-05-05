import React from 'react'
// import '../../src/stylingTest.scss'

import needleImage from '../images/needle3.jpg'
import buttonImage from '../components/Profile/buttons.jpg'



const Home = (props) => {
	

	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<div style={{ backgroundImage: `url(${needleImage})`, backgroundSize: 'cover', height:'1000px'}}>
				
			</div>
			
		</>
	)
}

export default Home
