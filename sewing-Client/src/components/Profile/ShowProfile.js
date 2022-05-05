import React, { useState, useEffect } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getProfile, removeProfile, updateProfile } from '../../api/profile'
import { useParams, useNavigate } from 'react-router-dom'
import EditProfileModal from './EditProfileModal'
import { Sample } from '../styling/sample.styled'
import buttonImage from './buttons.jpg'

const ShowProfile = (props) => {
    console.log('these are the props in profile', props)
    const [profile, setProfile] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [updated, setUpdated] = useState(false)
    const navigate = useNavigate()
    const { user, msgAlert } = props
    
    const routeChange = () =>{ 
        let path = `/projects`; 
        navigate(path);
      }
      
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
                <div style={{padding: '100px', backgroundImage: `url(${buttonImage})`, backgroundSize: 'cover'}}>
                <div style={{display:'flex', justifyContent:'center'}}>
                    <Card border="dark" style={{width: '40rem', borderRadius: '20px'}} className="m-2 shadow p-3 mb-5 bg-body rounded">
                 <Sample>
                        <Card.Header style={{
                            textAlign: 'center',
                            fontSize: '28px',
                            background: 'white',
                            opacity: '.1'
                        }}          
                        >
                            <strong>Profile</strong>
                        </Card.Header>
                      
                        <Card.Body style={{
                            textAlign: 'center'
                        }}>
                            {/* <Card.Title>Card Title</Card.Title> */}
                            <Card.Text>
                                 <strong>Name: </strong> <br /><br />  {profile.name}
                            </Card.Text>
                                <hr></hr>
                            <Card.Text>
                                <strong>About: </strong> <br /><br /> {profile.about}
                            </Card.Text>
                                <hr></hr>
                            <Card.Text>
                                 <strong>Sewing Background:</strong> <br /><br />  {profile.sewingBackground}
                            </Card.Text>
                                 <hr></hr>
                            <Card.Text>
                                <strong>Machine Type:</strong> <br /><br />  {profile.machineType}
                            </Card.Text>
                                <hr></hr>
                            <Card.Text>
                                <strong>Project Bucketlist:</strong> <br /><br />   {profile.projectBucketlist}
                            </Card.Text>
                                <hr></hr>
                            <Card.Text>
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
                        </Sample>
                    </Card>
                    </div>
                    <div style={{textAlign:'center'}}>
                    
                
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
       // })
    }

}

export default ShowProfile