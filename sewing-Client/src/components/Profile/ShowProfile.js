import React, { useState, useEffect } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getProfile, removeProfile, updateProfile } from '../../api/profile'
import { useParams, useNavigate } from 'react-router-dom'
import EditProfileModal from './EditProfileModal'
import { Sample } from '../styling/sample.styled'
import buttons from '../../images/buttons.jpg'
import needle from '../../images/needle3.jpg'

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
    }, [updated])
    
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

        return (
            <div style={{display:'flex', justifyContent:'center', alignItems:'center', backgroundImage: `url(${needle})`, backgroundSize:'cover', width:'100%', height:'800px' }}>
                <h2 style={{fontSize:'45px', marginTop:'-60px'}}>Looks like you don't have a profile yet! Click <Link to='/addProfile'>here</Link> to get started</h2>
            </div>
        )
    }

    if (profile) {
        return (    
            <>
                <div style={{padding: '100px', 
                                backgroundImage: `url(${buttons})`, 
                                backgroundSize: 'cover'
                            }}>
                    <div style={{display:'flex', 
                                justifyContent:'center'
                                }}>
                        <Card border="dark" 
                            className="m-2 shadow p-3 mb-5 bg-body rounded"
                            style={{width: '40rem', 
                                    borderRadius: '20px'
                                    }}>
                            <Card.Header style={{textAlign: 'center',
                                                fontSize: '28px',
                                                background: 'white'
                                                }}>
                                <strong>Profile</strong>
                            </Card.Header>
                            <Card.Body style={{textAlign: 'center'}}>
                                <Card.Text>
                                    <strong>Name: </strong> <br /><br />  {profile.name}                                
                                    <hr></hr>                           
                                    <strong>About: </strong> <br /><br /> {profile.about}                           
                                    <hr></hr>                           
                                    <strong>Sewing Background:</strong> <br /><br />  {profile.sewingBackground}                            
                                    <hr></hr>                           
                                    <strong>Machine Type:</strong> <br /><br />  {profile.machineType}                            
                                    <hr></hr>                            
                                    <strong>Project Bucketlist:</strong> <br /><br />   {profile.projectBucketlist}
                                    <hr></hr>                               
                                    <strong>About:</strong> <br /><br />   {profile.about}
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer style={{
                                textAlign: 'center',
                                background: 'white'
                                }}>
                                <Button onClick={() => setModalOpen(true)} className="m-2">
                                    Edit Profile
                                </Button>
                                <Button onClick ={() => deleteProfile()} className="m-2">
                                    Delete Profile
                                </Button>
                                <Button onClick={() => navigate('/projects')} className="m-2">  
                                        My Projects
                                </Button>
                                <Button onClick={() => navigate('/projects')} className="m-2">  
                                        My Comments
                                </Button>
                            </Card.Footer>
                        </Card>
                    </div>
                </div>
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
    }
}

export default ShowProfile