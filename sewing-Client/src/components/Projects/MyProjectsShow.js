import React, { useState, useEffect } from 'react'
import { getProject } from '../../api/projects'
import { useParams, useNavigate } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {projectsIndexFailure} from '../shared/AutoDismissAlert/messages'


const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

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
    
    
    console.log('this is project ', project)
    //if i throw this in here, I don't get anything for type AND
    //line 41, which does on its own console log an object, ends up 
    //being null. 
    //console.log(project.type)
        
   
	return (
		<>
           <h2>hi</h2>
        </>
    )
    
}

export default ProjectsShow