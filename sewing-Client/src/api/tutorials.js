import apiUrl from '../apiConfig'
import axios from 'axios'

// INDEX -> all Favorites
export const getAllTutorials = (user) => {
    return axios({
        url: `${apiUrl}/tutorials`,
        method: 'GET',
        headers: {
            Authorization: `Token token=${user.token}`
        },
    })
}