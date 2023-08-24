import axios from "../utils/axios.interceptors"
const request = {
    getImages : async(skip,limit) => {
        console.log("请求图片数组");
        const response = await axios.get(`/api/getImgs?skip=${skip}&limit=${limit}`);
        return response;
    },
    getArticlesList : async(skip, limit) => {
        console.log("请求文章数组");
        const response = await axios.get(`/api/getArticlesList?skip=${skip}&limit=${limit}`);
        return response;
    },
    uploadArticle : async(from) => {
        console.log("上传文章");
        const response = await axios.post(`/api/uploadArticle`,from);
        return response;
    },
    uploadImg : async(data) => {
        console.log("上传图片");
        const response = await axios.post(`/api/uploadImg`,data);
        return response;
    },
    getArticleMarkdown : async (uid) => {
        console.log("请求文章："+uid);
        const response = await axios.get(`/api/getArticleMarkdown?uid=${uid}`)
        return response;
    },
    login : async(username, password) => {
        const response = await axios.post(`/api/login`,{
            username: username,
            password: password
        })
        return response;
    }
}

export default request
