<template>
<!--  <div>-->
<!--    <img :src="imageSrc"/>-->
<!--  </div>-->
  <div>
    <button @click="downloadImage">Download Image</button>
  </div>
</template>

<script>
import axios from "axios";
import {getImage} from "@/api";

export default {
  name: "ImageDownload",
  data() {
    return {
      imageSrc: "",
      imgUrl: "https://nlp-eb.cdn.bcebos.com/logo/logoErnieBot.png",
      imgUrls : [
        "https://nlp-eb.cdn.bcebos.com/logo/logoErnieBot.png",
        "https://nlp-eb.cdn.bcebos.com/logo/logoErnieBot.png",
        "https://nlp-eb.cdn.bcebos.com/logo/logoErnieBot.png"
      ]
    };
  },
  mounted() {
    // this.iniImages()
  },
  methods: {
    iniImages() {
      // getImage(this.imgUrl).then(res => {
      //   console.log(res)
      // })
      // console.log('hhhh')
      axios.get("/api/test/download", {params: {imageUrl: this.imgUrl}})
          .then(response => {
            console.log(response)
            this.imageSrc = window.URL.createObjectURL(new Blob([response.data]));
            console.log(this.imageSrc)
          });
    },
    // async downloadImage() {
    //   try {
    //     // Make a request to the backend endpoint
    //     const response = await fetch('/api/test/download', {
    //       method: 'GET',
    //       responseType: 'arraybuffer', // Important to receive binary data
    //     });
    //
    //     if (response.ok) {
    //       // Convert the response to a blob
    //       const blob = await response.blob();
    //
    //       // Create a download link and trigger the download
    //       const link = document.createElement('a');
    //       link.href = URL.createObjectURL(blob);
    //       link.download = 'image.jpg'; // Set desired file name
    //       link.click();
    //     } else {
    //       console.error('Failed to download image');
    //     }
    //   } catch (error) {
    //     console.error('An error occurred:', error);
    //   }
    // },
    async downloadImage() {
      try {
        // Make a request to the backend endpoint using Axios

        const response = await axios.get('/api/test/download', {
          responseType: 'arraybuffer', // Important to receive binary data
          params: {imageUrl: this.imgUrl}
        }, );

        // Convert the response to a blob
        const blob = new Blob([response.data], { type: 'image/png' });

        // Create a download link and trigger the download
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'image.png'; // Set desired file name
        link.click();
      } catch (error) {
        console.error('An error occurred:', error);
      }
    },

    async downloadImages() {
      try {
        const imageUrls = this.imgUrls;

        for (const imageUrl of imageUrls) {
          const response = await axios.get('/api/test/download', {
            responseType: 'arraybuffer',
            params: {imageUrl: imageUrl}
          });

          if (response.status === 200) {
            const blob = new Blob([response.data], { type: 'image/jpeg' });
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'image.jpg';
            link.click();
          } else {
            console.error(`Failed to download image: ${imageUrl}`);
          }
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    },
  },
}
</script>

<style scoped>

</style>