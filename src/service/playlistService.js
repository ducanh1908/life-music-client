
import apiClient from './apiClient';

const playlistApi = {
    
    createPlaylist(data) {
        const url =`/playlist/${data.id}`;
        return apiClient.post(url, data);
    },
    getAllPlaylistUser(data) {
        const url = `/playlists/${data}`;
        return apiClient.get(url, data);
    },
    getPlaylistById(data) {
        const url = `/playlist/${data}`
        return apiClient.get(url,data);
    },
    getAllPlaylist(data) {
        const url = '/playlists'
        return apiClient.get(url, data);
    },
    getSongToPlaylist(data) {
        const url = `/playlist-song/${data}`;
        return apiClient.get(url, data);
    }

}
export default playlistApi;