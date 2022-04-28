import apiUrl from '../apiConfig'
import axios from 'axios'

// INDEX -> all Favorites
export const getAllProjects = (user) => {
    return axios({
        url: `${apiUrl}/projects`,
        method: 'GET',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { userId: user._id }
    })
}

    export const getProject = (id) => {
        return axios(`${apiUrl}/projects/${id}`)
    }
// POST -> create function
export const createProject = (user, newProject) => {
    console.log('user', user)
    console.log('this is new Project ', newProject)
    return axios({
        url: `${apiUrl}/projects`,
        method: 'POST',
        header: {
            Authorization:`Token token=${user.token}`
        },
        data: { project: {
            owner: user._id,
            type: newProject.type,
            pattern: newProject.pattern,
            fabric: newProject.fabric,
            interfacing: newProject.interfacing,
            notions: newProject.notions,



             }}
            
    })
}
// export const getProject = (id, user) => {
//     return axios({
//         url: `${apiUrl}/projects/${id}`,
//         method: 'GET',
//         headers: {
//             Authorization: `Token token=${user.token}`
//         },
//     })
// }