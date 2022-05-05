import React, { useState, useEffect } from 'react'
import { getAllTutorials } from '../../api/tutorials'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {tutorialsIndexSuccess, tutorialsIndexFailure} from '../shared/AutoDismissAlert/messages'
import tutorialPhoto from '../../images/tutorialPhoto.jpg'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const TutorialsIndex = (props) => {
	// const { msgAlert, user } = props
	console.log('props in tutorials index', props)
    const [tutorials, setTutorials] = useState(null)
    const {user, msgAlert } = props
    

    useEffect(() => {
        getAllTutorials(user)
            .then(tutorials => {
                console.log('this is the project data', tutorials.data.tutorials)
                setTutorials(tutorials.data.tutorials)
            })
            .catch(() =>
            msgAlert({
                heading: 'Oh No!',
                message: tutorialsIndexFailure,
                variant: 'danger',
        }))
    }, [])

    if (!tutorials) {
        return <p>loading...</p>
    } else if (tutorials.length === 0) {
        return <p>No tutorials as of yet!</p>
    }

    let tutorialsCards 
    
    if (tutorials.length > 0) { 
        
        tutorialsCards = tutorials.map(tutorial => (
           
    
            <Card key={tutorial.id} style={{ width: '30%' }} className="m-2" >
                <Card.Header>{tutorial.type}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <Link to={`/tutorials/${tutorial._id}`}>Start Tutorial</Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        ))
    }
    
	return (
		<>
        <div style={{padding: '100px', backgroundImage: `url(${tutorialPhoto})`, backgroundSize:'cover', width: '100%', height: '1000px'}}> 
        <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
            {tutorialsCards}
        </div>
        </div>
    </>
    )
}

export default TutorialsIndex
