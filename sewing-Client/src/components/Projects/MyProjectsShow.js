import React, { useState, useEffect } from 'react'
import { getProject, updateProject, removeProject } from '../../api/projects'
import { useParams, useNavigate } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {projectsIndexFailure, projectsShowSuccess } from '../shared/AutoDismissAlert/messages'
import EditProjectModal from './EditProjectModal'


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
    const navigate = useNavigate()
    const [project, setProject] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
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
            .then(() =>
                msgAlert({
                    heading: 'Awesome',
                    message: projectsShowSuccess,
                    variant: 'success',
            }))
            .catch(() =>
                msgAlert({
                    heading: 'Oh No!',
                    message: projectsIndexFailure,
                    variant: 'danger',
            }))
    }, [updated])
    
    const RemoveProject = () => {
        removeProject(user, project.id)
            .then(() =>
                msgAlert({
                    heading: 'Project removed',
                    message: 'there will always be another',
                    variant: 'success',
            }))
            .then(() => {navigate(`/projects`)})
            .catch(() =>
                msgAlert({
                    heading: 'Dang!',
                    message: 'no workie',
                    variant: 'danger',
            }))
    }

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
                <Button onClick={() => setModalOpen(true)} className="m-2">
                    Edit Project
                </Button>
                <Button onClick ={() => RemoveProject()} className="m-2">
                    Delete Project
                </Button>
                <Link to='/projects' >
				    Back to my projects
			   </Link>
               <EditProjectModal
                    project={project}
                    show={modalOpen}
                    user={user}
                    triggerRefresh={() => setUpdated(prev => !prev)}
                    updateProject={updateProject}
                    handleClose = {() => setModalOpen(false)}
                    msgAlert={msgAlert}
                 />
            </>
        )
    }
    else{
        return null
    }
}

export default ProjectsShow