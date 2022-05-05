import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'

const ProfileForm = (props) => {
    const { profile, handleChange, handleSubmit, heading } = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    placeholder="What's your name?"
                    value={profile.name}
                    name='name'
                    onChange={handleChange}
                />
                <Form.Label>about</Form.Label>
                <Form.Control
                    placeholder="Tell us a little bit about yourself"
                    value={profile.about}
                    name='about'
                    onChange={handleChange}
                />
                <Form.Label>Sewing Background</Form.Label>
                <Form.Control
                    placeholder="Tell us about your sewing background"
                    value={profile.sewingBackground}
                    name='sewingBackground'
                    onChange={handleChange}
                />
                <Form.Label>Machine Type</Form.Label>
                <Form.Control
                    placeholder="What type of sewing machine do you use?"
                    value={profile.machineType}
                    name='machineType'
                    onChange={handleChange}
                />
                <Form.Label>Project Bucketlist</Form.Label>
                <Form.Control
                    placeholder="Tell us something you'd really like to make"
                    value={profile.projectBucketlist}
                    name='projectBucketlist'
                    onChange={handleChange}
                />
                <Form.Label>Preferred Notions</Form.Label>
                <Form.Control
                    placeholder="What are your preferred notions?"
                    value={profile.preferredNotions}
                    name='preferredNotions'
                    onChange={handleChange}
                />
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}
export default ProfileForm