import React, { useState, useEffect } from 'react'
import { getAllProjects } from '../../api/projects'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {projectsIndexFailure} from '../shared/AutoDismissAlert/messages'


const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const ProjectsIndex = (props) => {
	// const { msgAlert, user } = props
	console.log('props in projects index', props)
    const [projects, setProjects] = useState(null)
    const {user, msgAlert } = props
    

    useEffect(() => {
        getAllProjects(user)
            .then(projects => {
                console.log('this is the project data', projects.data.projects)
                setProjects(projects.data.projects)
                console.log('this is projects',projects)
            })
            .catch(() =>
            msgAlert({
                heading: 'Oh No!',
                message: projectsIndexFailure,
                variant: 'danger',
        }))
    }, [])

    if (!projects) {
        return <p>loading...</p>
    } else if (projects.length === 0) {
        return <p>No projects as of yet!</p>
    }

    let projectsCards 
    
    if (projects.length > 0) { 
        
        projectsCards = projects.map(project => (
           
    
            <Card key={project.id} style={{ width: '30%' }} className="m-2" >
                <Card.Header>{project.type} - {project.pattern} </Card.Header>
                <Card.Body>
                    <Card.Text>
                        <Link to={`/projects/${project._id}`}>View </Link>
                    </Card.Text>
                </Card.Body>
            </Card>
        ))
    }
    
	return (
		<>
        <h3 className='logo'>All my favorite picks</h3>
        <div style={cardContainerLayout}>
            {projectsCards}
        </div>
    </>
    )
}

export default ProjectsIndex
