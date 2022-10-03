import apiClient from './apiClient';
const searchSongApi = {
    searchSong(data) {
        const url = 'song/search/:key';
        return apiClient(url, data)
    }
}
export default searchSongApi;