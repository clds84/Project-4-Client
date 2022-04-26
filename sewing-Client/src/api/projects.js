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
    })
}

export const getProject = (id) => {
    return axios(`${apiUrl}/projects/${id}`)
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