
import apiClient from './apiClient';

const songApi = {
    getSong(data) {
        const url ='/songs';
        return apiClient.get(url, data)
    },
    getSongsByPlaylistId(data){
        const url =`/songs/${data}`;
        return apiClient.get(url)
    },
    uploadedSongs(data) {
        const url = '/song/uploaded';
        return apiClient.get(url, data)
    }

}
export default songApi;