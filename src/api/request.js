import axios from "../utils/axios.interceptors"
const request = {
    getImages : async(skip,limit) => {
        console.log("请求图片数组");
        const response = await axios.get(`http://127.0.0.1:3001/getImgs?skip=${skip}&limit=${limit}`);
        return response;
    },
    getArticlesList : async(skip, limit) => {
        console.log("请求文章数组");
        const response = await axios.get(`http://127.0.0.1:3001/getArticlesList?skip=${skip}&limit=${limit}`);
        return response;
    },
    uploadArticle : async(from) => {
        console.log("上传文章");
        const response = await axios.post(`http://127.0.0.1:3001/uploadArticle`,from);
        return response;
    },
    getArticleMarkdown : async (uid) => {
        console.log("请求文章："+uid);
        const response = await axios.get(`http://127.0.0.1:3001/getArticleMarkdown?uid=${uid}`)
        return response;
    },
    login : async(username, password) => {
        const response = await axios.post(`http://127.0.0.1:3001/login`,{
            username: username,
            password: password
        })
        return response;
    }
}

export default request
