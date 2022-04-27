import React, { useState, useEffect } from 'react'
import { getProject } from '../../api/projects'
import { useParams, useNavigate } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {projectsIndexFailure} from '../shared/AutoDismissAlert/messages'


// const cardContainerLayout = {
//     display: 'flex',
//     justifyContent: 'center',
//     flexFlow: 'row wrap'
// }   
// const linkStyle = {
//     color: 'black',
//     textDecoration: 'underline'
// }
const ProjectsShow = (props) => {
	// const { msgAlert, user } = props
	console.log('props in projects show', props)
    const [project, setProject] = useState(null)
    const [updated, setUpdated] = useState(false)
    const {user, msgAlert } = props
    const { id } = useParams()
    
    console.log('this is id',id)
    useEffect(() => {
        getProject(id)
            .then(res => {
                console.log('this is data without digging in ', res)
                console.log('this is the project data', res.data.project)
                setProject(res.data.project)
                
            })
            .catch(() =>
            msgAlert({
                heading: 'Oh No!',
                message: projectsIndexFailure,
                variant: 'danger',
        }))
    }, [updated])
    
    if(project){
        console.log('this is project type', project.type)
        return (
            <>
               <Link to='/addProject' >
				    Add Project
			   </Link>
                <div>
                    <h2>{project.type}</h2>
                    <h2>{project.pattern}</h2>
                    <div>(Will have images here later)</div>
                    <h3>Project Specs:</h3>
                    <p>fabric: {project.fabric}</p>
                    <p>interfacing: {project.interfacing}</p>
                    <p>notions: {project.notions}</p>
                </div>
               <Link to='/projects' >
				    Back to my projects
			   </Link>
            </>

        )
    }
    else{
        return null
    }
}

export default ProjectsShow