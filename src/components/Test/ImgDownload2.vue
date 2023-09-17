<template>
  <div>
<!--    <input v-model="imageName" placeholder="Enter image name" />-->
    <button @click="downloadImage">Download Image</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "ImgDownload2",
  data() {
    return {
      imageName: "D:\\桌面文件\\学习文件\\秋招\\照片\\mypic1.png",
    };
  },
  methods: {
    async downloadImage() {
      let apiUrl = '/api/test/downloadImage'
      try {
        const response = await axios.get(apiUrl, {
          responseType: "blob",  // 注意设置 responseType 为 "blob"
          params: { imageName: this.imageName},
        });

        console.log(response)

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", this.imageName+'\\hhh.png');
        document.body.appendChild(link);
        link.style.display=true
        link.innerText='下载'
        // link.click();
      } catch (error) {
        console.error("Error downloading image:", error);
      }
    }
  }
}
</script>

<style scoped>

</style>