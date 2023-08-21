import axios from 'axios'

const request = {
    getImages : async(skip,limit) => {
        console.log("请求图片数组");
        const response = await axios.get(`http://127.0.0.1:3001/getImgs?skip=${skip}&limit=${limit}`);
        return response;
    }
}

export default request
