import React, { useState } from 'react'
import { createProject } from '../../api/projects'
import { Form, Container, Button } from 'react-bootstrap' 
//this function renders a form and calls function
const CreateProject = () => {
    const [project, setProject] = useState({
        type: '',
        fabric:'',
        interfacing:'',
        notions:[],
        pattern:'',
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

    }

    return (
        <Container className="justify-content-center">
            <Form onSubmit={handleSubmit}>
                <Form.Label>Type</Form.Label>
                <Form.Control
                    placeholder="Enter the type of project"
                    value={project.type}
                    name='type'
                    onChange={handleChange}
                />
                <Form.Label>Fabric</Form.Label>
                <Form.Control
                    placeholder="Enter the fabric used"
                    value={project.fabric}
                    name='fabric'
                    onChange={handleChange}
                />
                <Form.Label>Interfacing</Form.Label>
                <Form.Control
                    placeholder="Enter the interfacing used"
                    value={project.interfacing}
                    name='interfacing'
                    onChange={handleChange}
                />
                <Form.Label>Pattern</Form.Label>
                <Form.Control
                    placeholder="Enter the pattern used"
                    value={project.pattern}
                    name='pattern'
                    onChange={handleChange}
                />
                <Form.Label>Notions</Form.Label>
                <Form.Control
                    placeholder="Enter the notions used"
                    value={project.notions}
                    name='notions'
                    onChange={handleChange}
                />
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}
export default CreateProject