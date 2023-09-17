import requests from "@/api/request";
import axios from "axios";

export const upload = () => {
    return requests({url: '/api/upload', method: 'post'})
}

export const getApprByPageApi = (pageNum, pageSize) => {
    // let res = null
    return  requests({url: '/appr/getAllByPage', method: 'get', params: {pageNum, pageSize}})
}

export const getImage = (imgUrl) => {
    // let res = null
    return  requests({url: '/test/download', method: 'get', params: {imgUrl}})
}

// axios.get("/test/download", {params: {imageUrl: "https://i0.hdslb.com/bfs/banner/9104fe664ee2d85a7bf583aa105fb9fef5ea56c8.png@976w_550h_1c_!web-home-carousel-cover.avif"}})
//     .then(res => {
//         console.log('res',res)
//         this.imageSrc = URL.createObjectURL(res.data);
//     });



