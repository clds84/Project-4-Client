import React, { useState } from 'react'
import { createProject } from '../../api/projects'
import { Form, Container, Button } from 'react-bootstrap' 
import { createProjectSuccess, createProjectFailure }from '../shared/AutoDismissAlert/messages'
import { useNavigate } from 'react-router-dom'
import ProjectForm from '../shared/ProjectForm'
import modalpic from '../../images/gutermann.jpg'
//this function renders a form and calls function
const CreateProject = (props) => {
    const { user, msgAlert } = props
    console.log('this is user in create', user)
    const navigate = useNavigate()
    const [project, setProject] = useState({
        type: '',
        fabric:'',
        interfacing:'',
        notions:[],
        pattern:'',
        image:'',
    })

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

        console.log('this is project', project)
        createProject(user, project)
            .then(res => {navigate(`/projects/${res.data.project._id}`)
        })
            .then(() => 
                 msgAlert ({
                    heading: 'Awesome!',
                    message: createProjectSuccess,
                    variant: 'success', 
            }))
            .catch(() => 
                 msgAlert ({
                    heading: 'Dang!',
                    message: createProjectFailure,
                    variant: 'danger',
            }))
    }

    return (
        <div style={{background: `url(${modalpic})`, backgroundSize:'cover',height:'1000px'}}>

        <ProjectForm
            project={project}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            heading="Add Project"
            />
        </div>
    )
}
export default CreateProject