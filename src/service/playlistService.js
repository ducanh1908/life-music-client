
import apiClient from './apiClient';

const playlistApi = {
    
    createPlaylist(data) {
        const url =`/playlist/${data.id}`;
        return apiClient.post(url, data);
    },

    getAllPlaylist(data) {
        const url = `/playlists/${data}`;
        return apiClient.get(url, data);
    },
  
    getPlaylistById(data) {
        const url = `/playlist/${data}`
        return apiClient.get(url,data);
    },
    updatePlaylist(id,data) {
        const url = `/playlist/${id}`
        return apiClient.patch(url,data);
    },
    addSongPlaylist(songId,playlistId) {
        console.log(songId)
        const url = `/playlist/addsong/${songId}`
        return apiClient.post(url, {playlistId});
    },
    removeSongPlaylist(songId,playlistId) {
        console.log(songId)
        const url = `/playlist/addsong/${songId}`
        return apiClient.post(url, {playlistId});
    }

}
export default playlistApi;