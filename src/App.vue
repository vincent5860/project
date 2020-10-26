<template>
  <div id="app">
  <el-row> 
  <el-col :span="8">
    <NavBar></NavBar>
   </el-col>
    </el-row>
    <br/>
    <el-row>  
    <el-col :span="6">
      <Tags></Tags>
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
  import NavBar from './components/NavBar.vue'
  import Tags from './components/Tags.vue'
 
  export default {
name:'app',
    components:{
      Gmap,
      Info,
      NavBar,
      Tags
    },
    
  }

</script>

<style>


</style>