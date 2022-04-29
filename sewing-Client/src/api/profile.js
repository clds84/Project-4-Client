import apiUrl from '../apiConfig'
import axios from 'axios'

export const getProfile = (user) => {
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
    console.log('this is new Project ', newProfile)
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


    

