<template>
  <div>
    <el-table
        :data="apprInfos"
        stripe
        border
        fit
        tooltip-effect="dark"
        highlight-current-row
        :header-cell-style="{background:'#e6d8d8'}"
        fit="true"
        style="width: 100%">
      <el-table-column
          type="index"
          :index="indexMethod+1"
          label="序号"

      >
      </el-table-column>
      <el-table-column
          align="center"
          label="工号"
          prop="apprId"
          width="180">
      </el-table-column>
      <el-table-column
          align="center"
          label="姓名"
          prop="apprName"
          width="180">
      </el-table-column>
      <el-table-column
          align="center"
          label="部门"
          prop="apprDep">
      </el-table-column>
    </el-table>
<!--    <span class="demonstration">完整功能</span>-->
    <el-pagination
        background
        :current-page="pageInfo.pageNum"
        :page-size="pageInfo.pageSize"
        :page-sizes="[2,5,10,20]"
        :total="pageInfo.total"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>

<script>
import {getApprByPageApi} from "@/api";

export default {
  name: "Pagination",

  data() {
    return {
      pageInfo: {
        pageNum: 1,
        pageSize: 2,
        total: 100,
        // totalPages
      },
      apprInfos: [],
      // currentPageNum: 1,
      // currentPageSize: 2,


    };
  },

  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.pageInfo.pageSize = val
      this.getApprByPage();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.pageInfo.pageNum = val
      this.getApprByPage();
    },
    getApprByPage() {
      getApprByPageApi(this.pageInfo.pageNum, this.pageInfo.pageSize).then(res => {
        // console.log(res)
        if (res.code === '200') {
          if (res.result) {
            this.apprInfos = res.result.list
            // console.log(res)
            this.pageInfo.pageNum = res.result.pageNum
            this.pageInfo.pageSize = res.result.pageSize
            this.pageInfo.total = res.result.total
          }
        }
      })
    },
    indexMethod(index) {
      return index;
    },
  },

  mounted() {
    this.getApprByPage();
    // this.apprInfos = res.list
  }
}
</script>

<style scoped>


</style>