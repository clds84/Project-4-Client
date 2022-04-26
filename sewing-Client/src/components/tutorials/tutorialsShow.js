import React, { useState, useEffect } from 'react'
import { getTutorial } from '../../api/tutorials'
import { useParams, useNavigate } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {tutorialsShowFailure} from '../shared/AutoDismissAlert/messages'


// const cardContainerLayout = {
//     display: 'flex',
//     justifyContent: 'center',
//     flexFlow: 'row wrap'
// }   
// const linkStyle = {
//     color: 'black',
//     textDecoration: 'underline'
// }
const TutorialsShow = (props) => {
	// const { msgAlert, user } = props
	console.log('props in projects show', props)
    const [tutorial, setTutorial] = useState(null)
    const [updated, setUpdated] = useState(false)
    const {user, msgAlert } = props
    const { id } = useParams()
    
    console.log('this is id',id)
    useEffect(() => {
        getTutorial(id)
            .then(res => {
                console.log('this is data without digging in ', res)
                console.log('this is the project data', res.data.tutorial)
                setTutorial(res.data.tutorial)
                
            })
            .catch(() =>
            msgAlert({
                heading: 'Oh No!',
                message: tutorialsShowFailure,
                variant: 'danger',
        }))
    }, [updated])
    
    if(tutorial){
        console.log('this is project type', tutorial.type)
        return (
            <>
                <div>
                    <h2>Welcome! Let's learn how to make a {tutorial.type}</h2>
                    <h2>The pattern is {tutorial.pattern}</h2>
                    <div>(Will have images here later)</div>
                    
                    <p> Feel free to experiment, but I went with {tutorial.fabric} 
                    fabric and a {tutorial.interfacing} interfacing. You can use a 
                    few or a lot of notions, and I used {tutorial.notions} just to name a few</p>
                </div>
                <Link to='/tutorials/:id/' >
				    Next Page
			   </Link><br />
               <Link to='/tutorials' >
				    Back to tutorials
			   </Link>
            </>

        )
    }
    else{
        return null
    }
}

export default TutorialsShow