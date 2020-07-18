const getAllPosts = async () => {
    return await fetch('https://jsonplaceholder.typicode.com/posts');
}
const apiService = {
    getAllPosts,
};
export default apiService;