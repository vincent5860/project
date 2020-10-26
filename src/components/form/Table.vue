<template>
     <div>
      <el-table
    :data="tableData"
    border
    style="width: 100%">
    <el-table-column
      prop="pick"
      label="接站点"
      >
    </el-table-column>
    <el-table-column
      prop="lastime"
      label="剩余抵达时间"
      >
    </el-table-column>
  </el-table>
</div>
</template>
<script>
import axios from 'axios'
export default {
    name:'Table',
    data(){
        return{
             tableData:[]
        }
    },
  mounted(){
     axios.get("tb1.json").then(response=>(this.tableData=response.data))
  }  
}
</script>
<style scoped>
.el-table{
  padding:8px;
}
</style>