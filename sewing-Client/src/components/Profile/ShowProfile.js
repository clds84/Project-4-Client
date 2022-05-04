import React, { useState, useEffect } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getProfile, removeProfile, updateProfile } from '../../api/profile'
import { useParams, useNavigate } from 'react-router-dom'
import EditProfileModal from './EditProfileModal'

const ShowProfile = (props) => {
    console.log('these are the props in profile', props)
    const [profile, setProfile] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [updated, setUpdated] = useState(false)
    const navigate = useNavigate()
    const { user, msgAlert } = props
    
    console.log('this is user', user)
    useEffect(() => {
        getProfile(user)
            .then(profile => {
                console.log('this is the profile data', profile.data.profile)
                console.log('this is profile',profile)
                setProfile(profile.data.profile)
            })
            .catch(() =>
            msgAlert({
                heading: 'Oh No!',
                message: 'shit',
                variant: 'danger',
        }))
    }, [user, updated])
    
    const deleteProfile = () => {
        console.log('this is user', user)
        console.log('this is profile owner', profile)
        removeProfile(user)        
            .then(() =>
                msgAlert({
                    heading: 'Profile removed',
                    message: 'You are still a person',
                    variant: 'success',
            }))
            .then(() => {navigate(`/community-space`)})
            .catch(() =>
                msgAlert({
                    heading: 'Dang!',
                    message: 'no workie',
                    variant: 'danger',
            }))
    }

       if (!profile) {
    
        return <h2>Looks like you don't have a profile yet! Click <Link to='/addProfile'>here</Link> to get started</h2>
    }

    if (profile) {
            return (
                <>
                    <Card style={{width: '30%' }} className="m-2 shadow p-3 mb-5 bg-body rounded">
                        <Card.Header style={{
                            textAlign: 'center'
                        }}  
                            >Name: {profile.name} 
                        </Card.Header>
                        <Card.Body style={{
                            textAlign: 'center'
                        }}>
                            <Card.Text>
                               About: {profile.about}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer style={{
                            textAlign: 'center'
                        }}>
                        </Card.Footer>
                    </Card>
                    <Button onClick={() => setModalOpen(true)} className="m-2">
                         Edit Project
                    </Button>
                    <Button onClick ={() => deleteProfile()} className="m-2">
                         Delete Project
                    </Button>
                    <EditProfileModal
                        profile={profile}
                        show={modalOpen}
                        user={user}
                        triggerRefresh={() => setUpdated(prev => !prev)}
                        updateProfile={updateProfile}
                        handleClose = {() => setModalOpen(false)}
                        msgAlert={msgAlert}
                    />
                </>
            )
       // })
    }

}

export default ShowProfile