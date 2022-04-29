import apiUrl from '../apiConfig'
import axios from 'axios'

export const getProfile = (profileId) => {
    return axios(`${apiUrl}/profile/${profileId}`)
}
// POST -> create function for profile
export const createProfile = (user, newProfile) => {
    console.log('user', user)
    console.log('this is new Profile ', newProfile)
    return axios({
        url: `${apiUrl}/profile`,
        method: 'POST',
        header: {
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


    

