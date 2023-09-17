<template>

  <!--  点击上传——普通上传-->
  <!--  <el-upload-->
  <!--      action="http://localhost:8081/api/upload"-->
  <!--      :on-preview="handlePreview"-->
  <!--      accept=".pdf"-->
  <!--      :limit="10"-->
  <!--  >-->
  <!--    <el-button size="small" type="primary">点击上传</el-button>-->
  <!--    <div slot="tip" class="el-upload__tip">只能上传pdf文件，且不超过10MB</div>-->
  <!--  </el-upload>-->

  <!--拖拽上传-->
  <el-upload
      accept=".pdf"
      action="http://localhost:8081/api/upload"
      drag
      multiple
      :on-remove="onRemove"
      :on-success="onSuccess"
      >
    <i class="el-icon-upload"></i>
    <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
    <div slot="tip" class="el-upload__tip">只能上传pdf文件，且不超过10MB</div>
  </el-upload>
</template>

<script>
export default {
  name: 'Fileupload',
  props: {
    msg: String
  },
  methods: {
    handlePreview(file) {
      window.open(file.response.url)
    },
    onRemove(){
      this.$message({message:'已删除',type:'warning'})
    },
    onSuccess(){
      // this.$message({message:'上传成功',iconClass:'el-icon-check'})
      this.$message({message:'上传成功',type:'success'})
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
