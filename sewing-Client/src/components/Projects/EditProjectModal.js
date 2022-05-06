import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import ProjectForm from '../shared/ProjectForm'
import { updateProject} from '../../api/projects'
import modalpic from '../../images/needle2.jpg'

const EditProjectModal = (props) => {
    const { user, msgAlert, show, handleClose, updateProject, triggerRefresh } = props 
    const [project, setProject] = useState( 
        props.project
    )
    const handleChange = (e) => {
        e.persist()

        setProject(prevProject => {
            const name = e.target.name
            const value = e.target.value 
            const updatedValue = { [name]: value }

            console.log('this is prevProject', prevProject)
            console.log('this is updatedValue', updatedValue)

            return {...prevProject, ...updatedValue}
        }) 
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("project to submit as edit", project)
        updateProject(user, project)
            .then(res => handleClose())
            .then(() => 
                 msgAlert ({
                    heading: 'Project Updated',
                    message: 'Change is good',
                    variant: 'success', 
            }))
            .then(() => triggerRefresh())
            .catch(() => 
                 msgAlert ({
                    heading: 'Dang!',
                    message: 'No workie',
                    variant: 'danger',
            }))
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}> 
                <Modal.Header closeButton> </Modal.Header>
                <Modal.Body>
                    <ProjectForm  
                        project={project}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        heading="Add Project"
                        />
                </Modal.Body>
            </Modal>
        </>
        
       
    )
}
export default EditProjectModal