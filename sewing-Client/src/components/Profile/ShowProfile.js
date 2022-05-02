import React, { useState, useEffect } from 'react'
import { Button, Card, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getProfile, removeProfile } from '../../api/profile'
import { useParams, useNavigate } from 'react-router-dom'

const ShowProfile = (props) => {
    console.log('these are the props in profile', props)
    const [profile, setProfile] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
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
    }, [user])
    
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
            .then(() => {navigate(`/profile`)})
            .catch(() =>
                msgAlert({
                    heading: 'Dang!',
                    message: 'no workie',
                    variant: 'danger',
            }))
    }

       //loading screen while api call happens
       if (!profile) {
    
        return <h2>Looks like you don't have a profile yet! Click <Link to='/addProfile'>here</Link> to get started</h2>
    }

    if (profile) {
            // if (profiles.user_id === user.id)
            return (
                <>
                    <Card style={{width: '30%' }} className="m-2 shadow p-3 mb-5 bg-body rounded">
                        <Card.Header style={{
                            textAlign: 'center'
                        }}>Name: {profile.name} </Card.Header>
                        <Card.Body style={{
                            textAlign: 'center'
                        }}>
                            <Card.Text>
                                {/* <Link className='viewProfile' to={`/profiles/${profile.id}`}>View {profile.name}</Link> */}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer style={{
                            textAlign: 'center'
                        }}>
                            {/* link to create an invite */}
                            {/* <span>Schedule Playdate with: </span> */}
                                {/* <Link className="invite" to={`/addInvite/`}>{profile.name}</Link> */}
                        </Card.Footer>
                    </Card>
                    <Button onClick={() => setModalOpen(true)} className="m-2">
                         Edit Project
                    </Button>
                    <Button onClick ={() => deleteProfile()} className="m-2">
                    Delete Project
                </Button>
                </>

            )
       // })

        }
    // if(!profile) {
    //     return (
    //         <>
    //             <h2>Looks like you don't have a profile yet! Click <Link to='/addProfile'>here</Link> to get started</h2>
    //         </>
    //     )
    // }
    // else if (profile) {

    //     return (
    //         <>
    //         <h2>hello</h2>
    //         <Container className="justify-content-center">
    //             <Card  style={{ width: '30%' }} className="m-2" >
    //                 <Card.Header> {profile[0].name} </Card.Header>
    //                 <Card.Body>
    //                     <Card.Text>
    //                         {/* <Link to={`/projects/${profile._id}`}>View </Link> */}
    //                     </Card.Text>
    //                 </Card.Body>
    //             </Card>
    //         </Container>
    //         </>
    //     )
    // }
}
//key={profile.id} this is on 39, <Card ()>
export default ShowProfile