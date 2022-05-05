import React from 'react'
// import '../../src/stylingTest.scss'
import styled from 'styled-components'

const Div = styled.div`
		background: green;
	`

const Home = (props) => {
	

	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>

		{/* <div className="Box"> */}
		<Div>
    		 <p className="Box_content"> Styling React Components </p>
		</Div>
 		{/* </div> */}
			<h2>Home Pages</h2>
		</>
	)
}

export default Home
