
import apiClient from './apiClient';

const playlistApi = {
    
    createPlaylist(data) {
        const url =`/playlist/${data.id}`;
        return apiClient.post(url, data);
    },

    getAllPlaylist(data) {
        const url = '/playlists';
        return apiClient.get(url, data);
    },
    getPlaylistByUserId(data) {
        const url = `/playlists/${data}`
        return apiClient.get(url,data);
    },
    searchPlaylist(data) {
        const url = `/playlist/search/${data}`;
        return apiClient.get(url);
    }

}
export default playlistApi;