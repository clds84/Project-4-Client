import apiUrl from '../apiConfig'
import axios from 'axios'

export const getProfile = (user) => {
    console.log('this is user in index axios', user)
      return axios({
        url: `${apiUrl}/profile`,
        method: 'GET',
        headers: {
            Authorization: `Token token=${user.token}`
        },
     })
}
// POST -> create function for profile
export const createProfile = (user, newProfile) => {
    console.log('user', user)
    console.log('this is new Profile ', newProfile)
    return axios({
        url: `${apiUrl}/profile`,
        method: 'POST',
        headers: {
            Authorization:`Token token=${user.token}`
        },
        data: { profile:{ 
            owner:user._id,
            name: newProfile.name,
            about: newProfile.about,
            sewingBackground:  newProfile.sewingBackground,
            machineType: newProfile.machineType,
            preferredNotions: newProfile.preferredNotions,
            projectBucketlist: newProfile.projectBucketlist,
        }}
    })
}
//UPDATE
export const updateProfile = (user, updatedProfile) => {
    console.log('user', user)
    console.log('this is new Profile ', updatedProfile)
    return axios({
        url: `${apiUrl}/profile`,
        method: 'PATCH',
        headers: {
            Authorization:`Token token=${user.token}`
        },
        data: { profile: {
            owner: user._id,
            name: updatedProfile.name,
            about: updatedProfile.about,
            sewingBackground: updatedProfile.sewingBackground,
            machineType: updatedProfile.machineType,
            prefferedNotions: updatedProfile.prefferedNotions,
            projectBucketlist: updatedProfile.projectBucketlist
        }}
    })
}
//DELETE
export const removeProfile = (user) => {
    console.log('user', user)
    
    return axios({
        url: `${apiUrl}/profile`,
        method: 'DELETE',
        headers: {
            Authorization:`Token token=${user.token}`
        },
    })
}




    

