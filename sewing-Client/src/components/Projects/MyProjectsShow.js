import React, { useState, useEffect } from 'react'
import { getProject, updateProject, removeProject } from '../../api/projects'
import { useParams, useNavigate } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {projectsIndexFailure, projectsShowSuccess } from '../shared/AutoDismissAlert/messages'
import EditProjectModal from './EditProjectModal'
import fabric from '../../images/canvasSmaller.jpg'

const ProjectsShow = (props) => {
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
        removeProject(user, id)
        
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
    console.log('THIS IS PROJECT', project)
    if(project){
        console.log('this is project type', project.type)
        return (
            <>
             <div style={{padding:'100px',display:'flex',flexDirection:'column', alignItems:'center', backgroundImage: `url(${fabric})`, backgroundSize:'cover', width: '100%', height: '1000px'}}>
                <Card style={{width: '30rem', textAlign:'center'}} className="m-2 shadow p-3 mb-5 bg-body rounded">
                    <Card.Header style={{background:'white', fontSize:'28px'}}>
                        <strong>{project.type}</strong> <br /> <hr></hr><strong>{project.pattern}</strong> 
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            <h3 style={{float: 'left'}}>Project Specs:</h3><br /><br /><br />
                            <div style={{display:'flex', flexDirection:'column', alignItems: 'flex-start'}}>                               
                            <p><strong>fabric:</strong> {project.fabric}</p>
                            <p><strong>interfacing:</strong> {project.interfacing}</p>
                            <p><strong>notions:</strong> {project.notions}</p>
                            </div>
                        </Card.Text>
                    </Card.Body>
                </Card>
                <div style={{display:'flex'}}>
                    <Button onClick={() => setModalOpen(true)} className="m-2">
                        Edit Project
                    </Button>
                    <Button onClick ={() => RemoveProject()} className="m-2">
                        Delete Project
                    </Button>
                    <Button onClick= { () => navigate(`/projects`)}  className="m-2"> 
                        Back to projects
                    </Button>
                    <Button onClick= { () => navigate(`/addProject`)}  className="m-2"> 
                        Add Project
                    </Button>
                </div>
            </div>
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

