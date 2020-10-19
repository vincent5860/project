<template>
  <div>
  <el-row> 
  <el-col :span="8">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">资源中心</a></el-breadcrumb-item>
      <el-breadcrumb-item>车队资源管理</el-breadcrumb-item>
      <el-breadcrumb-item>车队实时跟踪</el-breadcrumb-item>
      <el-breadcrumb-item>定位地图</el-breadcrumb-item>
    </el-breadcrumb>
  
  </el-col>
  <el-col :span="4"><div></div></el-col>
  <el-col :span="6"><div></div></el-col>
  <el-col :span="6"><div></div></el-col>
    </el-row>
    <br/>
    <el-row>  
    <el-col :span="6">
      <div>
        <el-tag
      v-for="tag in tags"
      :key="tag.name"
      closable
      :type="tag.type">
      {{tag.name}}
    </el-tag>
  </div>
</el-col>
  </el-row>
  <el-row>  
    <el-col :span="6" class="grid-content bg-purple-light">
      <el-card>
   <Info></Info>
    </el-card>
    </el-col>
  <el-col :span="18">
    <el-card>
    <Gmap></Gmap>
  
  </el-card>
  </el-col>
  </el-row>
  </div>
</template>

<script>
  import Gmap from './components/Gmap.vue'
  import Info from './components/Info.vue'
  export default {

    components:{
      Gmap,
      Info
    },
    data() {
      return {
        tags: [
           { name: '操作单列表', type: 'info' },
          { name: '定位地图', type: 'info' },
          
        ]
      };
    }
  }

</script>

<style>


</style>