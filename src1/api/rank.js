import axios from 'axios'

export function getTopList(argument) {
    const url = "http://localhost:3000/getTopList";
    return axios.get(url)
}