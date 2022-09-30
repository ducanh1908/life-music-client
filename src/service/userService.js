
import apiClient from './apiClient';

const userApi = {
    register(data) {
        const url ='/register';
        return apiClient.post(url, data)
    },

    login(data) {

        const url = '/login';
        return apiClient.post(url, data)
    },

    uploadSong(data) {
        const url = '/song';
        return apiClient.post(url, data)
    }
}
export default userApi;