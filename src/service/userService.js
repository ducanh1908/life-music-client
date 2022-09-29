
import apiClient from './apiClient';

const userApi = {
    register(data) {
        const url ='/register';
        return apiClient.post(url, data)
    }
}
export default userApi;