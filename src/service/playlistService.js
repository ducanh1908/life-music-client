
import apiClient from './apiClient';

const playlistApi = {
    createPlaylist(data) {
        const url ='/playlist';
        return apiClient.post(url, data);
    },

    getAllPlaylist(data) {
        const url = '/playlist';
        return apiClient.get(url, data);
    },

}
export default playlistApi;