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
    console.log('this is new Project ', newProfile)
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

//DELETE
// export const removeProject = (user,projectId) => {
//     console.log('user', user)
//     console.log('this is projectId', projectId)
//     return axios({
//         url: `${apiUrl}/projects/${projectId}`,
//         method: 'DELETE',
//         header: {
//             Authorization:`Token token=${user.token}`
//         },
//     })
// }


    

