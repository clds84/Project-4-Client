import React from 'react'
import '../../src/stylingTest.scss'
const Home = (props) => {
	<div className="Box">
    <p className="Box_content"> Styling React Components </p>
  </div>
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>

		<div className="Box">
    		 <p className="Box_content"> Styling React Components </p>
 		</div>
			<h2>Home Pages</h2>
		</>
	)
}

export default Home
