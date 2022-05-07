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
export const getProject = (projectId) => {
    console.log('this is projectId', projectId)
    return axios(`${apiUrl}/projects/${projectId}`)
}
// POST -> create function
export const createProject = (user, newProject) => {
    console.log('user', user)
    console.log('this is new Project ', newProject)
    return axios({
        url: `${apiUrl}/projects`,
        method: 'POST',
        headers: {
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
//UPDATE
export const updateProject = (user, updatedProject) => {
    console.log('user', user)
    console.log('this is new Project ', updatedProject)
    return axios({
        url: `${apiUrl}/projects/${updatedProject._id}`,
        method: 'PATCH',
        headers: {
            Authorization:`Token token=${user.token}`
        },
        data: { project: {
            owner: user._id,
            type: updatedProject.type,
            pattern: updatedProject.pattern,
            fabric: updatedProject.fabric,
            interfacing: updatedProject.interfacing,
            notions: updatedProject.notions,
        }}
    })
}
//DELETE
export const removeProject = (user,projectId) => {
    console.log('user', user)
    console.log('this is projectId', projectId)
    return axios({
        url: `${apiUrl}/projects/${projectId}`,
        method: 'DELETE',
        headers: {
            Authorization:`Token token=${user.token}`
        },
    })
}
