import React, { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { getProfile } from '../../api/profile'
import { useParams, useNavigate } from 'react-router-dom'

const ShowProfile = (props) => {
    console.log('these are the props in profile', props)
    const [profile, setProfile] = useState(null)
    const { user, msgAlert } = props
    const { id } = useParams()
    
    console.log('this is id', id)
    useEffect(() => {
        getProfile(id)
            .then(profile => {
                console.log('this is the profile data', profile.data.profile)
                setProfile(profile.data.profile)
                console.log('this is profile',profile)
            })
            .catch(() =>
            msgAlert({
                heading: 'Oh No!',
                message: 'shit',
                variant: 'danger',
        }))
    }, [])

    if(!profile) {
        return (
            <>
                <h2>Looks like you don't have a profile yet! Click <Link to='/addProfile'>here</Link> to get started</h2>
            </>
        )
    }
    if (profile) {
        return (
            <>
                <h2>hi</h2>
            </>
        )
    }
}
export default ShowProfile