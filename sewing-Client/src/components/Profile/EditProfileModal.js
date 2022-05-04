import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import ProfileForm from '../shared/ProfileForm'
import { updateProfile} from '../../api/profile'

const EditProfileModal = (props) => {
    const { user, msgAlert, show, handleClose, updateProfile, triggerRefresh } = props 
    const [profile, setProfile] = useState( 
        props.profile
    )
    const handleChange = (e) => {
        e.persist()

        setProfile(prevProfile => {
            const name = e.target.name
            const value = e.target.value 
            const updatedValue = { [name]: value }

            console.log('this is prevProfile', prevProfile)
            console.log('this is updatedValue', updatedValue)

            return {...prevProfile, ...updatedValue}
        }) 
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("profile to submit as edit", profile)
        updateProfile(user, profile)
            .then(res => handleClose())
            .then(() => 
                 msgAlert ({
                    heading: 'Profile Updated',
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
                    <ProfileForm
                        profile={profile}
                        handleChange={handleChange}
                        handleSubmit={handleSubmit}
                        heading="Add Profile"
                    />
                </Modal.Body>
            </Modal>
        </>
        
       
    )
}
export default EditProfileModal

