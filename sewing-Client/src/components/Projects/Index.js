import React, { useState, useEffect } from 'react'
import { getAllProjects } from '../../api/projects'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import {projectsIndexFailure} from '../shared/AutoDismissAlert/messages'
import fabric from '../../images/canvasSmaller.jpg'
import { Image } from "react-bootstrap"
import shirt from '../../images/shirt.jpg'


const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const ProjectsIndex = (props) => {
    const {user, msgAlert } = props 
	console.log('props in projects index', props)
    const navigate = useNavigate()
    const [projects, setProjects] = useState(null)
    

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
        return (
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', backgroundImage: `url(${fabric})`, width:'100%', height:'800px' }}>
                <p style={{fontSize:'45px'}}>loading...</p>
            </div>
        )
    } else if (projects.length === 0) {
        return (
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', backgroundImage: `url(${fabric})`, width:'100%', height:'800px' }}>
                <p style={{fontSize:'45px'}}>No projects as of yet! Click <Link to='/addProject' > here</Link> here to add one!</p>
            </div>
        )
    }

    let projectsCards 
    
    if (projects.length > 0) { 
        
        projectsCards = projects.map(project => (
           
           
            <Card key={project.id} style={{width: '30rem', textAlign:'center'}} className="m-2 shadow p-3 mb-5 bg-body rounded" >
                <Card.Header style={{background: 'white', fontSize: '28px'}}>
                    <strong>{project.type}</strong> <br /> <hr></hr><strong>{project.pattern}</strong> 
                </Card.Header>
                <Card.Body>
                    <Card.Img src={project.image} alt="Card image" />
                    <Card.Text>
                        <br />
                        <Button onClick={() => navigate(`/projects/${project._id}`)} className="m-2">  
                                View
                        </Button>
                    </Card.Text>
                </Card.Body>
            </Card>
           
        ))
    }
    
	return (
		<>
            <div style={{padding: '100px', backgroundImage: `url(${fabric})`, backgroundSize:'cover', width: '100%', height: '1000px'}}> 
                 <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap'}}>
                     {projectsCards}
                </div>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <Button  onClick={() => navigate('/addproject')} className="m-2">  
                        Add Project
                    </Button>
                 </div>
            </div> 
            
                
        </>
    )
}

export default ProjectsIndex
