
import apiClient from './apiClient';

const playlistApi = {
    
    createPlaylist(data) {
        const url =`/playlist/${data.id}`;
        return apiClient.post(url, data);
    },

    getAllPlaylist(data) {
        const url = '/playlist';
        return apiClient.get(url, data);
    },
    getPlaylistByUserId(data) {
        const url = `/playlists/${data}`
        return apiClient.get(url,data);
    },

}
export default playlistApi;