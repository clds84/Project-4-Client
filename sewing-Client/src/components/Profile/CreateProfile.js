import React, { useState } from 'react'
import { createProfile} from '../../api/profile'
//import { Form, Container, Button } from 'react-bootstrap' 
//import { createProfileSuccess, createProfileFailure }from '../shared/AutoDismissAlert/messages'
import { useNavigate } from 'react-router-dom'
import ProfileForm from '../shared/ProfileForm'

//this function renders a form and calls function
const CreateProfile = (props) => {
    const { user, msgAlert } = props
    console.log('this is user in create', user)
    const navigate = useNavigate()
    const [profile, setProfile] = useState({
        name: '',
        about:'',
        sewingBackground:'',
        machineType:'',
        preferredNotions:[],
        projectbucketlist:''
    })

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

        console.log('this is profile', profile)
        createProfile(user, profile)
            .then(res => {navigate(`/profile`)
        })
            .then(() => 
                 msgAlert ({
                    heading: 'Awesome!',
                    message: 'you did it',
                    variant: 'success', 
            }))
            .catch(() => 
                 msgAlert ({
                    heading: 'Dang!',
                    message: 'yo, you real?',
                    variant: 'danger',
            }))
    }

    return (
        <ProfileForm
            profile={profile}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            heading="Add Profile"
        />
    )
}
export default CreateProfile