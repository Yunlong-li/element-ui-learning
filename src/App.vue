<template>
  <div id="app">
    <!--    <img alt="Vue logo" src="./assets/logo.png">-->
    <!--    <BasicButton></BasicButton>-->
    <!--    <Fileupload msg="Welcome to Your Vue.js App"/>-->
    <!--    <Message></Message>-->
    <!--    <Notification></Notification>-->
    <!--    <Pagination></Pagination>-->
        <ImageDownload></ImageDownload>
    <!--    <CheckBox></CheckBox>-->
<!--    <ImgDownload2></ImgDownload2>-->
<!--    <MultiImageDownload></MultiImageDownload>-->
<!--    <TravalNingBo></TravalNingBo>-->
  </div>
</template>

<script>
import Fileupload from "@/components/upload/Fileupload";
import BasicButton from "@/components/Button/BasicButton";
import Message from "@/components/notice/Message";
import Notification from "@/components/notice/Notification";
import Pagination from "@/components/pagination/Pagination";
import CheckBox from "@/components/Table/CheckBox";
import ImageDownload from "@/components/Test/ImageDownload";
import ImgDownload2 from "@/components/Test/ImgDownload2";
import MultiImageDownload from "@/components/Test/MultiImageDownload";
import TravalNingBo from "@/components/Test/TravalNingBo";

export default {
  name: 'App',
  components: {
    BasicButton,
    Fileupload,
    Message,
    Notification,
    Pagination,
    CheckBox,
    ImageDownload,
    ImgDownload2,
    MultiImageDownload,
    TravalNingBo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  /*background-image: url(@/assets/NingBoCity_BCImage.jpeg);*/
  /*background-repeat: repeat;*/
  /*background-position: center;*/
  /*background-attachment: scroll;*/
}
/*:root {*/
/*  !*background-color: rgba(77, 77, 77, .5);*!*/

/*}*/
</style>
