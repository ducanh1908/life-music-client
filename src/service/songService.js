
import apiClient from './apiClient';

const songApi = {
    getSong(data) {
        const url ='/songs';
        return apiClient.get(url, data)
    },
    getSongById(id) {
        const url = `/songs/${id}`
        return apiClient.get(url, id)

    }

}
export default songApi;