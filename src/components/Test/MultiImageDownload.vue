<template>
  <div>
    <button @click="downloadImages">Download Images as Zip</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "MultiImageDownload",
  methods: {
    async downloadImages() {
      // let apiUrl = '/api/test/downloadImagesAsZip2'
      // try {
      //   const imageNames = [
      //     "20230423000123",
      //     "20230423000236",
      //     "20230423000242"
      //   ];
      //   // const encodedImageNames = imageNames.map(encodeURIComponent);
      //
      //   const response = await axios.get(apiUrl, {
      //     responseType: "blob",
      //     params: { imageNames: JSON.stringify(imageNames) },
      //     // params: { imageNames: imageNames },
      //     // paramsSerializer: params => {
      //     //   return qs.stringify(params, { arrayFormat: 'repeat' });
      //     // }
      //   });
      //
      //   const url = window.URL.createObjectURL(new Blob([response.data]));
      //   const link = document.createElement("a");
      //   link.href = url;
      //   link.setAttribute("download", "images.zip");
      //   document.body.appendChild(link);
      //   link.click();
      // } catch (error) {
      //   console.error("Error downloading images:", error);
      // }


      let apiUrl = '/api/test/downloadImagesAsZip2'
      try {
        const imageNames = [
          "20230423000123",
          "20230423000236",
          "20230423000242"
        ];

        const response = await axios.post(apiUrl, JSON.stringify(imageNames), {
          responseType: "blob",
          headers: {
            "Content-Type": "application/json"
          }
        });

        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "images.zip");
        document.body.appendChild(link);
        link.click();
      } catch (error) {
        console.error("Error downloading images:", error);
      }
    },
  },
};
</script>
