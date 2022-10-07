
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
    },
    getSongById(data) {
        const url = `/song/${data}`;
        return apiClient.get(url, data)
    },
    deleteSong(data) {
        const url = `/song/${data}`;
        return apiClient.delete(url)
    },
    getCate() {
        const url = `/cate`;
        return apiClient.get(url)
    },
    searchSong(data) {
            const url = `song/search/${data}`;
            return apiClient.get(url)
        }
}
export default songApi;
