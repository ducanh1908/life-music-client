
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
    addSongToPlaylist(data) {
        const url = `/playlist/addsong/${data.songId}`;
        return apiClient.post(url, {playlistId : data.playlistId})
    },

}
export default playlistApi;