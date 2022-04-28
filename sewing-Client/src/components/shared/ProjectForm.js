import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const ProjectForm = (props) => {
    const { project, handleChange, handleSubmit, heading } = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
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
export default ProjectForm