const API = process.env.REACT_APP_API_URL;
const getAllPosts = async () => {
    return await fetch(`${API}/posts`);
}
const apiService = {
    getAllPosts,
};
export default apiService;